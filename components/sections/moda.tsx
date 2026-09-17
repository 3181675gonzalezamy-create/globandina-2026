"use client"

import { useRef } from "react"
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion"
import { slideUpContainer, slideUpItem, viewportOnce } from "@/lib/animations"

type Piece = {
  nombre: string
  descripcion: string
  /* color sólido de la paleta como placeholder, listo para reemplazar por foto */
  bg: string
  /* texto oscuro cuando el fondo es claro (beige) */
  textoOscuro?: boolean
  /* piezas grandes ocupan dos columnas en escritorio */
  grande?: boolean
}

const piezas: Piece[] = [
  {
    nombre: "Ruana boyacense",
    descripcion:
      "Nació en los telares de Boyacá para vencer el frío del páramo; hoy desfila reinterpretada en pasarelas y cápsulas de diseño urbano.",
    bg: "var(--marron)",
    grande: true,
  },
  {
    nombre: "Sombrero de tapia pisada",
    descripcion:
      "Tejido en paja por manos campesinas; ahora emblema de identidad en editoriales de moda contemporánea.",
    bg: "var(--beige)",
    textoOscuro: true,
  },
  {
    nombre: "Mochila tejida",
    descripcion:
      "Herencia de tejedoras que hilan memoria; hoy accesorio global que carga color y territorio.",
    bg: "var(--verde)",
  },
  {
    nombre: "Alpargatas",
    descripcion:
      "Calzado de fique del trabajo rural andino; reinventado en versiones minimalistas para la ciudad.",
    bg: "var(--beige)",
    textoOscuro: true,
  },
  {
    nombre: "Tejido en lana virgen",
    descripcion:
      "Lana hilada como lo hicieron los abuelos; transformada en piezas slow-fashion de bajo impacto.",
    bg: "var(--marron)",
    grande: true,
  },
]

function PieceCard({ pieza }: { pieza: Piece }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  // Parallax sutil: la imagen se desplaza de -20px a 20px dentro del marco.
  const y = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-20, 20])

  return (
    <motion.article
      variants={slideUpItem}
      className={`group flex flex-col ${pieza.grande ? "lg:col-span-2" : "lg:col-span-1"}`}
    >
      <div
        ref={ref}
        className="relative aspect-[3/4] overflow-hidden rounded-xl border border-beige/10"
      >
        {/* Capa con parallax (contiene el placeholder / futura foto) */}
        <motion.div
          style={{ y }}
          className="absolute inset-x-0 -inset-y-[12%]"
        >
          <div
            className="relative flex h-full w-full items-center justify-center transition-transform duration-[400ms] ease-out group-hover:scale-105"
            style={{ backgroundColor: pieza.bg }}
          >
            {/* Textura andina para dar profundidad al placeholder */}
            <div
              aria-hidden
              className="andean-pattern absolute inset-0 opacity-20 mix-blend-soft-light"
            />
            <span
              className={`relative px-4 text-center font-display text-lg tracking-wide ${
                pieza.textoOscuro ? "text-negro/70" : "text-beige/85"
              }`}
            >
              {pieza.nombre}
            </span>
          </div>
        </motion.div>

        {/* Etiquetas tradición / hoy */}
        <div className="absolute left-3 top-3 z-20 flex gap-2">
          <span className="label-mini rounded-full bg-negro/40 px-2.5 py-1 font-sans text-beige backdrop-blur-sm">
            Tradición
          </span>
          <span className="label-mini rounded-full bg-negro/40 px-2.5 py-1 font-sans text-azul backdrop-blur-sm">
            Hoy
          </span>
        </div>

        {/* Degradado negro que sube desde abajo al hacer hover */}
        <div
          aria-hidden
          className="absolute inset-0 z-10 translate-y-6 bg-gradient-to-t from-negro via-negro/60 to-transparent opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100"
        />

        {/* Texto descriptivo que se desliza hacia arriba desde opacity 0 */}
        <div className="absolute inset-x-0 bottom-0 z-20 translate-y-4 p-5 opacity-0 transition-all duration-[400ms] ease-out group-hover:translate-y-0 group-hover:opacity-100">
          <p className="font-serif-poetic text-base italic leading-snug text-beige/90">
            {pieza.descripcion}
          </p>
        </div>
      </div>

      {/* Nombre visible bajo la pieza */}
      <h3 className="mt-4 font-display text-xl text-beige">{pieza.nombre}</h3>
      <p className="mt-1 font-sans text-sm leading-relaxed text-beige/45">
        {pieza.descripcion}
      </p>
    </motion.article>
  )
}

export function Moda() {
  return (
    <section
      id="moda"
      className="relative overflow-hidden border-t border-beige/5 px-5 py-24 md:py-32"
    >
      {/* Ambiente de fondo */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 80% 10%, rgba(139,94,60,0.12) 0%, transparent 50%), radial-gradient(at 10% 90%, rgba(94,139,126,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        {/* Encabezado */}
        <motion.header
          variants={slideUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 max-w-2xl"
        >
          <motion.span
            variants={slideUpItem}
            className="label-mini font-sans text-dorado/80"
          >
            05 · Identidad
          </motion.span>
          <motion.h2
            variants={slideUpItem}
            className="h-section mt-4 font-display text-beige"
          >
            Moda Andina Moderna
          </motion.h2>
          <motion.p
            variants={slideUpItem}
            className="mt-4 font-serif-poetic text-2xl italic text-beige/55"
          >
            La ruana ya no es solo abrigo: es declaración.
          </motion.p>
        </motion.header>

        {/* Galería asimétrica */}
        <motion.div
          variants={slideUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {piezas.map((pieza) => (
            <PieceCard key={pieza.nombre} pieza={pieza} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
