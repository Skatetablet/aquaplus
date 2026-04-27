import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Factory, Users, Award, ArrowRight, Phone, FlaskConical } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Maquiladora | Química Aquaplus',
  description:
    'Distribuidores locales de empresa maquiladora en Guaymas, Sonora. Solventes, acetatos, cetonas, monómeros y más productos químicos especializados.',
};

const products = [
  {
    name: 'Acetatos',
    description: 'Solventes éster de uso industrial ampliamente utilizados en pinturas, adhesivos y recubrimientos.',
    color: 'from-[#0EA5E9] to-[#0284C7]',
  },
  {
    name: 'Cetonas',
    description: 'Compuestos orgánicos de alto poder disolvente para resinas, lacas y formulaciones especializadas.',
    color: 'from-[#0369A1] to-[#0EA5E9]',
  },
  {
    name: 'Glicoeéteres',
    description: 'Solventes de alta compatibilidad utilizados en tintas, recubrimientos y sistemas de limpieza.',
    color: 'from-[#075985] to-[#0369A1]',
  },
  {
    name: 'Monómeros',
    description: 'Unidades moleculares base para la producción de polímeros y resinas en procesos industriales.',
    color: 'from-[#0284C7] to-[#38BDF8]',
  },
  {
    name: 'Solventes',
    description: 'Amplia gama de solventes industriales para limpieza, dilución y formulación de productos.',
    color: 'from-[#0A1F3C] to-[#0F4C81]',
  },
  {
    name: 'Dieléctricos',
    description: 'Fluidos aislantes de alta pureza para aplicaciones eléctricas y electrónicas.',
    color: 'from-[#0F4C81] to-[#0369A1]',
  },
  {
    name: 'Oxigenados',
    description: 'Solventes oxigenados de alta eficiencia para pinturas, recubrimientos y productos de limpieza.',
    color: 'from-[#0369A1] to-[#0284C7]',
  },
  {
    name: 'Thiner',
    description: 'Diluyente y limpiador para pinturas de aceite, lacas y esmaltes en aplicaciones industriales.',
    color: 'from-[#0284C7] to-[#0EA5E9]',
  },
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
                "url('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1920')",
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
              Maquiladora
            </h1>
            <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
              Distribuidores de empresa maquiladora con experiencia y profesionales
              a su servicio en Guaymas, Sonora.
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
                  Quiénes somos
                </span>
                <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-6">
                  Empresa local con{' '}
                  <span className="text-[#0EA5E9]">experiencia comprobada</span>
                </h2>
                <p className="text-[#5A7282] leading-relaxed mb-5">
                  Somos una empresa local de Guaymas que distribuye a la empresa maquiladora.
                  Contamos con experiencia y un equipo de profesionales que le brindará el mejor
                  servicio para cubrir todas sus necesidades de productos químicos especializados.
                </p>
                <p className="text-[#5A7282] leading-relaxed mb-8">
                  Nuestra trayectoria nos respalda y nos permite ofrecer productos de calidad con
                  la confianza y el respaldo que su operación requiere.
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E2EDF7]">
                  {[
                    { icon: Award,        value: '20+', label: 'Años de experiencia' },
                    { icon: Users,        value: '100%', label: 'Atención personalizada' },
                    { icon: FlaskConical, value: '8',   label: 'Líneas de productos' },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <div key={s.label} className="text-center">
                        <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] flex items-center justify-center mx-auto mb-2">
                          <Icon className="w-5 h-5 text-[#0EA5E9]" />
                        </div>
                        <div className="text-2xl font-black text-[#0A1F3C]">{s.value}</div>
                        <div className="text-xs text-[#8A9BB0] uppercase tracking-wide mt-0.5 leading-snug">
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Image */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Maquiladora Química Aquaplus"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/25 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-[#0A1F3C] rounded-2xl p-6 shadow-2xl max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Factory className="w-5 h-5 text-[#38BDF8]" />
                    <span className="text-white font-black">Local</span>
                  </div>
                  <div className="text-xs text-[#7DD3FC] uppercase tracking-widest">Guaymas, Son.</div>
                  <div className="mt-3 h-0.5 bg-[#0EA5E9] w-8" />
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    Distribuidores comprometidos con la industria local
                  </p>
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

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {products.map((p) => (
                <div
                  key={p.name}
                  className="group p-6 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/40 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Color accent bar */}
                  <div className={`h-1 w-10 rounded-full bg-gradient-to-r ${p.color} mb-5`} />
                  <h3 className="text-xl font-black text-white mb-3">{p.name}</h3>
                  <p className="text-sm text-white/70 leading-relaxed mb-5">{p.description}</p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#38BDF8] hover:text-white transition-colors group/link"
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
