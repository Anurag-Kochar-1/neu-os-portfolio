import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />

      <body className='bg-[#FF5C5C] w-full h-screen flex flex-col justify-center items-center sm:p-5 lg:p-10'>
        {children}
      </body>
    </html>
  )
}
