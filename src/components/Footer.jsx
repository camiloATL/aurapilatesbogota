"use client";

import Link from "next/link";
import Image from "next/image";

const links = {
  servicios: [
    { name: "Pilates Reformer (Grupal Semi-Privado)", href: "/home#servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "/home#about" },
    { name: "Galería", href: "/home#galeria" },
    { name: "Contacto", href: "/home#contacto" },
  ],
};

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-400 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/assets/aura_logo.png"
                alt="Aura Pilates"
                width={180}
                height={60}
                className="h-28 w-auto"
              />
            </Link>

            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Aura Pilates – Bienestar consciente que transforma
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gray-400 bg-gray-200/25 px-3 py-1 text-xs text-gray-600">
              <span className="h-2 w-2 rounded-full bg-gray-600" />
              Atención profesional y personalizada
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700">Servicios</h3>
            <ul className="mt-4 space-y-2">
              {links.servicios.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-gray-700 transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gray-700">Empresa</h3>
            <ul className="mt-4 space-y-2">
              {links.empresa.map((l) => (
                <li key={l.name}>
                  <Link
                    href={l.href}
                    className="text-sm text-gray-500 hover:text-gray-700 transition"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / CTA */}
          <div>
            <h3 className="text-sm font-semibold text-gray-700">Contacto</h3>

            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <p>
                <span className="font-medium text-gray-600">Email:</span>{" "}
                contacto@aurapilatesbogota.com.co
              </p>
              <p>
                <span className="font-medium text-gray-600">WhatsApp:</span> +57
                350 3348681
              </p>
              <p className="text-gray-600/70">Colombia</p>
            </div>

            <Link
              href="/home#contacto"
              className="mt-5 inline-flex w-full items-center justify-center rounded-2xl bg-[#F2A88D] px-4 py-3 text-sm font-semibold text-[#8C402E] border border-[#F2A88D] hover:bg-[#F2A88D]/90 transition"
            >
              Solicitar asesoría
            </Link>

            <p className="mt-3 text-xs text-gray-600">Respuesta inmediata</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-400 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} Aura Pilates. Todos los derechos
            reservados.
          </p>

          <div className="flex gap-4 text-xs">
            <Link
              href="/privacidad"
              className="text-gray-600/80 hover:text-gray-600 transition"
            >
              Política de privacidad - Términos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
