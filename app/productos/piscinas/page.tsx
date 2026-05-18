import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Productos y Accesorios para Piscinas | Química Aquaplus',
  description: 'Bienvenidos a nuestra sección de productos y accesorios para piscinas.',
};

export default function PiscinasProductosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#F0F8FF] min-h-screen pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-black text-[#0A1F3C] leading-tight mb-4">
              Piscinas
            </h1>
            <p className="text-lg text-[#5A7282]">
              Bienvenidos a nuestra sección de productos y accesorios para piscinas.
            </p>
          </div>

          <div className="space-y-16">
            {/* Productos químicos */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-8 border-b pb-4">Productos químicos</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">CLORIZIDE AL 91</h3>
                  <p className="font-semibold text-[#0A1F3C] mb-2">Cloro estabilizado y concentrado al 91% para piscinas</p>
                  <p className="text-[#5A7282] leading-relaxed mb-2">Desinfectante de mayor concentración pureza y rendimiento que se puede encontrar en el mercado. Su eficacia y buen funcionamiento ha sido probado por los usuarios y especialistas en piscinas por más de 30 años.</p>
                  <p className="text-[#5A7282] leading-relaxed">Como Producto de Spin quien tiene la prioridad de mantener la calidad en sus productos gramo a gramo, con una sola dosis de este producto garantiza la permanencia de este de 1 a 3 ppm hasta por 48 hrs.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">TRIZIDE</h3>
                  <p className="font-semibold text-[#0A1F3C] mb-2">Producto multifuncional para piscina 4 a 1</p>
                  <p className="text-[#5A7282] leading-relaxed mb-2">La experiencia y capacidad de SPIN en productos químicos para piscinas ha logrado</p>
                  <p className="text-[#5A7282] leading-relaxed">Un desinfectante clorado al 65%, un poderoso alguicida, un clarificador y un estabilizador de Ph que ayuda a mantenerlo en su nivel adecuado por mucho mas tiempo.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-2">SHOCK PREVENTIVO</h3>
                  <p className="font-semibold text-[#0A1F3C] mb-2">Tratamiento efectivo contra algas y cloramina</p>
                  <p className="text-[#5A7282] leading-relaxed mb-2">Químico que previene y evita la formación de algas y cloraminas en las piscinas.</p>
                  <p className="text-[#5A7282] leading-relaxed">Es un oxidante no clorado que aumenta el rendimiento del cloro muy considerablemente de rápida disolución y excelentes resultados. Parte de los productos Elite de la familia SPIN.</p>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-[#E2EDF7]">
                <h3 className="text-2xl font-black text-[#0A1F3C] mb-6">Especialidades</h3>
                <p className="font-semibold text-[#0EA5E9] mb-3">Productos químicos marca Novem</p>
                <ul className="list-disc list-inside text-[#5A7282] space-y-2">
                  <li>Ph +</li>
                  <li>Ph –</li>
                  <li>Tricloro</li>
                  <li>Clarificadores</li>
                </ul>
              </div>
            </section>

            {/* Tinas de hidromasaje */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-6 border-b pb-4">Tinas de hidromasaje</h2>
              <p className="text-[#5A7282] leading-relaxed mb-6">Contamos también con otros servicios relacionados con el suministro e instalación de equipo para tinas de hidromasaje, desde el proyecto a la realización, así como de reconstrucción y/o remodelación.</p>
              <h3 className="text-lg font-bold text-[#0EA5E9] uppercase tracking-wider">Accesorios para tinas forjadas en obra</h3>
            </section>

            {/* Equipos */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-8 border-b pb-4">Equipos</h2>
              
              <div className="space-y-10">
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-3">Equipos hidroneumáticos</h3>
                  <p className="text-[#5A7282] leading-relaxed">Asegure la presión y suministro de agua con nuestros sistemas hidroneumáticos, que no sólo le darán agua suficiente sino la presión deseada, en aplicaciones residenciales, comerciales e industriales.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-3">Bombas para piscina</h3>
                  <p className="text-[#5A7282] leading-relaxed">Para el mejor sistema de bombeo contamos con todo tipo de bombas: centrífugas, tipo Jet, sumergibles (para pozo profundo, charqueras, aguas negras, fuentes, cascadas, etc.) circuladores de agua caliente y más. Distribuimos marcas de prestigio como Myers, Berkeley, Sta-Rite, Evans, Durman, Pedrollo, Altamira, ESPA, Grundfos, Goulds y muchas más.</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-3">Filtros para piscina</h3>
                  <p className="text-[#5A7282] leading-relaxed mb-4">Mantener limpia el agua de su piscina es primordial para su mantenimiento, deje que nuestros filtros para piscina hagan el trabajo.</p>
                  <p className="text-[#5A7282] leading-relaxed mb-4">Contamos una extensa variedad de filtros de las marcas líderes de la industria para su piscina se mantenga libre de impurezas orgánicas como mugre, cabellos, aceites corporales entre otros. Recuerde que todos nuestros productos cuentan con garantía.</p>
                  <p className="text-[#5A7282] leading-relaxed mb-4">Contamos con una amplia gama de filtros de agua para todo tipo de aplicaciones:</p>
                  <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                    <li>Filtros de cartucho</li>
                    <li>Filtros de medio filtrante permanente en tanque</li>
                    <li>Automáticos y manuales</li>
                    <li>Filtros de arena verde</li>
                    <li>KDF</li>
                    <li>Acondicionadores de agua (suavizadores y desionizadores), entre otros.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-3">Sistemas de calentamiento para piscinas</h3>
                  <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                    <li>Calentadores de paso (Gas LP y Natural)</li>
                    <li>Bomba de Calor</li>
                    <li>Colectores solares</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-3">Sistemas de iluminación sub-acuática para piscinas residenciales</h3>
                  <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                    <li>Fibra óptica</li>
                    <li>Luz incandescente</li>
                    <li>Reflectores Spectrum</li>
                    <li>Reflectores de LED's</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recubrimientos */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-6 border-b pb-4">Recubrimientos</h2>
              <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                <li>Mosaico veneciano</li>
                <li>Kolorines</li>
                <li>Vidrepur</li>
                <li>Vetro</li>
              </ul>
            </section>

            {/* Accesorios de limpieza */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-6 border-b pb-4">Accesorios de limpieza y sistemas de control</h2>
              <p className="text-[#5A7282] leading-relaxed mb-6">En Química Aquaplus contamos con lo necesario y de las mejores marcas para una limpieza profunda y segura.</p>
              <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                <li>Hayward</li>
                <li>Pentair</li>
                <li>Jacuzzi</li>
              </ul>
            </section>

            {/* Accesorios y refacciones */}
            <section className="bg-white rounded-3xl p-8 sm:p-10 shadow-sm border border-[#E2EDF7]">
              <h2 className="text-3xl font-black text-[#0A1F3C] mb-8 border-b pb-4">Accesorios y refacciones</h2>
              
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Accesorios</h3>
                  <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                    <li>Escaleras</li>
                    <li>Trampolines</li>
                    <li>Equipos de competencia</li>
                    <li>Sistemas de nado contra corriente</li>
                    <li>Analizadores</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-[#0EA5E9] mb-4">Refacciones</h3>
                  <p className="font-semibold text-[#0A1F3C] mb-3">Cubiertas y Enrolladores</p>
                  <ul className="list-disc list-inside text-[#5A7282] space-y-2 ml-4">
                    <li>Cubiertas eléctricas</li>
                    <li>Cubiertas térmicas de aire encapsulado</li>
                    <li>Cubiertas de seguridad</li>
                    <li>Enrolladores manuales y automáticos</li>
                  </ul>
                </div>
              </div>
            </section>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
