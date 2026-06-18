'use client';

import { useState } from 'react';
import {
  Waves, Beaker, Lightbulb, PaintBucket, Package, SprayCan,
  Gauge, Zap, Filter, Thermometer, Factory, ArrowUpRight, X,
} from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type ProductItem = {
  icon: React.ElementType;
  title: string;
  id: string;
  tagline: string;
  accentHex: string;
  content: React.ReactNode;
};

// ─── Product Data ─────────────────────────────────────────────────────────────

const piscinasProducts: ProductItem[] = [
  {
    icon: Waves,
    title: 'Tinas de hidromasaje',
    id: 'tinas',
    tagline: 'Suministro e instalación de equipo',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-4">
        <p className="text-[#5A7282] leading-relaxed">
          Contamos también con otros servicios relacionados con el suministro e instalación de equipo para tinas de hidromasaje, desde el proyecto a la realización, así como de reconstrucción y/o remodelación.
        </p>
        <h4 className="text-lg font-bold text-[#0EA5E9] uppercase tracking-wider">Accesorios para tinas forjadas en obra</h4>
      </div>
    ),
  },
  {
    icon: Beaker,
    title: 'Productos químicos',
    id: 'quimicos',
    tagline: 'Desinfección y tratamiento del agua',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-8">
        <div className="space-y-6">
          <div>
            <h4 className="text-base font-bold text-[#0EA5E9] mb-2">CLORIZIDE AL 91</h4>
            <p className="font-semibold text-[#0A1F3C] mb-2">Cloro estabilizado y concentrado al 91% para piscinas</p>
            <p className="text-[#5A7282] leading-relaxed mb-2">Desinfectante de mayor concentración pureza y rendimiento que se puede encontrar en el mercado. Su eficacia y buen funcionamiento ha sido probado por los usuarios y especialistas en piscinas por más de 30 años.</p>
            <p className="text-[#5A7282] leading-relaxed">Como Producto de Spin quien tiene la prioridad de mantener la calidad en sus productos gramo a gramo, con una sola dosis de este producto garantiza la permanencia de este de 1 a 3 ppm hasta por 48 hrs.</p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#0EA5E9] mb-2">TRIZIDE</h4>
            <p className="font-semibold text-[#0A1F3C] mb-2">Producto multifuncional para piscina 4 a 1</p>
            <p className="text-[#5A7282] leading-relaxed mb-2">La experiencia y capacidad de SPIN en productos químicos para piscinas ha logrado</p>
            <p className="text-[#5A7282] leading-relaxed">Un desinfectante clorado al 65%, un poderoso alguicida, un clarificador y un estabilizador de Ph que ayuda a mantenerlo en su nivel adecuado por mucho mas tiempo.</p>
          </div>
          <div>
            <h4 className="text-base font-bold text-[#0EA5E9] mb-2">SHOCK PREVENTIVO</h4>
            <p className="font-semibold text-[#0A1F3C] mb-2">Tratamiento efectivo contra algas y cloramina</p>
            <p className="text-[#5A7282] leading-relaxed mb-2">Químico que previene y evita la formación de algas y cloraminas en las piscinas.</p>
            <p className="text-[#5A7282] leading-relaxed">Es un oxidante no clorado que aumenta el rendimiento del cloro muy considerablemente de rápida disolución y excelentes resultados. Parte de los productos Elite de la familia SPIN.</p>
          </div>
        </div>
        <div className="pt-6 border-t border-[#E2EDF7]">
          <h4 className="text-lg font-black text-[#0A1F3C] mb-3">Especialidades</h4>
          <p className="font-semibold text-[#0EA5E9] mb-3">Productos químicos marca Novem</p>
          <ul className="list-disc list-inside text-[#5A7282] space-y-2">
            <li>Ph +</li>
            <li>Ph –</li>
            <li>Tricloro</li>
            <li>Clarificadores</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Lightbulb,
    title: 'Iluminación',
    id: 'iluminacion',
    tagline: 'Sistemas de iluminación sub-acuática',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-3">
        <h4 className="text-base font-bold text-[#0EA5E9] mb-2">Sistemas de iluminación sub-acuática para piscinas residenciales</h4>
        <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
          <li>Fibra óptica</li>
          <li>Luz incandescente</li>
          <li>Reflectores Spectrum</li>
          <li>Reflectores de LED&apos;s</li>
        </ul>
      </div>
    ),
  },
  {
    icon: PaintBucket,
    title: 'Recubrimientos',
    id: 'recubrimientos',
    tagline: 'Recubrimientos para piscinas',
    accentHex: '#0EA5E9',
    content: (
      <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
        <li>Mosaico veneciano</li>
        <li>Kolorines</li>
        <li>Vidrepur</li>
        <li>Vetro</li>
      </ul>
    ),
  },
  {
    icon: Package,
    title: 'Accesorios y refacciones',
    id: 'accesorios',
    tagline: 'Accesorios y refacciones para piscinas',
    accentHex: '#0EA5E9',
    content: (
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h4 className="text-base font-bold text-[#0EA5E9] mb-4">Accesorios</h4>
          <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
            <li>Escaleras</li>
            <li>Trampolines</li>
            <li>Equipos de competencia</li>
            <li>Sistemas de nado contra corriente</li>
            <li>Analizadores</li>
          </ul>
        </div>
        <div>
          <h4 className="text-base font-bold text-[#0EA5E9] mb-4">Refacciones</h4>
          <p className="font-semibold text-[#0A1F3C] mb-3">Cubiertas y Enrolladores</p>
          <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
            <li>Cubiertas eléctricas</li>
            <li>Cubiertas térmicas de aire encapsulado</li>
            <li>Cubiertas de seguridad</li>
            <li>Enrolladores manuales y automáticos</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: SprayCan,
    title: 'Accesorios de limpieza y sistemas de control',
    id: 'limpieza',
    tagline: 'Las mejores marcas del mercado',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-4">
        <p className="text-[#5A7282] leading-relaxed">En Química Aquaplus contamos con lo necesario y de las mejores marcas para una limpieza profunda y segura.</p>
        <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
          <li>Hayward</li>
          <li>Pentair</li>
          <li>Jacuzzi</li>
        </ul>
      </div>
    ),
  },
];

