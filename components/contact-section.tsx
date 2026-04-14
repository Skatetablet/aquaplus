import { Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const contactItems = [
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+52 (33) 000-0000',
    sub: 'Lun–Vie 8:00am–6:00pm',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'ventas@aquaplus.com.mx',
    sub: 'Respondemos en 24 hrs',
  },
  {
    icon: MapPin,
    label: 'Ubicación',
    value: 'Guadalajara, Jalisco',
    sub: 'México',
  },
];

export default function ContactSection() {
  return (
    <section id="contacto" className="py-24 bg-[#F0F8FF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#0EA5E9] mb-4">
              Contacto
            </span>
            <h2 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight mb-6">
              Necesitas ayuda?
              <br />
              <span className="text-[#0EA5E9]">Contáctanos</span>
            </h2>
            <p className="text-[#5A7282] leading-relaxed mb-10">
              Estamos listos para asesorarte. Contáctanos para cotizaciones, información sobre
              productos, sugerencias o cualquier consulta técnica.
            </p>

            <div className="space-y-5">
              {contactItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-[#0EA5E9]/10 border border-[#0EA5E9]/20 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-[#0EA5E9]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold tracking-widest uppercase text-[#8A9BB0] mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-base font-bold text-[#0A1F3C]">{item.value}</div>
                      <div className="text-xs text-[#8A9BB0]">{item.sub}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-[#E2EDF7] shadow-xl shadow-[#0EA5E9]/5 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#0EA5E9]/10 flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-[#0EA5E9]" />
              </div>
              <div>
                <div className="text-base font-black text-[#0A1F3C]">Envía un mensaje</div>
                <div className="text-xs text-[#8A9BB0]">Te respondemos pronto</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
                    Nombre
                  </label>
                  <input
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2EDF7] bg-[#F8FBFF] text-[#0A1F3C] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/10 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nombre de empresa"
                    className="w-full px-4 py-3 rounded-xl border border-[#E2EDF7] bg-[#F8FBFF] text-[#0A1F3C] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/10 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-[#E2EDF7] bg-[#F8FBFF] text-[#0A1F3C] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/10 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#4A5568] mb-2">
                  Mensaje
                </label>
                <textarea
                  rows={4}
                  placeholder="¿En qué podemos ayudarte? Describe tu necesidad o solicita una cotización..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E2EDF7] bg-[#F8FBFF] text-[#0A1F3C] text-sm placeholder:text-[#A0AEC0] focus:outline-none focus:border-[#0EA5E9] focus:ring-2 focus:ring-[#0EA5E9]/10 transition-colors resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-[#0EA5E9] hover:bg-[#0284C7] text-white font-bold tracking-wide rounded-xl transition-all duration-200 shadow-lg shadow-[#0EA5E9]/25 hover:-translate-y-0.5"
              >
                Enviar Mensaje
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
