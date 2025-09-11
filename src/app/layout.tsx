import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { getBaseLayout } from './api';
import { TickerBanner } from '../components/ticker';
import { Header } from '../components/header';
import { NavBar } from '../components/navbar';
import { Footer } from '../components/footer';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Brainiac Books",
  description: "by Ty Murphy",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { data: { baseLayout } } = await getBaseLayout();  

  return (
    <html lang="en">
      <body className={inter.className}>
        {baseLayout && (
          <>
            <TickerBanner {...baseLayout.ticker} />
            <Header {...baseLayout.header} />
            {/* <NavBar {...baseLayout.navbar} /> */}
          </>
        )}
        {children}
        <Footer />
      </body>
    </html>
  );
}
