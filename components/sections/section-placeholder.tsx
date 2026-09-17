// Marcador temporal para secciones aún por construir.
// Cada sección se implementará por separado más adelante.

export function SectionPlaceholder({
  id,
  index,
  title,
  intro,
}: {
  id: string
  index: number
  title: string
  intro: string
}) {
  return (
    <section
      id={id}
      className="relative flex min-h-[60vh] flex-col items-center justify-center border-t border-beige/5 px-5 py-24 text-center"
    >
      <span className="label-mini font-sans text-dorado/70">
        {String(index).padStart(2, "0")} · Próximamente
      </span>
      <h2 className="h-section mt-4 font-display text-beige/85">{title}</h2>
      <p className="mt-4 max-w-xl font-serif-poetic text-lg italic text-beige/45">
        {intro}
      </p>
    </section>
  )
}
