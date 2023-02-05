import React from 'react'

const MenuBar = () => {

    const today = new Date();
    const date:string = today.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })

    const time:string = today.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });



    return (
        <nav className='hidden lg:inline-flex w-full col-span-full h-10 bg-black justify-between items-center px-5'>
            <ul className='flex flex-start items-center text-white space-x-3 text-base font-medium hover:cursor-pointer'>
                <li> Finder </li>
                <li> File </li>
                <li> Edit </li>
                <li> View </li>
                <li> Go </li>
                <li> Window </li>
                <li> Help </li>
            </ul>

            <p className='hidden md:inline-block text-white font-medium text-base space-x-3 hover:cursor-pointer'> {date} {time} </p>



        </nav>
    )
}

export default MenuBar