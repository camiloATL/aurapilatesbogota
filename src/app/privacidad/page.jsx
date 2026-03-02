import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Privacidad() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Navbar />
      <div className="h-24 md:h-28" />
      <section className="min-h-screen px-6 py-16">
        <h1 className="text-4xl font-bold">Política de privacidad</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          En Aura Pilates, valoramos tu privacidad y nos comprometemos a
          proteger tus datos personales. Esta política de privacidad describe
          cómo recopilamos, usamos y protegemos tu información cuando visitas
          nuestro sitio web o utilizas nuestros servicios.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          Información que recopilamos
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Recopilamos información personal que nos proporcionas voluntariamente,
          como tu nombre, correo electrónico, número de teléfono y cualquier
          otra información que decidas compartir con nosotros al registrarte
          para clases, suscribirte a nuestro boletín o contactarnos. También
          podemos recopilar información automáticamente a través de cookies y
          tecnologías similares para mejorar tu experiencia en nuestro sitio
          web.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          Cómo usamos tu información
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Utilizamos tu información para proporcionarte nuestros servicios,
          responder a tus consultas, enviarte actualizaciones y promociones, y
          mejorar nuestro sitio web. No compartimos tu información personal con
          terceros, excepto cuando sea necesario para cumplir con la ley o
          proteger nuestros derechos.
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          Seguridad de tu información
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Implementamos medidas de seguridad para proteger tu información
          personal contra accesos no autorizados, alteraciones, divulgaciones o
          destrucciones. Sin embargo, ten en cuenta que ningún método de
          transmisión por Internet o almacenamiento electrónico es completamente
          seguro.
        </p>
        <h2 className="text-2xl font-semibold mt-8">Tus derechos</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Tienes derecho a acceder, corregir o eliminar tu información personal.
          Si deseas ejercer estos derechos o tienes alguna pregunta sobre
          nuestra política de privacidad, no dudes en contactarnos a través de
          nuestro formulario de contacto o enviándonos un correo electrónico a
          [correo electrónico de contacto].
        </p>
        <h2 className="text-2xl font-semibold mt-8">
          Cambios a esta política de privacidad
        </h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Nos reservamos el derecho de actualizar esta política de privacidad en
          cualquier momento. Cualquier cambio será publicado en esta página con
          una fecha de actualización. Te recomendamos revisar esta política
          periódicamente para estar informado sobre cómo protegemos tu
          información.
        </p>
      </section>
      <Footer />
    </div>
  );
}
