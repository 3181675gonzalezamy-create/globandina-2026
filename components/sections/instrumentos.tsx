"use client"

import type { CSSProperties } from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import { Pause, Play } from "lucide-react"
import { slideUpContainer, slideUpItem, viewportOnce } from "@/lib/animations"

/* ==========================================================================
   Ilustraciones de línea dorada (SVG). Trazo = currentColor (text-dorado).
   ========================================================================== */

const svgBase = {
  viewBox: "0 0 100 100",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
}

function TipleSvg() {
  return (
    <svg {...svgBase} aria-hidden className="h-full w-full">
      {/* clavijero */}
      <path d="M44 8h12a2 2 0 0 1 2 2v9H42v-9a2 2 0 0 1 2-2z" />
      <circle cx="41" cy="11" r="1.4" />
      <circle cx="41" cy="16" r="1.4" />
      <circle cx="59" cy="11" r="1.4" />
      <circle cx="59" cy="16" r="1.4" />
      {/* mástil */}
      <path d="M46 19h8v30h-8z" />
      {/* caja figura de 8 */}
      <path d="M50 49c-19 0-25 15-17 27 8 13 26 13 34 0 8-12 2-27-17-27z" />
      {/* boca */}
      <circle cx="50" cy="69" r="7" />
      {/* cuerdas */}
      <path d="M48 22v54M52 22v54" opacity="0.5" />
    </svg>
  )
}

function BandolaSvg() {
  return (
    <svg {...svgBase} aria-hidden className="h-full w-full">
      {/* clavijero */}
      <path d="M45 8h10v10H45z" />
      <circle cx="42" cy="11" r="1.3" />
      <circle cx="42" cy="15" r="1.3" />
      <circle cx="58" cy="11" r="1.3" />
      <circle cx="58" cy="15" r="1.3" />
      {/* mástil corto */}
      <path d="M46 18h8v22h-8z" />
      {/* caja en forma de pera / gota */}
      <path d="M50 40c-16 2-22 18-14 32 7 12 21 12 28 0 8-14 2-30-14-32z" />
      {/* boca */}
      <circle cx="50" cy="66" r="6" />
      {/* cuerdas */}
      <path d="M48 21v50M52 21v50" opacity="0.5" />
    </svg>
  )
}

function QuenaSvg() {
  return (
    <svg {...svgBase} aria-hidden className="h-full w-full">
      {/* tubo vertical */}
      <path d="M45 10h10v78a5 5 0 0 1-10 0z" />
      {/* muesca superior */}
      <path d="M46 10l4 6 4-6" />
      {/* orificios */}
      <circle cx="50" cy="34" r="2.2" />
      <circle cx="50" cy="46" r="2.2" />
      <circle cx="50" cy="58" r="2.2" />
      <circle cx="50" cy="70" r="2.2" />
      <circle cx="50" cy="81" r="2.2" />
    </svg>
  )
}

function CharangoSvg() {
  return (
    <svg {...svgBase} aria-hidden className="h-full w-full">
      {/* clavijero */}
      <path d="M45 8h10v9H45z" />
      <circle cx="42" cy="11" r="1.3" />
      <circle cx="58" cy="11" r="1.3" />
      <circle cx="42" cy="14" r="1.3" />
      <circle cx="58" cy="14" r="1.3" />
      {/* mástil */}
      <path d="M46 17h8v34h-8z" />
      {/* caja pequeña de dorso redondo (charango) */}
      <path d="M50 51c-13 0-18 12-13 22 5 11 21 11 26 0 5-10 0-22-13-22z" />
      {/* boca */}
      <circle cx="50" cy="70" r="5" />
      {/* cuerdas */}
      <path d="M48 20v50M52 20v50" opacity="0.5" />
    </svg>
  )
}

function BomboSvg() {
  return (
    <svg {...svgBase} aria-hidden className="h-full w-full">
      {/* cuerpo del tambor */}
      <path d="M30 36h40v30H30z" />
      {/* aros elípticos */}
      <ellipse cx="50" cy="36" rx="20" ry="6" />
      <ellipse cx="50" cy="66" rx="20" ry="6" />
      {/* tensores en zig-zag */}
      <path d="M32 40l36 22M68 40L32 62" opacity="0.55" />
      {/* baqueta */}
      <path d="M60 22l14 12" />
      <circle cx="59" cy="21" r="3.2" />
    </svg>
  )
}

