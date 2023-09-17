import Image from 'next/image';
import background from '../../public/background.jpg'

export default function Home(){
    return(
        <main className='flex flex-col items-center justify-between'>
            <div className ='relative w-full'>
            <div className ='absolute -z-10 w-full'>
              <Image
               src={background} alt='background image' className='w-full' width={1000} height={1000} />
            </div>
            </div>

        </main>
    )
}