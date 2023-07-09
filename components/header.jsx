import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

import logo from '../assets/logo.png'

const Header = () => {
    return(
        <header className='fixed w-screen z-50'>
            <Head>
        <title>Sea Side Co.</title>
        <meta name="description" content="Clothing Brand" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    <nav class="bg-white px-4 lg:px-6 py-2.5 shadow-lg">
        <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <a href="#">
                <Image src = {logo} class="h-14 w-max p-3 sm:h-24 sm:p-5"/>
            </a>
            <div class="flex items-center lg:order-2">
                <a href="#get-started" class="bg-orange-400 text-white   font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 ">Buy Now</a>
                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden hover:text-white hover:bg-orange-400 " aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="#products" class="block py-2 pr-4 pl-3 text-black hover:text-orange-400 transition ease-in">Products</a>
                    </li>
                    <li>
                        <a href="#upcoming" class="block py-2 pr-4 pl-3 text-black hover:text-orange-400 transition ease-in">Upcoming</a>
                    </li>
                    <li>
                        <a href="#gallery" class="block py-2 pr-4 pl-3 text-black hover:text-orange-400 transition ease-in">Gallery</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.6/flowbite.min.js"></script>

</header>
    )
}

export default Header