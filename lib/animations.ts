import type { Variants } from "framer-motion"

// Sistema de animación reutilizable para todo el sitio.

export const slideUpContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
}

export const slideUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

// Configuración estándar para disparar al entrar en viewport una sola vez.
export const viewportOnce = { once: true, amount: 0.2 } as const
