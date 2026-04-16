import { Phone, Mail, MapPin, MessageSquare, ArrowRight } from 'lucide-react';

const branches = [
  {
    city: 'Guaymas',
    address: 'Calle 9 y 10 #3 entre Blvd. Benito Juárez y Avenida 4\nColonia San Vicente\nGuaymas, Sonora, México\nC.P. 85465',
    phone: '01 (622) 224 14 57',
    phoneLabel: 'Tel/Fax',
    email: 'ventas@quimicaaquaplus.com',
  },
  {
    city: 'San Carlos',
    address: 'Blvd. Tetakawi #73-1\nSector Creston\nSan Carlos, Sonora, México',
    phone: '622 137 7210',
    phoneLabel: 'Tel',
    email: null,
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

            <div className="mb-3">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#0A1F3C]">
                <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                Nuestras Ubicaciones
              </span>
            </div>

            <div className="space-y-4">
              {branches.map((branch) => (
                <div
                  key={branch.city}
                  className="rounded-2xl border border-[#D6EAF8] bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-7 h-7 rounded-lg bg-[#0EA5E9]/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#0EA5E9]" />
                    </div>
                    <span className="text-sm font-black text-[#0A1F3C] tracking-wide">
                      {branch.city}
                    </span>
                  </div>
                  <p className="text-sm text-[#5A7282] leading-relaxed whitespace-pre-line mb-3">
                    {branch.address}
                  </p>
                  <div className="flex flex-col gap-1.5">
                    <a
                      href={`tel:${branch.phone.replace(/\s/g, '')}`}
                      className="inline-flex items-center gap-2 text-sm text-[#0A1F3C] font-semibold hover:text-[#0EA5E9] transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                      {branch.phoneLabel}: {branch.phone}
                    </a>
                    {branch.email && (
                      <a
                        href={`mailto:${branch.email}`}
                        className="inline-flex items-center gap-2 text-sm text-[#0A1F3C] font-semibold hover:text-[#0EA5E9] transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#0EA5E9] shrink-0" />
                        {branch.email}
                      </a>
                    )}
                  </div>
                </div>
              ))}
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
