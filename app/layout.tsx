import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Poppins, Abyssinica_SIL } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose needed weights
  variable: "--font-poppins", // Define a CSS variable
});

const abyssinicaSIL = Abyssinica_SIL({
  weight: "400", // Abyssinica SIL only has 400 weight
  subsets: ["latin"], // Choose subsets
  variable: "--font-abyssinica-sil", // Define a CSS variable
});


// const notoSerif = Noto_Serif({
//   subsets: ["latin"],
//   weight: ["400", "700"],
//   variable: "--font-noto-serif",
// });



// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${abyssinicaSIL.variable}`}>
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
