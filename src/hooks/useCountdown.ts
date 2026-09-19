import { useEffect, useMemo, useState } from "react"
import { getTimeLeft } from "../utils/offerStatus"

export function useCountdown(expiresAt: string, nowOverride?: number) {
  const [localNow, setLocalNow] = useState(() => Date.now())

  useEffect(() => {
    if (nowOverride != null) return
    const id = window.setInterval(() => setLocalNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [nowOverride])

  const now = nowOverride ?? localNow
  return useMemo(() => getTimeLeft(expiresAt, now), [expiresAt, now])
}
