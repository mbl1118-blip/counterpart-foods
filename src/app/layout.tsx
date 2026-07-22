import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({
  variable: "--font-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Counterpart Foods | Managed Food Programs for Coffee Shops",
  description:
    "Chef-made meals and snacks delivered to your counter every morning. A complete food program for independent coffee shops in NYC.",
  openGraph: {
    title: "Counterpart Foods",
    description:
      "Chef-made meals and snacks delivered to your counter every morning.",
    url: "https://counterpartfoods.com",
    siteName: "Counterpart Foods",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