const equiposProducts: ProductItem[] = [
  {
    icon: Gauge,
    title: 'Hidroneumáticos',
    id: 'hidroneumaticos',
    tagline: 'Equipos hidroneumáticos',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-3">
        <h4 className="text-base font-bold text-[#0EA5E9] mb-2">Equipos hidroneumáticos</h4>
        <p className="text-[#5A7282] leading-relaxed">Asegure la presión y suministro de agua con nuestros sistemas hidroneumáticos, que no sólo le darán agua suficiente sino la presión deseada, en aplicaciones residenciales, comerciales e industriales.</p>
      </div>
    ),
  },
  {
    icon: Zap,
    title: 'Bombas para piscinas',
    id: 'bombas',
    tagline: 'Bombas para piscina',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-3">
        <h4 className="text-base font-bold text-[#0EA5E9] mb-2">Bombas para piscina</h4>
        <p className="text-[#5A7282] leading-relaxed">Para el mejor sistema de bombeo contamos con todo tipo de bombas: centrífugas, tipo Jet, sumergibles (para pozo profundo, charqueras, aguas negras, fuentes, cascadas, etc.) circuladores de agua caliente y más. Distribuimos marcas de prestigio como Myers, Berkeley, Sta-Rite, Evans, Durman, Pedrollo, Altamira, ESPA, Grundfos, Goulds y muchas más.</p>
      </div>
    ),
  },
  {
    icon: Filter,
    title: 'Filtros para piscinas',
    id: 'filtros',
    tagline: 'Filtros para piscina',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-4">
        <h4 className="text-base font-bold text-[#0EA5E9] mb-2">Filtros para piscina</h4>
        <p className="text-[#5A7282] leading-relaxed mb-2">Mantener limpia el agua de su piscina es primordial para su mantenimiento, deje que nuestros filtros para piscina hagan el trabajo.</p>
        <p className="text-[#5A7282] leading-relaxed mb-2">Contamos una extensa variedad de filtros de las marcas líderes de la industria para su piscina se mantenga libre de impurezas orgánicas como mugre, cabellos, aceites corporales entre otros. Recuerde que todos nuestros productos cuentan con garantía.</p>
        <p className="text-[#5A7282] leading-relaxed mb-2">Contamos con una amplia gama de filtros de agua para todo tipo de aplicaciones:</p>
        <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
          <li>Filtros de cartucho</li>
          <li>Filtros de medio filtrante permanente en tanque</li>
          <li>Automáticos y manuales</li>
          <li>Filtros de arena verde</li>
          <li>KDF</li>
          <li>Acondicionadores de agua (suavizadores y desionizadores), entre otros.</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Thermometer,
    title: 'Sistemas de calentamiento',
    id: 'calentamiento',
    tagline: 'Sistemas de calentamiento para piscinas',
    accentHex: '#0EA5E9',
    content: (
      <div className="space-y-3">
        <h4 className="text-base font-bold text-[#0EA5E9] mb-2">Sistemas de calentamiento para piscinas</h4>
        <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
          <li>Calentadores de paso (Gas LP y Natural)</li>
          <li>Bomba de Calor</li>
          <li>Colectores solares</li>
        </ul>
      </div>
    ),
  },
];