function CapadorSvg() {
  return (
    <svg {...svgBase} aria-hidden className="h-full w-full">
      {/* tubos descendentes */}
      <path d="M32 24v54M40 24v46M48 24v38M56 24v30M64 24v22" />
      {/* ataduras horizontales */}
      <path d="M28 34h40M28 46h40" />
    </svg>
  )
}

/* ==========================================================================
   Datos
   ========================================================================== */

type Instrumento = {
  id: string
  nombre: string
  region: string
  descripcion: string
  audioSrc: string
  Illustration: () => React.JSX.Element
}

const instrumentos: Instrumento[] = [
  {
    id: "tiple",
    nombre: "Tiple",
    region: "Cordillera Oriental",
    descripcion:
      "Instrumento nacional de Colombia, de doce cuerdas en cuatro órdenes. Su timbre brillante acompaña el bambuco y el pasillo.",
    audioSrc: "/audio/tiple.mp3",
    Illustration: TipleSvg,
  },
  {
    id: "bandola",
    nombre: "Bandola andina",
    region: "Región Andina",
    descripcion:
      "De caja en forma de pera y dieciséis cuerdas, lleva la melodía en el trío andino colombiano con un sonido ágil y punzante.",
    audioSrc: "/audio/bandola.mp3",
    Illustration: BandolaSvg,
  },
  {
    id: "quena",
    nombre: "Quena",
    region: "Altiplano andino",
    descripcion:
      "Flauta vertical de caña con muesca en el extremo. Su voz aguda y aireada evoca los vientos del páramo y la puna.",
    audioSrc: "/audio/quena.mp3",
    Illustration: QuenaSvg,
  },
  {
    id: "charango",
    nombre: "Charango",
    region: "Andes centrales",
    descripcion:
      "Pequeño cordófono de dorso abombado y diez cuerdas. Nació del mestizaje entre la vihuela y la tradición indígena.",
    audioSrc: "/audio/charango.mp3",
    Illustration: CharangoSvg,
  },
  {
    id: "bombo",
    nombre: "Bombo",
    region: "Región Andina",
    descripcion:
      "Tambor de doble parche tensado con aros. Marca el pulso profundo y ceremonial de la música de los Andes.",
    audioSrc: "/audio/bombo.mp3",
    Illustration: BomboSvg,
  },
  {
    id: "capador",
    nombre: "Capador",
    region: "Sur andino",
    descripcion:
      "Flauta de pan de tubos escalonados atados en hilera. Cada caña afina una nota que se sopla al vuelo del aire.",
    audioSrc: "/audio/capador.mp3",
    Illustration: CapadorSvg,
  },
]

/* ==========================================================================
   Ecualizador de 5 barras
   ========================================================================== */

function Equalizer({ active }: { active: boolean }) {
  const reduce = useReducedMotion()
  const patterns = [
    [0.35, 1, 0.5],
    [0.7, 0.3, 0.9],
    [0.45, 0.95, 0.4],
    [0.9, 0.4, 0.75],
    [0.3, 0.8, 0.5],
  ]

  return (
    <div
      aria-hidden
      className="flex h-4 items-end gap-[3px]"
      style={{ opacity: active ? 1 : 0, transition: "opacity 0.3s ease" }}
    >
      {patterns.map((seq, i) => (
        <motion.span
          key={i}
          className="w-[3px] rounded-full bg-dorado"
          style={{ height: "100%", transformOrigin: "bottom" }}
          initial={{ scaleY: 0.3 }}
          animate={
            active && !reduce
              ? { scaleY: [...seq, seq[0]] }
              : { scaleY: 0.3 }
          }
          transition={
            active && !reduce
              ? {
                  duration: 0.9,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: i * 0.08,
                }
              : { duration: 0.2 }
          }
        />
      ))}
    </div>
  )
}

/* ==========================================================================
   Tarjeta
   ========================================================================== */

