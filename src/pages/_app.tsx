import type { AppProps } from 'next/app';
import { Geist } from 'next/font/google';
import '../styles/globals.css';  // Changed to relative path

const geist = Geist({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={geist.className}>
      <Component {...pageProps} />
    </main>
  );
}
