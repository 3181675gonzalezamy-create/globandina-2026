"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

export const NAV_LINKS = [
  { id: "hero", label: "Inicio" },
  { id: "regiones", label: "Regiones" },
  { id: "curiosidades", label: "Curiosidades" },
  { id: "moda", label: "Moda" },
  { id: "sonidos", label: "Sonidos" },
  { id: "quiz", label: "Quiz" },
  { id: "gastronomia", label: "Gastronomía" },
  { id: "galeria", label: "Galería" },
  { id: "historias", label: "Historias" },
] as const

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[9990] transition-all duration-300 ${
        scrolled
          ? "border-b border-beige/10 bg-negro/70 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8"
      >
        <a
          href="#hero"
          className="font-display text-lg font-bold tracking-tight text-beige"
        >
          Glob<span className="text-dorado">andina</span>
        </a>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.slice(1).map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="link-underline label-mini font-sans text-beige/70 transition-colors hover:text-beige"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="rounded-md p-1 text-dorado md:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-beige/10 bg-negro/95 backdrop-blur-md md:hidden">
          <ul className="flex flex-col px-5 py-4">
            {NAV_LINKS.slice(1).map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setOpen(false)}
                  className="label-mini block py-3 font-sans text-beige/75 transition-colors hover:text-dorado"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
