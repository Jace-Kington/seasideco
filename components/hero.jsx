import React from 'react'
import Image from 'next/image'

import hero from '../assets/hero.jpeg'

const Hero = () => {
    return(
        <section class="bg-white sm:pt-44 pt-32">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">Embrace Coastal Style</h1>
            <p class="max-w-2xl mb-6 font-light text-orange-400 lg:mb-8 md:text-lg lg:text-xl ">Where Dreams Come to Life with Timeless Fashion, Effortless Elegance, and Endless Oceanic Inspiration, Creating a Seamlessly Stylish Journey from Shoreline to Sunset.</p>
            <a href="#get-started" class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-orange-400 text-white rounded-lg ">
                Get a Shirt
                <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>
        <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <div style={{borderRadius: '50%', height:'500px', width: '750px'}} className='overflow-hidden shadow-lg shadow-orange-400'>
            <Image  src = {hero} class="object-cover w-full h-full"/>

            </div>
        </div>                
    </div>
</section>
    )
}

export default Hero