import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />

      {/* Spacer por el navbar fixed */}
      <div className="h-24 md:h-28" />

      <section id="home" className="min-h-screen px-6 py-16">
        <h1 className="text-4xl font-bold">Home</h1>
      </section>

      <section id="about" className="min-h-screen px-6 py-16">
        <h2 className="text-3xl font-bold">Nosotros</h2>
      </section>

      <section id="servicios" className="min-h-screen px-6 py-16">
        <h2 className="text-3xl font-bold">Servicios</h2>
      </section>

      <section id="galeria" className="min-h-screen px-6 py-16">
        <h2 className="text-3xl font-bold">Galería</h2>
      </section>

      <section id="contacto" className="min-h-screen px-6 py-16">
        <h2 className="text-3xl font-bold">Contacto</h2>
      </section>
      <Footer />
    </div>
  );
}
