import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Factory, Users, Award, ArrowRight, Phone, FlaskConical, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maquiladora e Industria | Química Aquaplus',
  description:
    'Distribuidores de productos químicos industriales en Guaymas, Sonora. Acetona, hipoclorito, thinner, sosa, sal, ácidos y soluciones especializadas para diversos sectores.',
};

const products = [
  {
    name: 'Acetona',
    description: 'Solvente orgánico de alta pureza, ampliamente utilizado como agente de limpieza, desengrasante y diluyente en procesos industriales.',
    color: 'from-[#0EA5E9] to-[#0284C7]',
  },
  {
    name: 'Hipoclorito',
    description: 'Agente desinfectante y oxidante altamente efectivo, ideal para el tratamiento de agua, sanitización de superficies e higiene industrial.',
    color: 'from-[#0369A1] to-[#0EA5E9]',
  },
  {
    name: 'Thinner',
    description: 'Diluyente formulado de alta calidad para pinturas, lacas, esmaltes y limpieza de equipos de aplicación.',
    color: 'from-[#075985] to-[#0369A1]',
  },
  {
    name: 'Metil Etil Cetona (MEK)',
    description: 'Solvente industrial de rápida evaporación y excelente poder de disolución para resinas, lacas y adhesivos.',
    color: 'from-[#0284C7] to-[#38BDF8]',
  },
  {
    name: 'Sosa',
    description: 'Hidróxido de sodio de grado industrial en presentación líquida o escamas, utilizado para limpieza profunda, neutralización y procesos químicos.',
    color: 'from-[#0A1F3C] to-[#0F4C81]',
  },
  {
    name: 'Sal',
    description: 'Cloruro de sodio de alta pureza para la regeneración de resinas de intercambio iónico y sistemas de ablandamiento de agua.',
    color: 'from-[#0F4C81] to-[#0369A1]',
  },
  {
    name: 'Bicarbonato',
    description: 'Bicarbonato de sodio industrial para el ajuste seguro del pH, tratamiento de aguas y aplicaciones de limpieza especializada.',
    color: 'from-[#0369A1] to-[#0284C7]',
  },
  {
    name: 'Carbonato',
    description: 'Carbonato de sodio utilizado como agente alcalinizante en el tratamiento de aguas y formulación de detergentes.',
    color: 'from-[#0284C7] to-[#0EA5E9]',
  },
  {
    name: 'Sulfato de Aluminio',
    description: 'Coagulante químico altamente efectivo para la clarificación y eliminación de sólidos suspendidos en el tratamiento de agua.',
    color: 'from-[#0EA5E9] to-[#0284C7]',
  },
  {
    name: 'Arena',
    description: 'Arena sílica de granulometría controlada y alta pureza, optimizada para filtros de agua y sistemas de purificación.',
    color: 'from-[#0369A1] to-[#0EA5E9]',
  },
  {
    name: 'Alcohol Isopropílico',
    description: 'Solvente de rápida evaporación de grado industrial para limpieza de componentes de precisión, desinfección y formulaciones.',
    color: 'from-[#075985] to-[#0369A1]',
  },
  {
    name: 'Formol',
    description: 'Formaldehído en solución acuosa estabilizada para la conservación, desinfección y síntesis de resinas.',
    color: 'from-[#0284C7] to-[#38BDF8]',
  },
  {
    name: 'Ácido Muriático',
    description: 'Ácido clorhídrico de concentración industrial para la limpieza de superficies, desincrustación de sarro y regulación de pH.',
    color: 'from-[#0A1F3C] to-[#0F4C81]',
  },
  {
    name: 'Ácido Sulfúrico',
    description: 'Ácido mineral fuerte indispensable para la formulación química, neutralización de efluentes y aplicaciones industriales complejas.',
    color: 'from-[#0F4C81] to-[#0369A1]',
  },
  {
    name: 'Regeneración de Botellas de Resina Mixta',
    description: 'Servicio técnico especializado y soluciones químicas para la reactivación y mantenimiento de resinas desmineralizadoras.',
    color: 'from-[#0369A1] to-[#0284C7]',
  },
];

const sectors = [
  'Sector agropecuario',
  'Sector alimenticio',
  'Sector analítico y de laboratorio',
  'Sector hospitalario',
  'Sector industrial',
  'Sector pesquero',
  'Sector turístico',
];

