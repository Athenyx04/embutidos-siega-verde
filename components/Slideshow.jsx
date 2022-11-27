import Image from 'next/image';
import {useEffect, useState} from 'react';
import s1 from '../public/images/s1.jpg';
import s2 from '../public/images/s2.jpg';
import s3 from '../public/images/s3.jpg';

export default function Slideshow() {
  const images = [s1, s2, s3];
  const [index, setIndex] = useState(0);
  const delay = 2000;

  useEffect(() => {
    const interval = setInterval(() => {
      change();
      console.log('Changed!');
    }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [index]);

  const change = () => {
    if (index === images.length - 1) {
      setIndex(0);
      console.log('Index', index);
      return;
    }
    setIndex(prev => prev + 1);
    console.log('Index ', index);
  };

  return (
    <div className="mx-auto my-0 overflow-hidden w-screen h-screen">
      <div
        className="object-cover w-full h-full whitespace-nowrap transition-all duration-1000"
        style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
      >
        {images.map((image, index) => (
          <Image className="inline-block" key={index} src={image} />
        ))}
      </div>
    </div>
  );
}
