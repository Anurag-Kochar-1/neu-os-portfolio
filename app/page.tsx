import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MenuBar from '@/components/MenuBar/MenuBar'
import AboutCard from '@/components/AboutCard/AboutCard'
import FoldersContainer from '@/components/FoldersContainer/FoldersContainer'
const inter = Inter({ subsets: ['latin'] })

//  md:w-[95%] md:h-[90vh] xl:w-[90%] xl:h-[90vh]

export default function Home() {
  return (
    <main className='w-full h-[100%] flex justify-center items-center md:border-0 md:border-black bg-black overflow-hidden'>

      {/* Window */}
      <div className='w-full h-full flex flex-col justify-start items-center md:border-0 md:border-black bg-blue-300 md:-mt-0 md:-ml-0 overflow-x-hidden overflow-y-scroll scrollbar-hide'>
        <MenuBar />
        <div className='bg-white w-full h-full relative grid grid-cols-12 auto-rows-min pb-40 md:pb-0'>
          <div className=' absolute left-0 bottom-0 top-0 bg-blue-500 w-full h-[50vh] xl:h-full xl:w-full xl:col-start-1 xl:col-end-4'>  </div>
          <AboutCard />
          <FoldersContainer />
        </div>
      </div>
    </main>
  )
}
