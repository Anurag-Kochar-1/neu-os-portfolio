import TaskBar from '@/components/TaskBar/TaskBar'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />

      <body className='bg-[#FF5C5C] w-full h-screen flex flex-col justify-center items-center md:p-5 lg:p-10'>
        {children}
        <TaskBar />
      </body>
    </html>
  )
}
