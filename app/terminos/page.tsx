import type { Metadata } from "next"
import { FileText, Info } from "lucide-react"
import { SiteHeader } from "@/components/tranquilidad/site-header"
import { SiteFooter } from "@/components/tranquilidad/site-footer"

export const metadata: Metadata = {
  title: "Términos y Condiciones — Contrato de Adhesión | Tranquilidad 24",
  description:
    "Contrato de adhesión y condiciones del servicio de asistencia para el hogar Tranquilidad 24 en San Luis Capital.",
}

const CLAUSES = [
  {
    n: "Primera",
    title: "Partes",
    text: "El presente contrato se celebra entre TRANQUILIDAD 24 (en adelante 'la Empresa') y el titular del servicio (en adelante 'el Socio').",
  },
  {
    n: "Segunda",
    title: "Objeto",
    text: "La Empresa se compromete a coordinar la asistencia para el hogar del Socio, gestionando el contacto con profesionales idóneos ante emergencias y tareas de mantenimiento en el domicilio adherido.",
  },
  {
    n: "Tercera",
    title: "Vigencia",
    text: "El contrato entra en vigor a partir de la fecha de adhesión y se renueva automáticamente cada mes mientras el Socio mantenga la cuota al día.",
  },
  {
    n: "Cuarta",
    title: "Domicilio adherido",
    text: "El servicio cubre únicamente el domicilio declarado al momento de la adhesión. Cualquier cambio de domicilio deberá notificarse a la Empresa.",
  },
  {
    n: "Quinta",
    title: "Servicios cubiertos",
    text: "TRANQUILIDAD 24 cubre asistencias de plomería, electricidad, gas, herrería y techista, dentro del horario estándar de atención. Los servicios se gestionan mediante profesionales de la red.",
  },
  {
    n: "Sexta",
    title: "Tiempo de respuesta",
    text: "La Empresa coordinará la asistencia en el menor tiempo posible. Los tiempos de respuesta dependerán de la disponibilidad de los profesionales y las condiciones del momento.",
  },
  {
    n: "Séptima",
    title: "Alcance",
    text: "El plan incluye una (1) asistencia mensual por vivienda adherida. Las asistencias no son acumulables ni transferibles.",
  },
  {
    n: "Octava",
    title: "Obras mayores",
    text: "Las remodelaciones, ampliaciones, obras nuevas, trabajos de techos, humedad, pintura integral, parquización, mantenimiento y limpieza de piscinas, construcción o reparación de alambrados, cercos y medianeras, así como cualquier trabajo que exceda una reparación simple, serán presupuestados en forma independiente. Los socios accederán a valores preferenciales.",
  },
  {
    n: "Novena",
    title: "Materiales",
    text: "Los materiales, repuestos e insumos serán siempre a cargo del socio.",
  },
  {
    n: "Décima",
    title: "Coseguro",
    text: "Los servicios solicitados entre las 20:00 y las 07:00 horas estarán sujetos al coseguro vigente.",
  },
  {
    n: "Décima Primera",
    title: "Cuota",
    text: "El socio abonará la cuota vigente establecida por TRANQUILIDAD 24. Al momento de la celebración del presente contrato, la cuota mensual es de $25.000 (pesos veinticinco mil).",
  },
  {
    n: "Décima Segunda",
    title: "Actualización",
    text: "La cuota podrá actualizarse cada ciento ochenta (180) días tomando como referencia la variación acumulada del IPC publicado por el INDEC.",
  },
  {
    n: "Décima Tercera",
    title: "Referidos",
    text: "Los beneficios por referidos serán otorgados conforme al reglamento vigente.",
    list: [
      "1 referido activo y al día: una cuota bonificada a los 120 días.",
      "2 referidos activos y al día: una cuota bonificada a los 150 días.",
      "3 referidos activos y al día: una cuota bonificada a los 180 días.",
      "6 referidos activos y al día: bonificación de 180 días cuando el sexto referido cumpla 180 días.",
      "12 referidos activos y al día: bonificación de un año cuando el referido número doce cumpla 180 días.",
    ],
    footnote:
      "Los beneficios se mantendrán únicamente mientras los referidos permanezcan activos y con cuota al día.",
  },
  {
    n: "Décima Cuarta",
    title: "Mora",
    text: "La falta de pago podrá generar suspensión de beneficios y servicios.",
  },
  {
    n: "Décima Quinta",
    title: "Limitaciones",
    text: "TRANQUILIDAD 24 coordina la asistencia mediante prestadores independientes. Los tiempos de respuesta podrán variar por disponibilidad, clima, feriados o fuerza mayor.",
  },
  {
    n: "Décima Sexta",
    title: "Rescisión",
    text: "Cualquiera de las partes podrá rescindir la adhesión.",
  },
  {
    n: "Décima Séptima",
    title: "Jurisdicción",
    text: "Las partes se someten a los Tribunales Ordinarios de San Luis Capital.",
  },
]

