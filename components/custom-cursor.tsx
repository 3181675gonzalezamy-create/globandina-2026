"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const canHover =
      window.matchMedia("(hover: hover) and (pointer: fine)").matches
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!canHover) return

    setEnabled(true)
    document.body.classList.add("custom-cursor")

    const mouse = { x: -100, y: -100 }
    const ring = { x: -100, y: -100 }
    let raf = 0

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
      if (reduced && ringRef.current) {
        ringRef.current.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
      }
    }

    const isInteractive = (el: EventTarget | null) =>
      el instanceof Element &&
      !!el.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]')

    const onOver = (e: MouseEvent) => {
      if (ringRef.current) {
        ringRef.current.dataset.active = isInteractive(e.target) ? "true" : "false"
      }
    }

    const loop = () => {
      // Estela con retardo suave.
      ring.x += (mouse.x - ring.x) * 0.18
      ring.y += (mouse.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px)`
      }
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseover", onOver)
    if (!reduced) raf = requestAnimationFrame(loop)

    return () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseover", onOver)
      cancelAnimationFrame(raf)
      document.body.classList.remove("custom-cursor")
    }
  }, [])

  if (!enabled) return null

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 -ml-[5px] -mt-[5px] h-[10px] w-[10px] rounded-full bg-dorado"
      />
      <div
        ref={ringRef}
        data-active="false"
        className="pointer-events-none fixed left-0 top-0 -ml-[18px] -mt-[18px] h-[36px] w-[36px] rounded-full border border-dorado/60 transition-[width,height,opacity,border-color] duration-200 data-[active=true]:scale-125 data-[active=true]:border-azul/80"
      />
    </div>
  )
}
