import { client } from '@/lib/sanity.client';
import {Images} from '../../../typings';
import { useEffect } from 'react';
import Image from 'next/image';
import urlFor from '../../lib/urlFor';

type Props = {
  images: Images[];
};

export const FetchedImages = ({images}: Props) => {


  const primary: any[] = [];
  const secondary: any[] = [];
  
  images.map(img => {
    if (img.categories[0].title === "Primary") primary.push(img);
    else if (img.categories[0].title === "Secondary") secondary.push(img);
  });
  useEffect(() => {

  })

  return (
    
    <div >
      {primary.map((img, index) => (
        <div id={`skillImg_${index}`} key={index} className=' mr-[40px] placeholder-opacity-90' >
          <Image priority src={urlFor(img.url).url()} alt="" className='!h-[85%] !w-[50%] mx-[80px]'/>
          {img.image}
        </div>
        ))}
        </div>

  )
};



export async function getStaticProps() {
  const images = await client.fetch(`
    *[_type == "images"]{
      ...,
      categories[]->,
    } | order(_createdAt desc)
  `);

  return {
    props: {
      images
    }
  };
};