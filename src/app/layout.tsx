import 'bootstrap/dist/css/bootstrap.min.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container, SSRProvider } from '@/components/bootstrap';
import NavBar from './NavBar';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS Image Gallery",
  description: "Tutorial project by Coding in Flow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SSRProvider>
          <NavBar />
          <main>
            <Container className='py-4'>
              {children}
            </Container>
          </main>
        </SSRProvider>
      </body>
    </html>
  );
}
