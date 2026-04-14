import { Truck, Headphones as HeadphonesIcon, ShieldCheck, Zap, Building2, TestTube } from 'lucide-react';

const services = [
  {
    icon: ShieldCheck,
    title: 'Calidad Certificada',
    description:
      'Todos nuestros productos cumplen con normas de calidad nacionales e internacionales para garantizar resultados confiables.',
  },
  {
    icon: Truck,
    title: 'Entrega a Domicilio',
    description:
      'Servicio de entrega en toda la región. Recibe tus pedidos de forma segura, puntual y con la documentación necesaria.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Asesoría Técnica',
    description:
      'Equipo de especialistas disponibles para orientarte en la selección del producto adecuado para tu aplicación.',
  },
  {
    icon: Building2,
    title: 'Construcción de Albercas',
    description:
      'Servicio completo de construcción, remodelación y mantenimiento de albercas residenciales y comerciales.',
  },
  {
    icon: TestTube,
    title: 'Maquiladora',
    description:
      'Servicio de maquila para formulación y envasado de productos químicos bajo tu marca con nuestros estándares.',
  },
  {
    icon: Zap,
    title: 'Respuesta Rápida',
    description:
      'Atendemos urgencias industriales con inventario disponible y logística ágil para mantener tu operación activa.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="py-24 bg-[#0A1F3C] relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0EA5E9]/8 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#38BDF8]/5 rounded-full blur-2xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-3">
            Lo que ofrecemos
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            Servicios que nos
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
              diferencian
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group p-6 rounded-2xl border border-white/10 hover:border-[#0EA5E9]/40 bg-white/5 hover:bg-white/8 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0EA5E9]/20 to-[#0EA5E9]/5 border border-[#0EA5E9]/20 flex items-center justify-center mb-4 group-hover:from-[#0EA5E9]/30 transition-all">
                  <Icon className="w-6 h-6 text-[#38BDF8]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-black text-white mb-2">{service.title}</h3>
                <p className="text-sm text-white/55 leading-relaxed">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
