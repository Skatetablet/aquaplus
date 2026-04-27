import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Award, Users, TrendingUp, Target, Eye, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quiénes Somos | Química Aquaplus',
  description:
    '20 años de calidad, profesionalismo, responsabilidad y compromiso. Conoce la historia, misión, visión y objetivos de Química Aquaplus en Guaymas, Sonora.',
};

const pillars = [
  {
    icon: Heart,
    title: 'Misión',
    color: 'from-[#0EA5E9] to-[#0284C7]',
    text: 'Somos un equipo de trabajo que enmarca nuestros valores y objetivos, comprometidos siempre con nuestros clientes en brindarles excelente calidad con nuestras marcas líderes y confiables en las diferentes áreas de competencia, manteniendo una constante capacitación para ofrecer alta calidad en nuestros productos y servicios.',
  },
  {
    icon: Eye,
    title: 'Visión',
    color: 'from-[#0369A1] to-[#0EA5E9]',
    text: 'Proyectar nuestra imagen como empresa líder por la venta de nuestros productos y servicios. Posicionarnos en el mercado de la industria por manejar marcas líderes, manteniéndonos siempre a la vanguardia con un nivel competitivo alto.',
  },
  {
    icon: Target,
    title: 'Objetivos',
    color: 'from-[#075985] to-[#0369A1]',
    text: 'Uno de nuestros principales objetivos en el área de piscinas es mantener en nuestros clientes y amigos una sonrisa de satisfacción y la seguridad de que ellos y sus seres queridos nadan en un agua tratada con nuestros productos.',
  },
];

const stats = [
  { icon: Award,     value: '20+',    label: 'Años de experiencia' },
  { icon: Users,     value: '1,000+', label: 'Clientes satisfechos' },
  { icon: TrendingUp, value: '500+',  label: 'Productos en catálogo' },
];

export default function QuienesSomosPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[55vh] flex items-end pb-20 overflow-hidden">
          {/* Background */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0A1F3C]/80 to-[#0284C7]/50" />
          <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-4">
              Química Aquaplus
            </span>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Quiénes{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                Somos
              </span>
            </h1>
            <p className="text-xl text-[#38BDF8] font-semibold max-w-2xl">
              20 años de Calidad, Profesionalismo, Responsabilidad y Compromiso
            </p>
          </div>
        </section>

        {/* ── STORY ────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Image + badge */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Química Aquaplus — instalaciones"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/20 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0A1F3C] rounded-2xl p-6 shadow-2xl max-w-[220px]">
                  <div className="text-4xl font-black text-white">2003</div>
                  <div className="text-xs text-[#7DD3FC] uppercase tracking-widest mt-1">Fundada en</div>
                  <div className="mt-3 h-0.5 bg-[#0EA5E9] w-8" />
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    20 años de calidad, profesionalismo y compromiso
                  </p>
                </div>
              </div>

              {/* Copy */}
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
                  Nuestra Historia
                </span>
                <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-6">
                  Empresa mexicana con<br />
                  <span className="text-[#0EA5E9]">raíces en Guaymas</span>
                </h2>
                <p className="text-[#5A7282] leading-relaxed mb-5">
                  Química Aquaplus es una empresa mexicana distribuidora de productos químicos
                  industriales y reactivos analíticos otorgadora de servicios, establecida en la
                  ciudad y puerto de Guaymas, Sonora desde el año 2003. Nos hemos especializado
                  en el diseño y construcción de albercas de todo tipo, en el servicio y
                  mantenimiento; para ofrecerles a las familias locales y foráneas una alternativa
                  en salud y diversión.
                </p>
                <p className="text-[#5A7282] leading-relaxed">
                  A lo largo de nuestra trayectoria nos hemos desarrollado como empresa con un gran
                  crecimiento en nuestra plantilla de clientes, por la sólida estructura en la
                  calidad de nuestros servicios que nos ha permitido crecer y ganar la confianza de
                  más empresas y familias por saber aplicar nuestros valores en beneficio de la
                  sociedad.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ────────────────────────────────────────── */}
        <section className="py-16 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s) => {
                const Icon = s.icon;
                return (
                  <div
                    key={s.label}
                    className="flex flex-col items-center text-center p-8 bg-white rounded-2xl border border-[#E2EDF7] shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-[#0EA5E9]" />
                    </div>
                    <div className="text-4xl font-black text-[#0A1F3C] mb-1">{s.value}</div>
                    <div className="text-sm text-[#8A9BB0] uppercase tracking-wide">{s.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── MISIÓN / VISIÓN / OBJETIVOS ──────────────────── */}
        <section className="py-20 bg-[#0A1F3C] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
                Nuestros Valores
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Lo que nos{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                  define
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.title}
                    className="group p-8 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/40 bg-white/5 hover:bg-white/8 transition-all duration-300"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${p.color} flex items-center justify-center mb-5 shadow-lg`}
                    >
                      <Icon className="w-6 h-6 text-white" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-xl font-black text-white mb-3">{p.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed">{p.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────── */}
        <section className="py-20 bg-[#F0F8FF]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-black text-[#0A1F3C] mb-4">
              ¿Listo para trabajar con nosotros?
            </h2>
            <p className="text-[#5A7282] mb-8 leading-relaxed">
              Contáctanos para cotizaciones, asesoría técnica o cualquier consulta.
              Estamos en Guaymas y San Carlos, Sonora.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/30 hover:-translate-y-0.5"
            >
              Contáctanos
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
