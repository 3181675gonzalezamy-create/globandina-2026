"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { Particles } from "@/components/particles"
import { slideUpContainer, slideUpItem } from "@/lib/animations"

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 text-center"
    >
      {/* Capas de fondo con degradados radiales */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 50% 0%, #182410 0%, #0F0F0F 70%)",
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 15% 85%, rgba(94,139,126,0.16) 0%, transparent 45%), radial-gradient(at 85% 70%, rgba(139,94,60,0.14) 0%, transparent 45%)",
        }}
      />

      {/* Textura de patrón andino */}
      <div
        aria-hidden
        className="andean-pattern absolute inset-0 opacity-[0.5] mix-blend-soft-light"
      />

      {/* Resplandor dorado central */}
      <div
        aria-hidden
        className="animate-glow-pulse absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-dorado/25"
      />

      {/* Líneas SVG onduladas con efecto de dibujo */}
      <svg
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[40vh] w-full"
        viewBox="0 0 1440 400"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M0 300 C 240 220, 480 360, 720 280 S 1200 200, 1440 300"
          stroke="var(--dorado)"
          strokeWidth="1.5"
          strokeOpacity="0.5"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.4, ease: "easeInOut" }}
        />
        <motion.path
          d="M0 340 C 300 280, 560 400, 820 330 S 1220 260, 1440 350"
          stroke="var(--azul)"
          strokeWidth="1.5"
          strokeOpacity="0.35"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.6, ease: "easeInOut", delay: 0.3 }}
        />
      </svg>

      <Particles count={28} />

      {/* Contenido */}
      <motion.div
        variants={slideUpContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex max-w-4xl flex-col items-center"
      >
        <motion.span
          variants={slideUpItem}
          className="label-mini mb-6 font-sans text-dorado/90"
        >
          Región Andina · Colombia
        </motion.span>

        <motion.h1
          variants={slideUpItem}
          className="h1-hero font-display text-balance text-beige"
        >
          Raíces del <span className="shimmer-text">Futuro</span>
        </motion.h1>

        <motion.p
          variants={slideUpItem}
          className="mt-7 max-w-2xl text-pretty font-serif-poetic text-xl italic leading-relaxed text-beige/70 md:text-2xl"
        >
          Un viaje digital donde la tradición ancestral de los Andes se encuentra
          con la tecnología moderna. Territorio, memoria y latido.
        </motion.p>

        <motion.div
          variants={slideUpItem}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#regiones"
            className="rounded-full border border-dorado bg-dorado/10 px-8 py-3 font-sans text-sm font-medium text-dorado transition-all duration-300 hover:bg-dorado hover:text-negro"
          >
            Explorar el territorio
          </a>
          <a
            href="#historias"
            className="link-underline font-sans text-sm text-beige/70 transition-colors hover:text-beige"
          >
            Escuchar las historias
          </a>
        </motion.div>
      </motion.div>

      {/* Chevron de scroll */}
      <a
        href="#contadores"
        aria-label="Bajar a la siguiente sección"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-dorado/70 transition-colors hover:text-dorado"
      >
        <ChevronDown className="animate-bounce-ud" size={28} />
      </a>
    </section>
  )
}
