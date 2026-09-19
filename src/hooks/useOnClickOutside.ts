import { useEffect, type RefObject } from "react"

export function useOnClickOutside(
  ref: RefObject<HTMLElement | null>,
  handler: () => void,
  enabled = true,
) {
  useEffect(() => {
    if (!enabled) return

    const listener = (event: MouseEvent | TouchEvent) => {
      const node = ref.current
      if (!node || node.contains(event.target as Node)) return
      handler()
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)
    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler, enabled])
}
