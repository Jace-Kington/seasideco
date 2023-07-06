import React from 'react'
import Image from 'next/image'

import gallery1 from '../assets/gallery1.jpeg'
import gallery2 from '../assets/gallery2.jpeg'
import gallery3 from '../assets/gallery3.jpeg'
import gallery4 from '../assets/gallery4.jpeg'
import gallery5 from '../assets/gallery5.jpeg'

const Gallery = () => {
    return(
        <div id='gallery'>
            <div class='pb-12 px-4 max-w-screen-xl mx-auto pt-12 overflow-hidden'>
                <div  className='uppercase font-bold text-orange-400'>
                    Gallery
                </div>
                <div  className='text-5xl mb-12 font-bold text-customBlack'>
                    What We Have to Offer
                </div>
                <div class='grid grid-cols-3 rounded-t-2xl overflow-hidden '>
                    <div class='overflow-hidden'>
                        <Image class='overflow-hidden hover:scale-125 transition'src={gallery1}/>
                    </div>

                    <div class='overflow-hidden'>
                        <Image class='overflow-hidden hover:scale-125 transition' src={gallery2}/>
                    </div>
                    
                    <div class='overflow-hidden'>
                        <Image class='overflow-hidden hover:scale-125 transition' src={gallery3}/>
                    </div>
                </div>
                <div class='grid grid-cols-2 rounded-b-2xl overflow-hidden'>
                    <div class='overflow-hidden'>
                        <Image class='overflow-hidden hover:scale-125 transition' src={gallery4}/>
                    </div>

                    <div class='overflow-hidden'>
                        <Image class='overflow-hidden hover:scale-125 transition' src={gallery5}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gallery