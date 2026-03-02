"use client";

import SectionShell from "./SectionShell";
import { motion } from "framer-motion";

const PHONE = "573503348681";
const IG = "aurapilatesbogota";
const EMAIL = "contacto@aurapilatesbogota.com.co";

const cards = [
  {
    title: "WhatsApp",
    desc: "+57 350 334 8681",
    href: `https://wa.me/${PHONE}?text=${encodeURIComponent(
      "Hola! Quiero información para clases/planes en Aura Pilates 🙌"
    )}`,
    pill: "Respuesta rápida",
  },
  {
    title: "Instagram",
    desc: `@${IG}`,
    href: `https://instagram.com/${IG}`,
    pill: "Contenido & novedades",
  },
  {
    title: "Correo",
    desc: EMAIL,
    href: `mailto:${EMAIL}?subject=${encodeURIComponent(
      "Información Aura Pilates"
    )}`,
    pill: "Para detalles",
  },
];

export default function ContactSection() {
  return (
    <SectionShell
      id="contacto"
      eyebrow="Contacto"
      title="Hablemos y reserva tu cupo"
      subtitle="Escríbenos y te ayudamos a elegir el plan ideal según tu nivel y objetivo."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {cards.map((c, idx) => (
          <motion.a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-[#57515B]">{c.title}</h3>
              <span className="rounded-full bg-[#F0CFAC]/50 px-3 py-1 text-xs font-semibold text-gray-700">
                {c.pill}
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600">{c.desc}</p>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#8C402E]">
              Abrir
              <span className="transition group-hover:translate-x-1">→</span>
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-10 rounded-3xl border border-gray-200 bg-linear-to-r from-white via-[#F3CE83]/15 to-white p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-[#57515B]">
              Aura Pilates – Bienestar consciente que transforma
            </p>
            <p className="mt-1 text-sm text-gray-600">
              Cupos limitados por ser estudio boutique. Agenda con tiempo.
            </p>
          </div>

          <a
            href={`https://wa.me/${PHONE}?text=${encodeURIComponent(
              "Hola! Quiero agendar una clase en Aura Pilates 🙌"
            )}`}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#F2A88D] px-6 py-3 text-sm font-semibold text-[#8C402E] transition hover:brightness-95 active:scale-[0.98] text-center"
          >
            Agendar por WhatsApp
          </a>
        </div>
      </div>
    </SectionShell>
  );
}