export default function MaquiladoraPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ──────────────────────────────────────────── */}
        <section className="relative min-h-[50vh] flex items-end pb-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('/media/maquiladora-entrega.jpeg')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/96 via-[#0A1F3C]/85 to-[#0F4C81]/60" />
          <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 mb-6">
              <Factory className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7DD3FC]">
                Distribuidores locales · Guaymas, Sonora
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Maquiladora e Industria
            </h1>
            <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
              Distribución local confiable de insumos químicos para la industria maquiladora y diversos sectores en Guaymas y San Carlos.
            </p>
            <div className="flex flex-wrap gap-4 mt-10">
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-7 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/30 hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                Solicitar cotización
              </a>
              <a
                href="#productos"
                className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold tracking-wide rounded-xl transition-all duration-200 backdrop-blur-sm"
              >
                Ver productos
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Copy */}
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
                  Soluciones Químicas
                </span>
                <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-6">
                  Suministro eficiente para{' '}
                  <span className="text-[#0EA5E9]">diversos sectores</span>
                </h2>
                
                <div className="space-y-5 text-[#5A7282] leading-relaxed mb-8">
                  <p>
                    Ofrecemos una amplia gama de productos químicos industriales diseñados para atender las necesidades de diversos sectores.
                  </p>
                  <p>
                    Somos proveedores de soluciones químicas que cumplen con altos estándares de calidad, seguridad e higiene, contribuyendo a la eficiencia operativa y al cumplimiento de normativas en cada proceso.
                  </p>
                  <p>
                    Brindamos asesoría técnica especializada para la correcta selección y aplicación de productos, adaptándonos a los requerimientos específicos de cada industria.
                  </p>
                </div>

                {/* Sectores que atendemos */}
                <div className="mb-8 pt-6 border-t border-[#E2EDF7]">
                  <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-[#0A1F3C] mb-4">
                    Sectores que atendemos
                  </h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {sectors.map((sector) => (
                      <div key={sector} className="flex items-center gap-2.5">
                        <CheckCircle className="w-4.5 h-4.5 text-[#0EA5E9] shrink-0" />
                        <span className="text-sm font-medium text-[#5A7282]">{sector}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image & Stats */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] mb-8">
                  <img
                    src="/media/maquiladora-tambos.jpeg"
                    alt="Maquiladora Química Aquaplus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/25 to-transparent" />
                </div>
                
                {/* Mini stats card beneath image */}
                <div className="grid grid-cols-3 gap-4 p-6 bg-[#F8FBFF] rounded-2xl border border-[#E2EDF7] shadow-sm">
                  {[
                    { icon: Award,        value: '20+', label: 'Años de experiencia' },
                    { icon: Users,        value: '100%', label: 'Atención personalizada' },
                    { icon: FlaskConical, value: '15',   label: 'Productos catálogo' },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="text-center">
                        <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-5 h-5 text-[#0EA5E9]" />
                        </div>
                        <div className="text-xl font-black text-[#0A1F3C]">{s.value}</div>
                        <div className="text-[10px] text-[#8A9BB0] uppercase tracking-wide mt-0.5 leading-snug font-bold">
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── PRODUCTS ──────────────────────────────────────── */}
        <section id="productos" className="py-20 bg-[#0A1F3C] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
                Catálogo
              </span>
              <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
                Principales{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                  productos distribuidos
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="group p-6 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/40 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    {/* Color accent bar */}
                    <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${p.color} mb-5`} />
                    <h3 className="text-xl font-black text-white mb-3 group-hover:text-[#38BDF8] transition-colors duration-200">
                      {p.name}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed mb-5">{p.description}</p>
                  </div>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#38BDF8] hover:text-white transition-colors group/link mt-2"
                  >
                    Cotizar
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────────────── */}
        <section className="py-20 bg-[#F0F8FF]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-4">
              ¿Necesita alguno de{' '}
              <span className="text-[#0EA5E9]">nuestros productos?</span>
            </h2>
            <p className="text-[#5A7282] mb-8 leading-relaxed">
              Contáctenos hoy y un asesor le brindará toda la información y cotización que
              necesita. Estamos en Guaymas y San Carlos, Sonora.
            </p>
            <a
              href="/#contacto"
              className="inline-flex items-center gap-2 px-9 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25 hover:-translate-y-0.5"
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
