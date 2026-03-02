"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";
import Link from "next/link";

const services = [
  {
    title: "Pilates Reformer (Grupal Semi-Privado)",
    bullets: [
      "Clases con máximo 4 personas",
      "Atención personalizada",
      "Fortalecimiento, tonificación y mejora postural",
      "Ideal para todos los niveles",
    ],
    tag: "Más pedido",
  },
  {
    title: "Planes Mensuales",
    bullets: [
      "Membresías con cupos reservados",
      "Progreso estructurado",
      "Comunidad consciente",
      "Rutina sostenida con seguimiento",
    ],
    tag: "Recomendado",
  },
];

export default function ServicesSection() {
  return (
    <SectionShell
      id="servicios"
      eyebrow="Servicios"
      title="Entrena con intención, mejora con consistencia"
      subtitle="Clases semi-privadas y planes mensuales diseñados para ayudarte a avanzar con técnica y calma."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {services.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg md:text-xl font-semibold text-[#57515B]">
                {s.title}
              </h3>
              <span className="shrink-0 rounded-full bg-[#F3CE83]/40 px-3 py-1 text-xs font-semibold text-[#57515B]">
                {s.tag}
              </span>
            </div>

            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              {s.bullets.map((b) => (
                <li key={b} className="flex gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#BD8D7E]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/home#contacto"
                className="rounded-full bg-[#F2A88D] px-5 py-2.5 text-sm font-semibold text-[#8C402E] transition hover:brightness-95 active:scale-[0.98]"
              >
                Quiero info
              </Link>
              <Link
                href="/home#contacto"
                className="rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-[0.98]"
              >
                Ver horarios
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}