import Image from 'next/image';

export function Badge({image}:{image:string}) {
    return (
        <div className='h-[68px w-[68px] flex justify-center items-center'>
            <Image 
                src={image}
                alt={"Codificando"} 
                width={66}
                height={66}
            />  
            
        </div>
    );    
}