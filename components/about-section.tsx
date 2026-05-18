import { CircleCheck as CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

const specialties = [
  'Productos químicos grado industrial',
  'Productos químicos grado analítico',
  'Accesorios para piscina',
  'Construcción de piscinas',
  'Equipo y material para tratamiento de agua',
  'Equipo y material para laboratorio',
];

const pillars = [
  { icon: Award, label: 'Años de trayectoria', value: '20+' },
  { icon: Users, label: 'Clientes satisfechos', value: '1,000+' },
  { icon: TrendingUp, label: 'Productos en catálogo', value: '500+' },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                src="https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=900"
                alt="Quimica Aquaplus - Instalaciones"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/20 to-transparent" />
            </div>

            <div className="absolute -bottom-6 -right-6 bg-[#0A1F3C] rounded-2xl p-6 shadow-2xl max-w-[220px]">
              <div className="text-4xl font-black text-white">2003</div>
              <div className="text-xs text-[#7DD3FC] uppercase tracking-widest mt-1">
                Fundada en
              </div>
              <div className="mt-3 h-0.5 bg-[#0EA5E9] w-8" />
              <p className="text-xs text-white/60 mt-2 leading-relaxed">
                +20 años de calidad, profesionalismo y compromiso
              </p>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
              Quiénes Somos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight mb-2">
              Química Aquaplus
            </h2>
            <p className="text-[#0EA5E9] font-bold text-lg mb-6">
              +20 años de Calidad, Profesionalismo, Responsabilidad y Compromiso
            </p>

            <p className="text-[#5A7282] leading-relaxed mb-4">
              Más de 20 años de experiencia respaldan nuestra trayectoria como empresa mexicana especializada en la distribución de productos químicos industriales y analíticos en Guaymas, Sonora. Complementamos nuestra oferta con soluciones integrales en tratamiento de agua, incluyendo el diseño, construcción y mantenimiento de piscinas residenciales y públicas.
            </p>
            <p className="text-[#5A7282] leading-relaxed mb-4">
              Nuestra eComplementamos nuestra oferta con soluciones integrales en tratamiento de agua, incluyendo el diseño, construcción y mantenimiento de piscinas residenciales y públicas. Nuestra evolución ha estado marcada por la confianza de clientes del sector industrial y familias que buscan calidad, seguridad y resultados confiables, llevándonos a estar presentes en Guaymas, San Carlos, Empalme y Ciudad Obregón.volución ha estado marcada por la confianza de clientes del sector industrial y familias que buscan calidad, seguridad y resultados confiables, llevándonos a estar presentes en Guaymas, San Carlos, Empalme y Ciudad Obregón.
            </p>
            <p className="text-[#5A7282] leading-relaxed mb-8">
              Nos distinguimos por un enfoque técnico, atención personalizada y un compromiso constante con la mejora continua, lo que nos permite ofrecer soluciones eficientes adaptadas a cada necesidad.
            </p>

            {/* Misión / Visión / Objetivos */}
            <div className="space-y-4 mb-8">
              {[
                {
                  title: 'Misión',
                  text: 'Brindar soluciones confiables en productos químicos y tratamiento de agua, mediante un servicio profesional, marcas de calidad y capacitación constante, asegurando la satisfacción de nuestros clientes.',
                },
                {
                  title: 'Visión',
                  text: 'Consolidarnos como una empresa referente en soluciones químicas y tratamiento de agua en la región, destacando por nuestra calidad, innovación y confianza.',
                },
                {
                  title: 'Objetivos',
                  text: 'Garantizar a nuestros clientes soluciones seguras y eficientes, que contribuyan al bienestar, la operación óptima de sus procesos y la calidad del agua en sus espacios.',
                },
              ].map(({ title, text }) => (
                <div key={title} className="flex gap-3">
                  <div className="mt-1 w-2 h-2 rounded-full bg-[#0EA5E9] shrink-0" />
                  <div>
                    <span className="text-sm font-black text-[#0A1F3C]">{title}: </span>
                    <span className="text-sm text-[#5A7282] leading-relaxed">{text}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {specialties.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#4A5568]">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E2EDF7]">
              {pillars.map((m) => {
                const Icon = m.icon;
                return (
                  <div key={m.label} className="text-center">
                    <div className="w-10 h-10 rounded-xl bg-[#EBF5FF] flex items-center justify-center mx-auto mb-2">
                      <Icon className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                    <div className="text-2xl font-black text-[#0A1F3C]">{m.value}</div>
                    <div className="text-xs text-[#8A9BB0] uppercase tracking-wide mt-0.5">
                      {m.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
