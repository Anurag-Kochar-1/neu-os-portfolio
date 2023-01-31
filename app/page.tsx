import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import MenuBar from '@/components/MenuBar/MenuBar'
import AboutCard from '@/components/AboutCard/AboutCard'
const inter = Inter({ subsets: ['latin'] })


export default function Home() {
  return (
    <main className='w-full h-[100vh] flex justify-center items-center sm:border-2 sm:border-black bg-black'>
      <div className='w-full h-full grid grid-cols-12 grid-rows-6 sm:border-2 sm:border-black bg-white sm:-mt-3 sm:-ml-3 justify-items-center	'>

        <MenuBar />
        <AboutCard />

      </div>
    </main>
  )
}
