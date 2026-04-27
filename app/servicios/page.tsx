import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import {
  ClipboardList,
  Droplets,
  Waves,
  Settings,
  SlidersHorizontal,
  UserCheck,
  ArrowRight,
  Phone,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Servicios | Química Aquaplus',
  description:
    'Mantenimiento profesional de piscinas, tinas de hidromasaje, sistemas de filtración y osmosis inversa. Asesores expertos en Guaymas y San Carlos, Sonora.',
};

const services = [
  {
    icon: ClipboardList,
    title: 'Asesorías',
    description:
      'Nuestros asesores le orientarán en los procesos y productos aplicables para el mantenimiento de su piscina, garantizándole una vida más larga.',
  },
  {
    icon: Droplets,
    title: 'Mantenimiento del agua',
    description:
      'Mantenimiento preventivo y/o correctivo del agua para asegurar que su piscina esté siempre limpia, balanceada y segura para todos.',
  },
  {
    icon: Waves,
    title: 'Piscinas y tinas de hidromasaje',
    description:
      'Mantenimiento preventivo y/o correctivo de piscinas y tinas de hidromasaje para prolongar su vida útil y mantener su aspecto impecable.',
  },
  {
    icon: Settings,
    title: 'Motobombas y sistemas de filtración',
    description:
      'Mantenimiento preventivo y/o correctivo a motobombas y sistemas de filtración para garantizar un funcionamiento óptimo y eficiente.',
  },
  {
    icon: SlidersHorizontal,
    title: 'Sistema de ósmosis inversa',
    description:
      'Instalación, mantenimiento preventivo y/o correctivo a sistemas de ósmosis inversa para asegurar agua de la más alta pureza.',
  },
  {
    icon: UserCheck,
    title: 'Atención personalizada',
    description:
      'Cada cliente recibe un plan de mantenimiento adaptado a sus necesidades específicas, con seguimiento continuo de nuestros expertos.',
  },
];

export default function ServiciosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────── */}
        <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0A1F3C]/80 to-[#0284C7]/50" />
          <div className="absolute top-1/3 left-1/3 w-96 h-96 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-4">
              Química Aquaplus
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Nuestros{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                Servicios
              </span>
            </h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Mantenimiento profesional de piscinas — los expertos que su alberca necesita.
            </p>
          </div>
        </section>

        {/* ── INTRO ────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
                  Por qué elegirnos
                </span>
                <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-6">
                  Expertos en el{' '}
                  <span className="text-[#0EA5E9]">cuidado de su piscina</span>
                </h2>
                <p className="text-[#5A7282] leading-relaxed mb-5">
                  Para mantener la belleza y calidad de su piscina se requiere del mantenimiento
                  profesional de manera periódica. Permita que los expertos de Química Aquaplus
                  se hagan cargo. Contamos con todos los accesorios, refacciones y suministros
                  que su alberca necesita.
                </p>
                <p className="text-[#5A7282] leading-relaxed mb-8">
                  Contacte hoy a nuestro grupo de asesores quienes le orientarán en los procesos
                  y productos aplicables para el mantenimiento de su piscina, garantizándole una
                  vida más larga.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25 hover:-translate-y-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    Contactar asesores
                  </a>
                  <a
                    href="#galeria-servicios"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E2EDF7] hover:border-[#0EA5E9]/40 text-[#0A1F3C] font-bold tracking-wide rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    Ver galería
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '20+', label: 'Años de experiencia' },
                  { value: '1,000+', label: 'Clientes satisfechos' },
                  { value: '100%', label: 'Agua tratada con calidad' },
                  { value: '2', label: 'Sucursales en Sonora' },
                ].map((s) => (
                  <div
                    key={s.label}
                    className="bg-[#F0F8FF] rounded-2xl border border-[#E2EDF7] p-6 text-center"
                  >
                    <div className="text-4xl font-black text-[#0A1F3C] mb-1">{s.value}</div>
                    <div className="text-xs text-[#8A9BB0] uppercase tracking-wide leading-snug">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICE CARDS ─────────────────────────────── */}
        <section className="py-20 bg-[#0A1F3C] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
                Lo que ofrecemos
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Amplia variedad de{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                  servicios
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.title}
                    className="group p-7 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/40 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 border border-[#0EA5E9]/20 flex items-center justify-center mb-5 group-hover:from-[#0EA5E9]/40 transition-all">
                      <Icon className="w-6 h-6 text-[#38BDF8]" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-lg font-black text-white mb-3">{s.title}</h3>
                    <p className="text-sm text-white/75 leading-relaxed">{s.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── GALLERY CTA ───────────────────────────────── */}
        <section id="galeria-servicios" className="py-20 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-3">
                Galería
              </span>
              <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-4">
                Observa nuestra{' '}
                <span className="text-[#0EA5E9]">galería de servicios</span>
              </h2>
              <p className="text-[#5A7282] max-w-lg mx-auto">
                Conoce de cerca los resultados que logramos para nuestros clientes en Guaymas y
                San Carlos, Sonora.
              </p>
            </div>

            {/* Video previews */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-10">
              <div className="lg:col-span-3 rounded-2xl overflow-hidden border border-[#E2EDF7] shadow-lg aspect-video bg-[#0A1F3C] relative group">
                <video
                  src="/Cliente nuevo, cambios desde el primer día con nosotros.mp4"
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-black text-lg">Cliente nuevo</p>
                  <p className="text-white/70 text-sm">Cambios desde el primer día con nosotros</p>
                </div>
              </div>

              <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-[#E2EDF7] shadow-lg aspect-video bg-[#0A1F3C] relative group">
                <video
                  src="/HAZ TU PEDIDO.mp4"
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F3C]/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white font-black text-lg">Haz tu pedido</p>
                  <p className="text-white/70 text-sm">Fácil, rápido y seguro</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1F3C] hover:bg-[#0F2952] text-white font-bold tracking-wide rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                Solicitar servicio
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
