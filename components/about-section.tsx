import { CircleCheck as CheckCircle2, Award, Users, TrendingUp } from 'lucide-react';

const specialties = [
  'Productos químicos grado industrial',
  'Grado analítico certificado',
  'Equipo y material para laboratorio',
  'Accesorios para alberca y piscina',
  'Equipo para tratamiento de agua',
  'Material refractario y químicos',
];

const milestones = [
  { icon: Award, label: 'Años en el mercado', value: '20+' },
  { icon: Users, label: 'Clientes activos', value: '1,000+' },
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
                Más de dos décadas de excelencia química
              </p>
            </div>

            <div className="absolute -top-4 -left-4 bg-[#0EA5E9] rounded-xl p-4 shadow-xl">
              <div className="text-2xl font-black text-white">ISO</div>
              <div className="text-xs text-white/80 tracking-wider">Certificado</div>
            </div>
          </div>

          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
              Quiénes Somos
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight mb-6">
              Química Aquaplus
              <br />
              <span className="text-[#0EA5E9]">Tu aliado de confianza</span>
            </h2>

            <p className="text-[#5A7282] leading-relaxed mb-4">
              Desde 2003, nos hemos conducido con profesionalismo, responsabilidad y el compromiso
              de la mejora continua día a día. Somos un equipo de trabajo que enmarca nuestros
              valores y objetivos.
            </p>
            <p className="text-[#5A7282] leading-relaxed mb-8">
              Comprometidos siempre con nuestros clientes en brindarles excelente calidad con
              nuestras marcas líderes y confiables, manteniendo una constante capacitación para
              ofrecer alta calidad en nuestros productos y servicios.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-10">
              {specialties.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                  <span className="text-sm text-[#4A5568]">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-[#E2EDF7]">
              {milestones.map((m) => {
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
