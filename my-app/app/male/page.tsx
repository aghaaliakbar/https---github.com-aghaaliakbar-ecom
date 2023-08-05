import { Image as img } from "sanity";
import { client } from "../../sanity/lib/client";
import Image from "next/image";
// import  {urlForImage} from '@/sanity/lib/image';
import { urlForImage } from "../../sanity/lib/image";


// import { urlForImage } from "../../sanity/lib/image";

export async function abc() {
  const abc =await client.fetch(`*[_type == "product"]
  {
      name,
      details,
   price,
  image,
  
   category ->{
    name,
    
   },
  }`,{cache:'no-store'});

  return abc;
}




interface dataType {
  title: string,
  details: string,
  name:string,
  price: number,
  image: img[],
  
  category:{
    name:string,
  };
}

export default async function page() {
  const data: dataType[] = await abc();

  console.log(`image`,data[0].image);
 

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 md:space-x-14 space-y-10 mt-[50px]  items-center'>
      {data.map((item) => (
     
          <div>
            

   
           
<Image src={urlForImage(item.image[0]).url()} alt="products" width={400} height={400}/>
<h1 className='font-bold mt-[6px] text-lg'>{item.name}</h1>
<h1  className='my-1 text-gray-500 font-semibold text-lg'>{item.details}</h1>
<h1 className='font-bold text-xl'>{item.price}</h1>




</div>
 
  ))}
    </div>




  );
}


