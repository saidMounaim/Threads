import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { Providers } from "./provide";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Threads",
  description: "Threads using Next.js 14, Prisma, Tailwind.CSS & Next-Auth",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={montserrat.className}>
        <Providers>{children}</Providers>{" "}
      </body>
    </html>
  );
}
