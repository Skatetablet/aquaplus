import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { FlaskConical, Beaker, ArrowRight, Phone, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Industria | Química Aquaplus',
  description:
    'Productos industriales marca SPIN para los mercados Alimentario, Agropecuario y Lavandería. Detergentes ácidos y alcalinos. Guaymas, Sonora.',
};

const acidDetergents = [
  {
    name: 'AMIDET LC-70',
    description:
      'Detergente líquido ácido concentrado biodegradable, no corrosivo, limpia y desincrusta tuberías y equipo de acero inoxidable por sistemas CIP.',
  },
  {
    name: 'AMIDET LC-34',
    description:
      'Detergente líquido ácido Preventivo biodegradable no corrosivo, limpia tuberías y equipo de acero inoxidable por sistemas CIP.',
  },
];

const alkalineDetergents = [
  {
    name: 'DEMILAK LC-48',
    description: 'Detergente líquido concentrado alcalino, remueve grasa y suciedad.',
  },
  {
    name: 'DEMILAK LC-38',
    description: 'Detergente alcalino preventivo, remueve grasa y suciedad.',
  },
  {
    name: 'DEMILAK SM',
    description: 'Detergente alcalino en polvo para lavar manualmente.',
  },
];

const markets = [
  'Industria alimentaria',
  'Industria láctea y derivados',
  'Panificadoras',
  'Embotelladoras',
  'Sector agropecuario',
  'Lavanderías industriales',
];

export default function IndustriaPage() {
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
                "url('https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/96 via-[#0A1F3C]/84 to-[#0F4C81]/60" />
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0EA5E9]/15 border border-[#0EA5E9]/30 mb-6">
              <FlaskConical className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#7DD3FC]">
                Línea Industrial · Marca SPIN
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] mb-4 tracking-tight">
              Soluciones{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                Industriales
              </span>
            </h1>
            <p className="text-white/65 text-xl max-w-2xl leading-relaxed">
              Productos SPIN para los mercados Alimentario, Agropecuario y de Lavandería.
            </p>
          </div>
        </section>

        {/* ── INTRO ─────────────────────────────────────────── */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* Copy */}
              <div>
                <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
                  Línea industrial
                </span>
                <h2 className="text-4xl font-black text-[#0A1F3C] leading-tight mb-6">
                  Marca{' '}
                  <span className="text-[#0EA5E9]">SPIN</span>
                  {' '}— calidad reconocida
                </h2>
                <p className="text-[#5A7282] leading-relaxed mb-8">
                  Dentro de la línea Industrial, contamos con productos de la reconocida marca
                  <strong className="text-[#0A1F3C]"> SPIN</strong>, para atender las necesidades
                  de los mercados Alimentarios, Agropecuarios y de Lavandería. Soluciones
                  profesionales formuladas para los más altos estándares de higiene industrial.
                </p>

                <div className="mb-6">
                  <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0A1F3C] mb-3">
                    Mercados que atendemos
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {markets.map((m) => (
                      <div key={m} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                        <span className="text-sm text-[#5A7282]">{m}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="/#contacto"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  Solicitar cotización
                </a>
              </div>

              {/* Decorative card */}
              <div className="relative">
                <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                  <img
                    src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Productos industriales SPIN"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/30 to-transparent" />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-[#0A1F3C] rounded-2xl p-6 shadow-2xl max-w-[200px]">
                  <div className="text-3xl font-black text-white">SPIN</div>
                  <div className="text-xs text-[#7DD3FC] uppercase tracking-widest mt-1">
                    Marca líder
                  </div>
                  <div className="mt-3 h-0.5 bg-[#0EA5E9] w-8" />
                  <p className="text-xs text-white/60 mt-2 leading-relaxed">
                    Calidad certificada para la industria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DETERGENTES ÁCIDOS ────────────────────────────── */}
        <section className="py-20 bg-[#0A1F3C] relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-2xl" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg shrink-0">
                <Beaker className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8]">
                  Familia de productos
                </p>
                <h2 className="text-3xl font-black text-white">Detergentes Ácidos</h2>
              </div>
              <div className="flex-1 h-px bg-white/10 hidden sm:block" />
            </div>

            <p className="text-white/60 text-sm mb-8 max-w-2xl">
              Para la industria láctea y derivados, panificadoras, embotelladoras, etc.
              Biodegradables y no corrosivos, compatibles con sistemas CIP.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {acidDetergents.map((p) => (
                <div
                  key={p.name}
                  className="group p-7 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/50 bg-white/5 hover:bg-white/8 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#38BDF8]" />
                    <h3 className="text-xl font-black text-white tracking-wide">{p.name}</h3>
                  </div>
                  <p className="text-sm text-white/75 leading-relaxed">{p.description}</p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold tracking-wider uppercase text-[#38BDF8] hover:text-white transition-colors group/link"
                  >
                    Solicitar información
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── DETERGENTES ALCALINOS ─────────────────────────── */}
        <section className="py-20 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            {/* Category header */}
            <div className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0369A1] to-[#075985] flex items-center justify-center shadow-lg shrink-0">
                <FlaskConical className="w-6 h-6 text-white" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9]">
                  Familia de productos
                </p>
                <h2 className="text-3xl font-black text-[#0A1F3C]">Detergentes Alcalinos</h2>
              </div>
              <div className="flex-1 h-px bg-[#D6EAF8] hidden sm:block" />
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {alkalineDetergents.map((p) => (
                <div
                  key={p.name}
                  className="group bg-white rounded-2xl border border-[#E2EDF7] hover:border-[#0EA5E9]/40 hover:shadow-xl hover:shadow-[#0EA5E9]/8 p-7 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                    <h3 className="text-xl font-black text-[#0A1F3C] tracking-wide">{p.name}</h3>
                  </div>
                  <p className="text-sm text-[#5A7282] leading-relaxed">{p.description}</p>
                  <a
                    href="/#contacto"
                    className="inline-flex items-center gap-1.5 mt-5 text-xs font-bold tracking-wider uppercase text-[#0EA5E9] hover:text-[#0284C7] transition-colors group/link"
                  >
                    Solicitar información
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── RESINAS ───────────────────────────────────────── */}
        <section className="py-16 bg-white border-t border-[#E2EDF7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="bg-gradient-to-br from-[#0A1F3C] to-[#0F2952] rounded-2xl p-10 flex flex-col md:flex-row items-center gap-8">
              <div className="w-14 h-14 rounded-2xl bg-[#0EA5E9]/20 border border-[#0EA5E9]/30 flex items-center justify-center shrink-0">
                <FlaskConical className="w-7 h-7 text-[#38BDF8]" strokeWidth={1.5} />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-black text-white mb-2">
                  Regeneración de botellas de resina mixta
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Contamos con el servicio y los productos necesarios para la regeneración de
                  botellas de resina mixta. Contáctenos para mayor información y cotización.
                </p>
              </div>
              <a
                href="/#contacto"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25 hover:-translate-y-0.5 shrink-0"
              >
                Cotizar
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
