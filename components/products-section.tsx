import {
  FlaskConical,
  Beaker,
  Microscope,
  Waves,
  Wrench,
  Flame,
  ArrowUpRight,
} from 'lucide-react';

const products = [
  {
    icon: Waves,
    title: 'Químicos para Alberca',
    description:
      'Cloro, pH reguladores, algicidas y clarificadores para mantener el agua de tu alberca perfecta todo el año.',
    image:
      'https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Más Popular',
    color: 'from-[#0EA5E9] to-[#0284C7]',
  },
  {
    icon: FlaskConical,
    title: 'Grado Industrial',
    description:
      'Reactivos y compuestos químicos de alta pureza para procesos industriales y manufactura especializada.',
    image:
      'https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Industrial',
    color: 'from-[#0F4C81] to-[#0A2540]',
  },
  {
    icon: Beaker,
    title: 'Grado Analítico',
    description:
      'Reactivos de máxima pureza certificados para análisis de laboratorio, investigación y control de calidad.',
    image:
      'https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Laboratorio',
    color: 'from-[#0369A1] to-[#0EA5E9]',
  },
  {
    icon: Microscope,
    title: 'Equipo de Laboratorio',
    description:
      'Material y equipo especializado: buretas, pipetas, matraces, cristalería y equipo de precisión.',
    image:
      'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Equipo',
    color: 'from-[#075985] to-[#0369A1]',
  },
  {
    icon: Waves,
    title: 'Tratamiento de Agua',
    description:
      'Sistemas y químicos para purificación, filtración y tratamiento de agua industrial y residencial.',
    image:
      'https://images.pexels.com/photos/416528/pexels-photo-416528.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Tratamiento',
    color: 'from-[#0284C7] to-[#38BDF8]',
  },
  {
    icon: Flame,
    title: 'Material Refractario',
    description:
      'Materiales y productos químicos refractarios para aplicaciones de alta temperatura e industria pesada.',
    image:
      'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=800',
    tag: 'Refractario',
    color: 'from-[#0A1F3C] to-[#0F2952]',
  },
];

export default function ProductsSection() {
  return (
    <section id="productos" className="py-24 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-3">
              Nuestro Catálogo
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight">
              Productos &amp;
              <br />
              <span className="text-[#0EA5E9]">Soluciones</span>
            </h2>
          </div>
          <p className="text-[#4A5568] max-w-sm leading-relaxed md:text-right">
            Contamos con una amplia gama de productos químicos para cada necesidad industrial,
            de laboratorio y residencial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <article
                key={product.title}
                className="group relative bg-white rounded-2xl overflow-hidden border border-[#E2EDF7] hover:border-[#0EA5E9]/40 hover:shadow-xl hover:shadow-[#0EA5E9]/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${product.color} opacity-70`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-wider uppercase border border-white/20">
                      {product.tag}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4">
                    <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-black text-[#0A1F3C] mb-2 group-hover:text-[#0284C7] transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm text-[#5A7282] leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <a
                    href="#contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#0EA5E9] hover:text-[#0284C7] transition-colors group/link"
                  >
                    Solicitar cotización
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#0A1F3C] hover:bg-[#0F2952] text-white font-bold tracking-wide rounded-xl transition-colors duration-200"
          >
            Ver Catálogo Completo
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
