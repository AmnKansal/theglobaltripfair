import { useEffect, useRef, useState } from "react"

export function useInView<T extends HTMLElement>(threshold = 0.28) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}
