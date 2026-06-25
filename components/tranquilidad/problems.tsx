import Image from "next/image"

const PROBLEMS = [
  {
    title: "Pérdidas de agua",
    desc: "Fugas en cañerías, bachas y conexiones que no pueden esperar.",
    img: "/images/perdida-agua.png",
    alt: "Pérdida de agua en cañería debajo de una bacha siendo reparada",
  },
  {
    title: "Cortocircuitos",
    desc: "Fallas eléctricas y tableros que ponen en riesgo tu hogar.",
    img: "/images/cortocircuito.png",
    alt: "Electricista revisando un tablero eléctrico con un multímetro",
  },
  {
    title: "Persianas trabadas",
    desc: "Mecanismos y cortinas de enrollar que dejaron de funcionar.",
    img: "/images/persiana-trabada.png",
    alt: "Persiana de enrollar trabada siendo reparada en una ventana",
  },
  {
    title: "Arreglos menores",
    desc: "Pequeñas reparaciones y mantenimiento del día a día.",
    img: "/images/arreglos-menores.png",
    alt: "Persona reparando la bisagra de una puerta con herramientas",
  },
]

export function Problems() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Problemas que resolvemos
          </h2>
          <p className="mt-3 text-white/70">
            Desde emergencias hasta arreglos del día a día.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={p.img || "/placeholder.svg"}
                  alt={p.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-white">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-white/70">
                  {p.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
