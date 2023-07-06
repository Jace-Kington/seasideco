import React from 'react'
import Image from 'next/image'

import logo from '../assets/logo.png'

const Footer = () => {
    return(
        <footer class="p-4 bg-white md:p-8 lg:p-10 border-2 border-gray-200">
        <div class="mx-auto max-w-screen-xl text-center">
            <a href="#" class="flex justify-center items-center text-2xl font-semibold pb-8 text-gray-900 ">
                <Image class='w-max sm:h-24 h-20 p-2'src = {logo}/>
            </a>
            <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 ">
                <li>
                    <a href="#" class="mr-4 hover:underline md:mr-6 transition hover:text-orange-400">Home</a>
                </li>
                <li>
                    <a href="#upcoming" class="mr-4 hover:underline md:mr-6 transition hover:text-orange-400">Upcoming</a>
                </li>
                <li>
                    <a href="#gallery" class="mr-4 hover:underline md:mr-6 transition hover:text-orange-400">Gallery</a>
                </li>
                <li>
                    <a href="#get-started" class="mr-4 hover:underline md:mr-6 transition hover:text-orange-400">Buy Now</a>
                </li>
            </ul>
            <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" class="hover:underline">Sea Side Co.™</a>. All Rights Reserved.</span>
        </div>
    </footer>
    )
}

export default Footer