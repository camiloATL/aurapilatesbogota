"use client";

import { motion } from "framer-motion";
import SectionShell from "./SectionShell";

const items = [
  {
    title: "Conexión mente–cuerpo",
    desc: "Sesiones enfocadas en respiración, control, alineación y calma.",
  },
  {
    title: "Atención personalizada",
    desc: "Grupo máximo de 4 personas para corregir técnica y cuidar tu progreso.",
  },
  {
    title: "Boutique & detalle",
    desc: "Un espacio íntimo donde cada movimiento cuenta: postura, técnica y propósito.",
  },
];

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="Nosotros"
      title="Aura Pilates — un estudio boutique para tu bienestar"
      subtitle="El movimiento como herramienta de transformación física y emocional, en un ambiente íntimo y consciente."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {items.map((it, idx) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: idx * 0.06 }}
            className="group rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-[#57515B]">{it.title}</h3>
              <span className="h-10 w-10 rounded-2xl bg-[#F0CFAC]/40 grid place-items-center transition group-hover:scale-105">
                ✦
              </span>
            </div>
            <p className="mt-3 text-sm text-gray-600 leading-relaxed">{it.desc}</p>
            <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-gray-200 to-transparent" />
            <p className="mt-4 text-xs font-semibold text-gray-500">
              Técnica · Respiración · Progreso
            </p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}