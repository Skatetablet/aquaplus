import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Ubicaciones | Química Aquaplus',
  description:
    'Encuentra nuestras sucursales en Guaymas y San Carlos, Sonora. Química Aquaplus — distribuidores de productos químicos industriales desde 2003.',
};

const locations = [
  {
    city: 'Guaymas',
    address: 'Calle 9 y 10 #3 entre Blvd. Benito Juárez y Avenida 4\nColonia San Vicente\nGuaymas, Sonora, México\nC.P. 85465',
    phone: '01 (622) 224 14 57',
    phoneHref: 'tel:016222241457',
    phoneLabel: 'Tel/Fax',
    email: 'ventas@quimicaaquaplus.com',
    hours: 'Lun – Vie: 8:00 am – 6:00 pm',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3865.5201825569206!2d-110.9099825!3d27.9082564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c97a81126a0563%3A0xbf9564103bf69ed2!2sQu%C3%ADmica%20Aquaplus!5e1!3m2!1ses-419!2smx!4v1777326525061!5m2!1ses-419!2smx',
  },
  {
    city: 'San Carlos',
    address: 'Blvd. Tetakawi #73-1\nSector Creston\nSan Carlos, Sonora, México',
    phone: '622 137 7210',
    phoneHref: 'tel:6221377210',
    phoneLabel: 'Tel',
    email: null,
    hours: 'Lun – Vie: 8:00 am – 6:00 pm',
    mapSrc:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3863.7362688007656!2d-111.04009669999999!3d27.958137599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86c96321ff494537%3A0x20437eb1d777b1b8!2sQuimica%20Aqua%20Plus!5e1!3m2!1ses-419!2smx!4v1777326472944!5m2!1ses-419!2smx',
  },
];

export default function UbicacionesPage() {
  return (
    <>
      <Navbar />

      <main>
        {/* ── HERO ─────────────────────────────────────────── */}
        <section className="relative min-h-[40vh] flex items-end pb-16 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url('https://images.pexels.com/photos/261403/pexels-photo-261403.jpeg?auto=compress&cs=tinysrgb&w=1920')",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1F3C]/95 via-[#0A1F3C]/80 to-[#0284C7]/50" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#0EA5E9]/10 blur-3xl" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-32">
            <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-[#38BDF8] mb-4">
              Química Aquaplus
            </span>
            <h1 className="text-5xl sm:text-6xl font-black text-white leading-tight mb-3 tracking-tight">
              Nuestras{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#38BDF8] to-[#7DD3FC]">
                Ubicaciones
              </span>
            </h1>
            <p className="text-white/60 text-lg">
              Presentes en Guaymas y San Carlos, Sonora
            </p>
          </div>
        </section>

        {/* ── LOCATIONS ─────────────────────────────────────── */}
        <section className="py-20 bg-[#F0F8FF]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-20">
            {locations.map((loc, i) => (
              <div
                key={loc.city}
                className={`grid lg:grid-cols-2 gap-10 items-start ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                {/* Info card */}
                <div className="bg-white rounded-2xl border border-[#E2EDF7] shadow-sm p-8 h-full">
                  {/* City header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs font-bold tracking-[0.2em] uppercase text-[#0EA5E9]">
                        Sucursal
                      </p>
                      <h2 className="text-2xl font-black text-[#0A1F3C]">{loc.city}</h2>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-3 mb-5">
                    <MapPin className="w-4 h-4 text-[#0EA5E9] mt-0.5 shrink-0" />
                    <p className="text-sm text-[#5A7282] leading-relaxed whitespace-pre-line">
                      {loc.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <a
                    href={loc.phoneHref}
                    className="flex items-center gap-3 mb-4 group"
                  >
                    <Phone className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                    <div>
                      <span className="text-xs text-[#8A9BB0] uppercase tracking-wider">
                        {loc.phoneLabel}:{' '}
                      </span>
                      <span className="text-sm font-semibold text-[#0A1F3C] group-hover:text-[#0EA5E9] transition-colors">
                        {loc.phone}
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  {loc.email && (
                    <a
                      href={`mailto:${loc.email}`}
                      className="flex items-center gap-3 mb-4 group"
                    >
                      <Mail className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                      <span className="text-sm font-semibold text-[#0A1F3C] group-hover:text-[#0EA5E9] transition-colors">
                        {loc.email}
                      </span>
                    </a>
                  )}

                  {/* Hours */}
                  <div className="flex items-center gap-3 mt-2">
                    <Clock className="w-4 h-4 text-[#0EA5E9] shrink-0" />
                    <span className="text-sm text-[#5A7282]">{loc.hours}</span>
                  </div>

                  {/* Divider + CTA */}
                  <div className="mt-8 pt-6 border-t border-[#E2EDF7]">
                    <a
                      href="/#contacto"
                      className="inline-flex items-center gap-2 px-5 py-3 bg-[#0EA5E9] hover:bg-[#0284C7] text-white text-sm font-bold tracking-wide rounded-xl transition-all duration-200 shadow-md shadow-[#0EA5E9]/20 hover:-translate-y-0.5"
                    >
                      Contactar esta sucursal
                    </a>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-2xl overflow-hidden border border-[#E2EDF7] shadow-sm aspect-[4/3] lg:aspect-auto lg:h-full min-h-[350px]">
                  <iframe
                    src={loc.mapSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0, minHeight: '350px' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Mapa sucursal ${loc.city}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
