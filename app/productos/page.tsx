import type { Metadata } from 'next';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import ProductsSection from '@/components/products-section';

export const metadata: Metadata = {
  title: 'Productos | Química Aquaplus',
  description: 'Conoce nuestro catálogo completo de productos químicos, equipos y accesorios para piscinas e industria.',
};

export default function ProductosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 bg-[#F0F8FF] min-h-screen">
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
