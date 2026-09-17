import { Hero } from "@/components/sections/hero"
import { Contadores } from "@/components/sections/contadores"
import { Regiones } from "@/components/sections/regiones"
import { Curiosidades } from "@/components/sections/curiosidades"
import { Moda } from "@/components/sections/moda"
import { Sonidos } from "@/components/sections/sonidos"
import { Instrumentos } from "@/components/sections/instrumentos"
import { Quiz } from "@/components/sections/quiz"
import { JuegoMuiscas } from "@/components/sections/juego-muiscas"
import { AntesAhora } from "@/components/sections/antes-ahora"
import { Gastronomia } from "@/components/sections/gastronomia"
import { Galeria } from "@/components/sections/galeria"
import { Vocabulario } from "@/components/sections/vocabulario"
import { Historias } from "@/components/sections/historias"

export default function Page() {
  return (
    <main>
      <Hero />
      <Contadores />
      <Regiones />
      <Curiosidades />
      <Moda />
      <Sonidos />
      <Instrumentos />
      <Quiz />
      <JuegoMuiscas />
      <AntesAhora />
      <Gastronomia />
      <Galeria />
      <Vocabulario />
      <Historias />
    </main>
  )
}
