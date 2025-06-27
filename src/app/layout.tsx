import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Cida Esteticista | Estética Facial e Corporal em Barueri/Alphaville",
  description: "Tratamentos de estética facial e corporal personalizados em Barueri e Alphaville. Cida Esteticista com anos de experiência e resultados comprovados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
