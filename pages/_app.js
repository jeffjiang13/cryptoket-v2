import Script from 'next/script';
import { ThemeProvider } from 'next-themes';
/* eslint-disable import/no-unresolved */
import { NFTProvider } from '@/context/NFTContext';
import '@/styles/globals.css';
import { Footer, Navbar } from '@/components';
//
const App = ({ Component, pageProps }) => (
  <NFTProvider>
    <ThemeProvider attribute="class">
      <div className="dark:bg-nft-dark bg-white min-h-screen">
        <Navbar />
        <div className="pt-65">
          <Component {...pageProps} />
        </div>

        <Footer />
      </div>

      <Script src="https://kit.fontawesome.com/94806df23e.js" crossorigin="anonymous" />
    </ThemeProvider>
  </NFTProvider>
);
export default App;