const SOCIO_FIELDS = ["Nombre y Apellido", "DNI", "Domicilio", "Teléfono", "Correo Electrónico"]

export default function TerminosPage() {
  return (
    <main>
      <SiteHeader />

      <section className="bg-background py-16">
        <div className="mx-auto max-w-3xl px-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-orange">
            <FileText className="h-4 w-4" aria-hidden="true" />
            Contrato de adhesión
          </div>
          <h1 className="mt-3 text-3xl font-bold text-black md:text-4xl">
            Términos y Condiciones
          </h1>
          <p className="mt-3 leading-relaxed text-black/70">
            Estas son las condiciones del contrato de adhesión al servicio de TRANQUILIDAD 24
            en San Luis Capital. Te recomendamos leerlas con atención antes de asociarte.
          </p>

          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-brand-maroon-deep p-4 text-sm text-black/80">
            <Info className="mt-0.5 h-4 w-4 flex-none text-brand-orange" aria-hidden="true" />
            <p>
              Leé con atención todas las cláusulas antes de asociarte. Ante cualquier duda,
              escribinos por WhatsApp antes de firmar.
            </p>
          </div>

          <ol className="mt-10 space-y-6">
            {CLAUSES.map((c) => (
              <li
                key={c.n}
                className="rounded-2xl border border-border bg-brand-maroon-deep p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
                  Cláusula {c.n}
                </p>
                <h2 className="mt-1 text-lg font-semibold text-black">{c.title}</h2>
                <p className="mt-2 leading-relaxed text-black/80">{c.text}</p>

                {c.list && (
                  <ul className="mt-3 space-y-1.5 border-l-2 border-brand-orange/40 pl-4">
                    {c.list.map((item) => (
                      <li key={item} className="text-sm leading-relaxed text-black/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {c.footnote && (
                  <p className="mt-3 text-sm leading-relaxed text-black/60">{c.footnote}</p>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-2xl border border-border bg-brand-maroon-deep p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
              Datos del socio
            </p>
            <h2 className="mt-1 text-lg font-semibold text-black">
              Información requerida para asociarte
            </h2>
            <p className="mt-2 leading-relaxed text-black/80">
              Al momento de la adhesión, vas a completar el contrato con los siguientes datos:
            </p>
            <ul className="mt-3 grid gap-1.5 sm:grid-cols-2">
              {SOCIO_FIELDS.map((f) => (
                <li key={f} className="text-sm text-black/80">
                  • {f}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-black/70">
              Con la firma del contrato, el socio declara haber leído y aceptado las
              condiciones del presente contrato de adhesión.
            </p>
          </div>

          <p className="mt-10 text-center text-sm text-black/50">
            ¿Tenés dudas sobre estas condiciones?{" "}
            <a href="/#contacto" className="font-medium text-brand-orange hover:underline">
              Escribinos por WhatsApp
            </a>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
