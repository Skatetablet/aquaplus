import { FlaskConical, Droplets, MapPin, Phone, Mail } from 'lucide-react';

const links = {
  Productos: [
    'Químicos para Alberca',
    'Grado Industrial',
    'Grado Analítico',
    'Equipo de Laboratorio',
    'Tratamiento de Agua',
    'Material Refractario',
  ],
  Servicios: [
    'Construcción de Albercas',
    'Maquiladora',
    'Asesoría Técnica',
    'Entrega a Domicilio',
    'Mantenimiento',
  ],
  Empresa: ['Quiénes Somos', 'Galería', 'Ubicaciones', 'Industria', 'Contacto'],
};

export default function Footer() {
  return (
    <footer className="bg-[#071428] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] flex items-center justify-center shadow-lg">
                  <FlaskConical className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#38BDF8] flex items-center justify-center">
                  <Droplets className="w-2.5 h-2.5 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div className="leading-none">
                <span className="block text-xl font-black tracking-tight text-white">QUIMICA</span>
                <span className="block text-sm font-semibold tracking-[0.15em] text-[#38BDF8] uppercase">
                  Aquaplus
                </span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-xs">
              Desde 2003, proveyendo soluciones químicas de calidad para industria, laboratorios y
              albercas en toda la región.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-3 text-sm text-white/50">
                <MapPin className="w-4 h-4 text-[#38BDF8] shrink-0" />
                Guadalajara, Jalisco, México
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Phone className="w-4 h-4 text-[#38BDF8] shrink-0" />
                +52 (33) 000-0000
              </div>
              <div className="flex items-center gap-3 text-sm text-white/50">
                <Mail className="w-4 h-4 text-[#38BDF8] shrink-0" />
                ventas@aquaplus.com.mx
              </div>
            </div>
          </div>

          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-[#38BDF8] mb-4">
                {category}
              </h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-white/45 hover:text-white/80 transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Quimica Aquaplus. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            Soluciones químicas de calidad desde 2003
          </p>
        </div>
      </div>
    </footer>
  );
}
