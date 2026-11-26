import type { Metadata } from "next";
import { Tajawal, Readex_Pro } from "next/font/google";
import "./globals.css";

const tajawal = Tajawal({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "700", "800"],
  variable: "--font-tajawal",
});

const readex = Readex_Pro({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-readex",
});

export const metadata: Metadata = {
  title: "مطعم واحة فندر | Vender Oasis Restaurant",
  description:
    "مرحبًا بكم في مطعم واحة فندر، وجهتكم لتجربة ضيافة متكاملة تجمع بين الطعم المميز والأجواء الراقية.",
  icons: {
    icon: "images/logo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${tajawal.variable} ${readex.variable}`}
    >
      <body className="font-readex antialiased selection:bg-[#C8AA76]/30 selection:text-[#2D3829]">
        {children}
      </body>
    </html>
  );
}
