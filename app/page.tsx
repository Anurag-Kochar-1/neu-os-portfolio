import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MenuBar from '@/components/MenuBar/MenuBar'
import AboutCard from '@/components/AboutCard/AboutCard'
import FoldersContainer from '@/components/FoldersContainer/FoldersContainer'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='w-full h-[100%] md:w-[95%] md:h-[95vh] flex justify-center items-center md:border-2 md:border-black bg-black'>

      {/* Window */}
      <div className='w-full h-full flex flex-col justify-start items-center md:border-2 md:border-black bg-blue-300 md:-mt-3 md:-ml-3 '>

        {/* <MenuBar /> */}

        <div className='bg-green-400 w-full h-full relative grid grid-cols-12 auto-rows-min  overflow-x-hidden overflow-y-scroll pb-40 md:pb-0'>

          <div className=' absolute left-0 bottom-0 top-0 bg-blue-500 w-full h-[50vh] xl:h-screen xl:w-full xl:col-start-1 xl:col-end-4'>  </div>

          <AboutCard />

          {/* <div className='bg-red-600 col-start-2 col-end-12 h-[300px] lg:col-span-4 lg:col-end-12 my-10'>  </div> */}


          <FoldersContainer />




        </div>

      </div>
    </main>
  )
}
