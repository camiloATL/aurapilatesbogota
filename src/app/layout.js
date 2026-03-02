import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aura Pilates – Bienestar consciente que transforma",
  description:
    "En Aura creemos que el movimiento es una herramienta de transformación física y emocional. Somos un estudio boutique de pilates enfocado en la conexión mente-cuerpo, donde cada sesión está diseñada para brindarte equilibrio, fortaleza y tranquilidad. Nuestro espacio íntimo (máximo 4 camillas por clase) nos permite ofrecer una experiencia verdaderamente personalizada, cuidando cada detalle: técnica, respiración, postura y progreso individual. Más que entrenar, en Aura vienes a reconectar contigo.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  );
}
