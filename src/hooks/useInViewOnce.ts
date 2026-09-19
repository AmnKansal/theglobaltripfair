import { useEffect, useRef, useState } from "react"

export function useInViewOnce<T extends HTMLElement>(threshold = 0.35) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold, visible])

  return { ref, visible }
}
