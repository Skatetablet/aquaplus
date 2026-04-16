import {
  Waves,
  Beaker,
  Lightbulb,
  PaintBucket,
  Package,
  SprayCan,
  Gauge,
  Zap,
  Filter,
  Thermometer,
  Factory,
  ArrowUpRight,
} from 'lucide-react';

const piscinas = [
  { icon: Waves,       title: 'Tinas de hidromasaje' },
  { icon: Beaker,      title: 'Productos químicos' },
  { icon: Lightbulb,   title: 'Iluminación' },
  { icon: PaintBucket, title: 'Recubrimientos' },
  { icon: Package,     title: 'Accesorios y refacciones' },
  { icon: SprayCan,    title: 'Accesorios de limpieza y sistemas de control' },
];

const equipos = [
  { icon: Gauge,       title: 'Hidroneumáticos' },
  { icon: Zap,         title: 'Bombas para piscinas' },
  { icon: Filter,      title: 'Filtros para piscinas' },
  { icon: Thermometer, title: 'Sistemas de calentamiento' },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-3">
            Nuestro Catálogo
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight">
            Nuestros{' '}
            <span className="text-[#0EA5E9]">Productos</span>
          </h2>
        </div>

        {/* ── PISCINAS ─────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shrink-0">
              <Waves className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-[#0A1F3C]">Piscinas</h3>
            <div className="flex-1 h-px bg-[#D6EAF8]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {piscinas.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-center text-center gap-3 p-5 bg-white rounded-2xl border border-[#E2EDF7] hover:border-[#0EA5E9]/40 hover:shadow-lg hover:shadow-[#0EA5E9]/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] group-hover:bg-gradient-to-br group-hover:from-[#0EA5E9] group-hover:to-[#0284C7] flex items-center justify-center transition-all duration-300 shrink-0">
                    <Icon className="w-6 h-6 text-[#0EA5E9] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-[#0A1F3C] leading-snug">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── EQUIPOS ──────────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0369A1] to-[#075985] flex items-center justify-center shrink-0">
              <Gauge className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-[#0A1F3C]">Equipos</h3>
            <div className="flex-1 h-px bg-[#D6EAF8]" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {equipos.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group flex flex-col items-center text-center gap-3 p-5 bg-white rounded-2xl border border-[#E2EDF7] hover:border-[#0369A1]/40 hover:shadow-lg hover:shadow-[#0369A1]/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] group-hover:bg-gradient-to-br group-hover:from-[#0369A1] group-hover:to-[#075985] flex items-center justify-center transition-all duration-300 shrink-0">
                    <Icon className="w-6 h-6 text-[#0369A1] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                  </div>
                  <span className="text-sm font-bold text-[#0A1F3C] leading-snug">{item.title}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* ── INDUSTRIAL ───────────────────────────── */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A1F3C] to-[#0F2952] flex items-center justify-center shrink-0">
              <Factory className="w-4 h-4 text-white" strokeWidth={2} />
            </div>
            <h3 className="text-2xl font-black text-[#0A1F3C]">Industrial</h3>
            <div className="flex-1 h-px bg-[#D6EAF8]" />
          </div>

          <div className="rounded-2xl border border-[#E2EDF7] bg-white p-6 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] flex items-center justify-center shrink-0">
              <Factory className="w-6 h-6 text-[#0A1F3C]" strokeWidth={1.5} />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0A1F3C] mb-1">Productos químicos industriales y reactivos analíticos</p>
              <p className="text-sm text-[#5A7282] leading-relaxed">
                Contáctanos para conocer nuestro catálogo completo de productos industriales.
              </p>
            </div>
            <a
              href="#contacto"
              className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#0EA5E9] hover:text-[#0284C7] transition-colors shrink-0 group/link"
            >
              Cotizar
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1F3C] hover:bg-[#0F2952] text-white font-bold tracking-wide rounded-xl transition-colors duration-200"
          >
            Solicitar Cotización
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
