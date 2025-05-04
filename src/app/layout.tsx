import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

// export const metadata: Metadata = {
//   title: 'RFE45Cancer: DNA methylation and cancer',
//   description: 'Showcase of DNA methylation and cancer research',
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>
        <Navbar />
        <main className="min-h-screen pt-24 pb-12 px-4 md:px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
