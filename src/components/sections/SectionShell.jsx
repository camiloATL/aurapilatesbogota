"use client";

import { motion } from "framer-motion";

export default function SectionShell({ id, eyebrow, title, subtitle, children }) {
  return (
    <section id={id} className="scroll-mt-12">
      <div className="max-w-6xl mx-auto px-4 py-14 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-10"
        >
          {eyebrow && (
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-wide text-gray-700 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#F2A88D]" />
              {eyebrow}
            </div>
          )}

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-[#57515B]">
            {title}
          </h2>

          {subtitle && (
            <p className="mt-3 max-w-2xl text-base md:text-lg text-gray-600">
              {subtitle}
            </p>
          )}
        </motion.div>

        {children}
      </div>
    </section>
  );
}