// ─── Info Card ────────────────────────────────────────────────────────────────

function InfoCard({ item }: { item: ProductItem }) {
  const Icon = item.icon;
  return (
    <div
      className="w-full mt-4 rounded-2xl overflow-hidden shadow-xl"
      style={{
        animation: 'card-reveal 0.35s cubic-bezier(0.22, 1, 0.36, 1) both',
        border: `1px solid ${item.accentHex}25`,
        background: 'white',
      }}
    >
      {/* Accent top bar */}
      <div
        className="h-1 w-full"
        style={{ background: `linear-gradient(90deg, ${item.accentHex}, ${item.accentHex}55)` }}
      />

      <div className="p-6">
        {/* Card header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: `${item.accentHex}15` }}
          >
            <Icon className="w-5 h-5" style={{ color: item.accentHex }} strokeWidth={1.5} />
          </div>
          <div>
            <p className="font-black text-[#0A1F3C] text-base leading-tight">{item.title}</p>
            <p className="text-xs text-[#94A3B8] mt-0.5">{item.tagline}</p>
          </div>
        </div>

        {/* Content */}
        <div>{item.content}</div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#F1F5F9]">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-white text-sm transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{ background: item.accentHex }}
          >
            Solicitar cotización
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

// ─── Product Tile ─────────────────────────────────────────────────────────────

function ProductTile({
  item,
  isActive,
  onToggle,
}: {
  item: ProductItem;
  isActive: boolean;
  onToggle: () => void;
}) {
  const Icon = item.icon;
  return (
    <button
      onClick={onToggle}
      aria-expanded={isActive}
      className="group flex flex-col items-center text-center gap-3 p-5 bg-white rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 w-full focus:outline-none focus-visible:ring-2"
      style={{
        borderColor: isActive ? `${item.accentHex}50` : '#E2EDF7',
        boxShadow: isActive ? `0 8px 30px ${item.accentHex}20` : undefined,
      }}
    >
      <div
        className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 shrink-0"
        style={{
          background: isActive ? item.accentHex : '#EBF5FF',
        }}
      >
        <Icon
          className="w-6 h-6 transition-colors duration-300"
          style={{ color: isActive ? 'white' : item.accentHex }}
          strokeWidth={1.5}
        />
      </div>
      <span className="text-sm font-bold text-[#0A1F3C] leading-snug">{item.title}</span>
      <div
        className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300"
        style={{ background: isActive ? `${item.accentHex}20` : '#F1F5F9' }}
      >
        <X
          className="transition-all duration-300"
          style={{
            width: 10,
            height: 10,
            color: isActive ? item.accentHex : '#94A3B8',
            transform: isActive ? 'rotate(0deg)' : 'rotate(45deg)',
          }}
        />
      </div>
    </button>
  );
}

// ─── Product Group (tiles + expandable card) ──────────────────────────────────

function ProductGroup({ products }: { products: ProductItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeItem = products.find((p) => p.id === activeId) ?? null;

  const toggle = (id: string) =>
    setActiveId((prev) => (prev === id ? null : id));

  return (
    <div>
      <div
        className={`grid gap-4 ${
          products.length === 6
            ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
            : 'grid-cols-2 md:grid-cols-4'
        }`}
      >
        {products.map((item) => (
          <ProductTile
            key={item.id}
            item={item}
            isActive={activeId === item.id}
            onToggle={() => toggle(item.id)}
          />
        ))}
      </div>

      {/* Full-width expanding card */}
      {activeItem && <InfoCard key={activeItem.id} item={activeItem} />}
    </div>
  );
}

// ─── Main Section ─────────────────────────────────────────────────────────────

export default function ProductsSection() {
  return (
    <>
      {/* Card-reveal keyframe injected inline so it's always available */}
      <style>{`
        @keyframes card-reveal {
          0%   { opacity: 0; transform: scale(0.97) translateY(-8px); }
          100% { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>

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
            <p className="text-sm text-[#5A7282] mt-3">
              Toca cualquier categoría para ver más información.
            </p>
          </div>

          {/* ── PISCINAS ─────────────────────────────────── */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shrink-0">
                <Waves className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-[#0A1F3C]">Piscinas</h3>
              <div className="flex-1 h-px bg-[#D6EAF8]" />
            </div>
            <ProductGroup products={piscinasProducts} />
          </div>

          {/* ── EQUIPOS ──────────────────────────────────── */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0369A1] to-[#075985] flex items-center justify-center shrink-0">
                <Gauge className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-[#0A1F3C]">Equipos</h3>
              <div className="flex-1 h-px bg-[#D6EAF8]" />
            </div>
            <ProductGroup products={equiposProducts} />
          </div>

          {/* ── INDUSTRIAL ───────────────────────────────── */}
          <div className="mb-14">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#0A1F3C] to-[#0F2952] flex items-center justify-center shrink-0">
                <Factory className="w-4 h-4 text-white" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-black text-[#0A1F3C]">Industrial</h3>
              <div className="flex-1 h-px bg-[#D6EAF8]" />
            </div>
            <a
              href="/maquiladora"
              className="rounded-2xl border border-[#E2EDF7] bg-white p-6 flex items-center gap-4 hover:border-[#0EA5E9]/40 hover:shadow-lg hover:shadow-[#0EA5E9]/10 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-12 h-12 rounded-xl bg-[#EBF5FF] flex items-center justify-center shrink-0 group-hover:bg-gradient-to-br group-hover:from-[#0EA5E9] group-hover:to-[#0284C7] transition-all duration-300">
                <Factory className="w-6 h-6 text-[#0A1F3C] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm font-bold text-[#0A1F3C] mb-1">
                  Químicos de grado industrial y grado analítico para diversas industrias
                </p>
                <p className="text-sm text-[#5A7282] leading-relaxed">
                  Escanea el código QR de abajo para conocer nuestro catálogo completo.
                </p>
              </div>
              <div className="ml-auto inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#0EA5E9] shrink-0">
                Ver detalles
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>
          </div>

          {/* CTA & QR */}
          <div className="flex flex-col items-center justify-center gap-12 mt-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative flex flex-col items-center gap-6 p-8 bg-white rounded-3xl border border-[#E2EDF7] shadow-xl max-w-md w-full mx-auto transform transition duration-500 hover:-translate-y-1">
                <div className="text-center space-y-2">
                  <h4 className="text-2xl font-black text-[#0A1F3C]">¿Quieres saber más?</h4>
                  <p className="text-sm font-medium text-[#5A7282] max-w-[280px] mx-auto">
                    Escanea el código QR para acceder a nuestro catálogo y más información.
                  </p>
                </div>
                <div className="p-4 bg-[#F8FAFC] rounded-2xl border-2 border-dashed border-[#CBD5E1]">
                  <img
                    src="/QR.JPG"
                    alt="Código QR Química Aquaplus"
                    className="w-56 h-56 sm:w-64 sm:h-64 object-contain rounded-xl shadow-sm mix-blend-multiply"
                  />
                </div>
                <p className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] uppercase tracking-wider">
                  ¡Escanea Aquí!
                </p>
              </div>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-10 py-5 bg-[#0A1F3C] hover:bg-[#0F2952] text-white text-lg font-bold tracking-wide rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
            >
              Solicitar Cotización
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
