import Head from 'next/head';
import BackgroundSlider from 'react-background-slider';
import Slideshow from '../components/Slideshow';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Embutidos Siega Verde</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Slideshow />
      </div>
    </div>
  );
}
