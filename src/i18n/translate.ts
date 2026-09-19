import type { Messages } from "./types"

const getPath = (source: unknown, path: string): unknown => {
  const parts = path.split(".")
  let current: unknown = source
  for (const part of parts) {
    if (typeof current !== "object" || current === null || !(part in current)) {
      return undefined
    }
    current = (current as Record<string, unknown>)[part]
  }
  return current
}

export const interpolate = (value: string, vars?: Record<string, string | number>) => {
  if (!vars) return value
  return value.replace(/\{(\w+)\}/g, (_, name: string) => String(vars[name] ?? `{${name}}`))
}

export const translate = (
  messages: Messages,
  fallback: Messages,
  key: string,
  vars?: Record<string, string | number>,
) => {
  const fromActive = getPath(messages, key)
  const fromFallback = getPath(fallback, key)
  const value =
    typeof fromActive === "string"
      ? fromActive
      : typeof fromFallback === "string"
        ? fromFallback
        : key

  if (import.meta.env.DEV && typeof fromActive !== "string" && typeof fromFallback !== "string") {
    console.warn(`[i18n] Missing translation key: ${key}`)
  }

  return interpolate(value, vars)
}
