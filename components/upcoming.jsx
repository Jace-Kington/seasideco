'use client';

import React from 'react'
import Image from 'next/image'
import { useSnapCarousel } from 'react-snap-carousel'
import Link from 'next/link'
import Script from 'next/script'

import upcoming1 from '../assets/upcoming1.jpeg'
import upcoming2 from '../assets/upcoming2.jpeg'
import upcoming3 from '../assets/upcoming3.jpeg'
import upcoming4 from '../assets/upcoming4.jpeg'
import upcoming5 from '../assets/upcoming5.jpeg'

const Upcoming = () => {

    const { scrollRef, pages, activePageIndex, next, prev, goTo } =
    useSnapCarousel();

    const images = [upcoming1, upcoming2, upcoming3, upcoming4, upcoming5]
    return(
        <div id="upcoming" className=''>
            <div className = 'pb-12 px-4 max-w-screen-xl mx-auto pt-12'>
                <div>
                    <div  className='uppercase font-bold text-orange-400'>
                        Upcoming
                    </div>
                    <div  className='text-5xl mb-12 font-bold text-customBlack'>
                        Get a Sneak Peek
                    </div>
                </div>
                <ul
        ref={scrollRef}
        style={{
          display: 'flex',
          overflow: 'auto',
          gap:'2.4rem',

          scrollSnapType: 'x mandatory'
        }}
        className='relative '
      >
        {Array.from({ length: images.length }).map((_, i) => (
          <li
          style={{
            flexShrink: 0,
            color: '#fff',
            width:'400px'

          }}
          key={i}
          className='z-10 bg-white p-6 rounded-xl shadow-xl mb-12 '
        >
         <Image src={images[i]} className='' alt="Gallery image"/>
        </li>
        ))}
      </ul>
      
      <ol className='px-32 flex items-center justify-center sm:gap-20 gap-10 pt-4 text-xl text-customBlack'>
        {pages.map((_, i) => (
          <li key={i} className='text-center'>
            <button className='text-center'
              style={i === activePageIndex ? { color: '#fff', background: '#fb923c', borderRadius: '9999px', padding: '10px', paddingLeft: '20px', paddingRight: '20px'} : {}}
              onClick={() => goTo(i)}
            >
              {i + 1}
            </button>
          </li>
        ))}
      </ol>
            </div>
        </div>
    )
}

export default Upcoming