import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  HardHat,
  Ruler,
  Hammer,
  Lightbulb,
  Thermometer,
  Filter,
  ShieldCheck,
  ArrowRight,
  Phone,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Construcción de Albercas | Química Aquaplus',
  description:
    'Diseño, construcción y reconstrucción de albercas residenciales y comerciales en Guaymas, Sonora. 8 años de experiencia con tecnología de punta.',
};

const features = [
  {
    icon: Ruler,
    title: 'Diseño personalizado',
    description:
      'Creamos el diseño ideal para su espacio y presupuesto, adaptado a sus gustos y necesidades.',
  },
  {
    icon: Hammer,
    title: 'Construcción y reconstrucción',
    description:
      'Construcción desde cero o renovación completa de albercas existentes con los más altos estándares.',
  },
  {
    icon: Thermometer,
    title: 'Sistemas de calentamiento',
    description:
      'Instalación de sistemas modernos de calentamiento para disfrutar su alberca durante todo el año.',
  },
  {
    icon: Filter,
    title: 'Filtrado de última tecnología',
    description:
      'Sistemas de filtración de alto rendimiento que mantienen el agua cristalina con bajo mantenimiento.',
  },
  {
    icon: Lightbulb,
    title: 'Iluminación',
    description:
      'Iluminación LED subacuática y perimetral para transformar su alberca en un espacio espectacular.',
  },
  {
    icon: ShieldCheck,
    title: 'Mantenimiento y germinicidas',
    description:
      'Servicio, reparación y productos germinicidas para mantener la calidad y durabilidad de su alberca por muchos años.',
  },
];

const steps = [
  { number: '01', title: 'Asesoría', description: 'Nuestros expertos le orientan para tomar la mejor decisión según su espacio y presupuesto.' },
  { number: '02', title: 'Diseño', description: 'Creamos el proyecto a su medida con los materiales, tecnología y estilo que usted elija.' },
  { number: '03', title: 'Construcción', description: 'Ejecutamos la obra con un equipo de profesionales y los más altos estándares de calidad.' },
  { number: '04', title: 'Entrega', description: 'Le entregamos su alberca terminada, equipada y lista para que comience a disfrutarla.' },
];

export default function ConstruccionPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[60vh] flex items-end pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0A1F3C]/82 to-[#0284C7]/50" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 mb-6">
              <Star className="w-3.5 h-3.5 text-[#38BDF8] fill-current" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7DD3FC]">
                8 años de experiencia · Guaymas, Sonora
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Construcción de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                Albercas
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
              Bienvenidos a lo mejor en construcción y equipamiento de piscinas lujosas y
              albercas residenciales en Guaymas, Sonora.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/30 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Solicitar asesoría
              </a>
              <a
                href="#proceso"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold tracking-wide rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                Ver proceso
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Construcción de albercas Química Aquaplus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/20 to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#0A1F3C] rounded-2xl p-6 shadow-2xl max-w-[200px]">
                  <div className="text-4xl font-black text-white">8+</div>
                  <div className="text-xs text-[#7DD3FC] uppercase tracking-widest mt-1">
                    Años construyendo
                  </div>
                  <div className="mt-3 h-0.5 bg-[#0EA5E9] w-8" />
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    Experiencia y profesionales a su servicio
                  </p>
                </div>
              </div>

              {/* Copy */}
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
                  Nuestra experiencia
                </span>
                <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-6">
                  Su proyecto hecho{' '}
                  <span className="text-[#0EA5E9]">realidad</span>
                </h2>
                <p className="text-[#5A7282] leading-relaxed mb-5">
                  Contamos con una experiencia de 8 años y un equipo de profesionales que le
                  brindará la mejor asesoría para que convierta en realidad ese proyecto que
                  tiene en mente. Y si no, nosotros le orientamos a tomar la mejor decisión.
                </p>
                <p className="text-[#5A7282] leading-relaxed mb-5">
                  Diseño, construcción y reconstrucción de albercas para que usted y su familia
                  disfrute horas de sana diversión. Reciba de nuestros asesores la mejor opción
                  en la construcción de la alberca que satisfaga sus necesidades.
                </p>
                <p className="text-[#5A7282] leading-relaxed">
                  Contamos con lo más moderno en tecnología para la construcción de albercas y
                  sistemas de calentamiento, filtrado e iluminación, así como mantenimiento,
                  servicio, reparación y germinicidas para que la calidad y durabilidad de su
                  alberca se mantenga muchos años más.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES ──────────────────────────────────────── */}
        <section className="py-20 bg-[#0A1F3C] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
                Nuestros servicios
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Todo lo que su{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                  alberca necesita
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div
                    key={f.title}
                    className="group p-7 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/40 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 border border-[#0EA5E9]/20 flex items-center justify-center mb-5 group-hover:from-[#0EA5E9]/40 transition-all">
                      <Icon className="w-6 h-6 text-[#38BDF8]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">{f.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed">{f.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────────── */}
        <section id="proceso" className="py-20 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-3">
                Cómo trabajamos
              </span>
              <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight">
                Nuestro{' '}
                <span className="text-[#0EA5E9]">proceso</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={step.number} className="relative">
                  {/* Connector line */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-[#D6EAF8]" />
                  )}
                  <div className="bg-white rounded-2xl border border-[#E2EDF7] p-6 text-center relative z-10 shadow-sm">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0EA5E9]/25">
                      <span className="text-2xl font-black text-white">{step.number}</span>
                    </div>
                    <h3 className="text-lg font-black text-[#0A1F3C] mb-2">{step.title}</h3>
                    <p className="text-sm text-[#5A7282] leading-relaxed">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-20 bg-[#0A1F3C] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F3C] via-[#0F2952] to-[#0A1F3C]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#0EA5E9]/10 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 mb-6">
              <HardHat className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7DD3FC]">
                Empiece hoy
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight mb-4">
              ¿Listo para construir{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                su alberca?
              </span>
            </h2>
            <p className="text-white/60 mb-10 leading-relaxed">
              Contáctenos hoy y un asesor le brindará toda la información que necesita para
              iniciar su proyecto con los mejores expertos de Guaymas, Sonora.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/30 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Contactar ahora
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
