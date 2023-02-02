import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MenuBar from '@/components/MenuBar/MenuBar'
import AboutCard from '@/components/AboutCard/AboutCard'
import FoldersContainer from '@/components/FoldersContainer/FoldersContainer'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='w-full h-[100vh] md:w-[95%] md:h-[95vh] flex justify-center items-center md:border-2 md:border-black bg-black'>
      <div className='w-full h-full flex flex-col justify-start items-center md:border-2 md:border-black bg-blue-300 md:-mt-3 md:-ml-3 '>

        <MenuBar />

        <div className='bg-green-400 w-full h-full relative grid grid-cols-12 grid-rows-none py-3 overflow-x-hidden overflow-y-scroll lg:overscroll-y-hidden place-items-center'>

          {/* ---- Bg ---- */}
          <div className='absolute left-0 bottom-0 top-0 w-full lg:w-[40%] h-[50vh] lg:h-[100vh] bg-blue-500'></div>

          <AboutCard />

          


        </div>

      </div>
    </main>
  )
}
