"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-20">
      <div className="relative overflow-hidden border-b border-gray-200 bg-linear-to-b from-white via-[#F0CFAC]/20 to-white">
        {/* Glow decor */}
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[#F3CE83]/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 right-10 h-72 w-72 rounded-full bg-[#BD8D7E]/25 blur-3xl" />

        <div className="max-w-6xl mx-auto px-4 pt-28 pb-14 md:pt-36 md:pb-20">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.08 } } }}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-xs font-semibold text-gray-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#F2A88D]" />
                Aura Pilates — Bienestar consciente
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight text-[#57515B]"
              >
                Movimiento que transforma tu cuerpo y tu calma.
              </motion.h1>

              <motion.p variants={fadeUp} className="mt-4 text-base md:text-lg text-gray-600 max-w-xl">
                En Aura creemos que el movimiento es una herramienta de transformación física y emocional. 
                Un estudio boutique con máximo <b>4 camillas por clase</b>, para una experiencia realmente personalizada.
              </motion.p>

              <motion.div variants={fadeUp} className="mt-7 flex flex-wrap gap-3">
                <Link
                  href="/home#contacto"
                  className="rounded-full bg-[#F2A88D] px-6 py-3 text-sm font-semibold text-[#8C402E] shadow-sm transition hover:brightness-95 active:scale-[0.98]"
                >
                  Cotizar / Agendar
                </Link>

                <Link
                  href="/home#servicios"
                  className="rounded-full border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-50 active:scale-[0.98]"
                >
                  Ver servicios
                </Link>
              </motion.div>

              <motion.div variants={fadeUp} className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { t: "Boutique", d: "Máx. 4 personas" },
                  { t: "Personalizado", d: "Técnica y progreso" },
                  { t: "Mente–cuerpo", d: "Respiración y control" },
                ].map((card) => (
                  <div
                    key={card.t}
                    className="rounded-2xl border border-gray-200 bg-white/70 p-4 backdrop-blur transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="text-sm font-semibold text-[#57515B]">{card.t}</div>
                    <div className="mt-1 text-sm text-gray-600">{card.d}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative"
            >
              <div className="rounded-3xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
                <div className="flex items-center justify-center">
                  <Image
                    src="/assets/aura_logo.png"
                    alt="Aura Pilates Studio"
                    width={360}
                    height={360}
                    priority
                    className="h-auto w-56 md:w-72 drop-shadow-sm"
                  />
                </div>

                <div className="mt-6 grid gap-3">
                  <div className="rounded-2xl bg-gradient-to-r from-[#F3CE83]/30 to-[#BD8D7E]/25 p-4">
                    <p className="text-sm text-gray-700">
                      “Equilibrio, fortaleza y tranquilidad en cada sesión.”
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-md">
                      <div className="text-xs font-semibold text-gray-500">Formato</div>
                      <div className="mt-1 text-sm font-semibold text-[#57515B]">
                        Semi-privado
                      </div>
                    </div>
                    <div className="rounded-2xl border border-gray-200 bg-white p-4 transition hover:shadow-md">
                      <div className="text-xs font-semibold text-gray-500">Enfoque</div>
                      <div className="mt-1 text-sm font-semibold text-[#57515B]">
                        Postura + control
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* floating pill */}
              <div className="absolute -bottom-5 left-6 rounded-full border border-gray-200 bg-white/80 px-4 py-2 text-xs font-semibold text-gray-700 backdrop-blur">
                Cupos limitados · Reserva tu lugar
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}