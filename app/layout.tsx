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

      <body className='bg-[#FF5C5C] w-full h-screen flex flex-col justify-center items-center overflow-x-hidden'>
        {children}
        <TaskBar />
      </body>
    </html>
  )
}