function InstrumentoCard({
  instrumento,
  active,
  onToggle,
  onEnded,
}: {
  instrumento: Instrumento
  active: boolean
  onToggle: () => void
  onEnded: () => void
}) {
  const audioRef = useRef<HTMLAudioElement>(null)

  // Sincroniza el elemento <audio> con el estado activo del controlador padre.
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (active) {
      audio.currentTime = 0
      // play() puede rechazar si la ruta placeholder aún no existe.
      void audio.play().catch(() => {})
    } else {
      audio.pause()
      audio.currentTime = 0
    }
  }, [active])

  const { Illustration } = instrumento

  return (
    <motion.article
      variants={slideUpItem}
      className="glass relative flex flex-col items-center overflow-hidden p-7 text-center transition-colors duration-500"
      style={
        active
          ? ({
              background:
                "linear-gradient(160deg, rgba(201,162,39,0.22) 0%, rgba(201,162,39,0.06) 45%, rgba(255,255,255,0.03) 100%)",
              borderColor: "rgba(201,162,39,0.45)",
            } as CSSProperties)
          : undefined
      }
    >
      {/* Ilustración */}
      <div className="h-28 w-24 text-dorado">
        <Illustration />
      </div>

      {/* Nombre */}
      <h3 className="mt-4 font-display text-xl text-beige">
        {instrumento.nombre}
      </h3>

      {/* Ecualizador bajo el nombre (visible en reproducción) */}
      <div className="mt-2 flex h-4 items-end justify-center">
        <Equalizer active={active} />
      </div>

      {/* Región */}
      <p className="label-mini mt-1 font-sans text-dorado/70">
        {instrumento.region}
      </p>

      {/* Descripción de dos líneas */}
      <p className="mt-3 min-h-[3.5rem] font-sans text-sm leading-relaxed text-beige/50">
        {instrumento.descripcion}
      </p>

      {/* Botón de reproducción 56px con anillos */}
      <div className="relative mt-6 flex h-14 w-14 items-center justify-center">
        {active && (
          <>
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-full border border-dorado"
                style={{
                  animation: "pulse-ring 1.8s cubic-bezier(0.22,1,0.36,1) infinite",
                  animationDelay: `${i * 0.6}s`,
                }}
              />
            ))}
          </>
        )}
        <button
          type="button"
          onClick={onToggle}
          aria-label={`${active ? "Pausar" : "Reproducir"} ${instrumento.nombre.toLowerCase()}`}
          aria-pressed={active}
          className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-dorado bg-negro/40 text-dorado transition-all duration-300 hover:bg-dorado hover:text-negro focus-visible:bg-dorado focus-visible:text-negro"
        >
          {active ? (
            <Pause className="h-5 w-5" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 h-5 w-5" fill="currentColor" />
          )}
        </button>
      </div>

      <audio
        ref={audioRef}
        src={instrumento.audioSrc}
        preload="none"
        onEnded={onEnded}
      />
    </motion.article>
  )
}

/* ==========================================================================
   Sección
   ========================================================================== */

export function Instrumentos() {
  const [activeId, setActiveId] = useState<string | null>(null)

  return (
    <section
      id="instrumentos"
      className="relative overflow-hidden border-t border-beige/5 px-5 py-24 md:py-32"
    >
      {/* Ambiente de fondo */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(at 20% 15%, rgba(201,162,39,0.12) 0%, transparent 50%), radial-gradient(at 85% 85%, rgba(77,168,218,0.08) 0%, transparent 50%)",
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
            06 · Sonidos
          </motion.span>
          <motion.h2
            variants={slideUpItem}
            className="h-section mt-4 font-display text-beige"
          >
            Instrumentos Andinos
          </motion.h2>
          <motion.p
            variants={slideUpItem}
            className="mt-4 font-serif-poetic text-2xl italic text-beige/55"
          >
            Los instrumentos que dan vida a la música de los Andes.
          </motion.p>
        </motion.header>

        {/* Rejilla de tarjetas */}
        <motion.div
          variants={slideUpContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {instrumentos.map((instrumento) => (
            <InstrumentoCard
              key={instrumento.id}
              instrumento={instrumento}
              active={activeId === instrumento.id}
              onToggle={() =>
                setActiveId((prev) =>
                  prev === instrumento.id ? null : instrumento.id,
                )
              }
              onEnded={() => setActiveId(null)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
