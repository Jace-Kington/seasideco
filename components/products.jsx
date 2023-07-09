import React from 'react'

const Products = () => {
    return(
        <div id="products">
            <div class='mx-auto px-4 max-w-screen-xl pb-12 pt-12'>
                <div>
                    <div  className='uppercase font-bold text-orange-400'>
                        Products
                    </div>
                    <div  className='text-5xl mb-12 font-bold text-customBlack'>
                        Colours, Prices and Sizes
                    </div>
                </div>

                <div class='grid sm:grid-cols-2 gap-10'>
                    <div class='shadow-lg rounded-3xl shadow-orange-400 p-5 flex items-center justify-between'>
                        <div>
                            <div class='text-2xl font-bold pb-5'>
                                Hoodies
                            </div>
                            <div class='text-orange-400'>
                                Colours: <span class='text-black'>Black, White, Blue</span>
                            </div>
                            <div class='text-orange-400'>
                                Sizes: <span class='text-black'>Large, XL, 2XL</span>
                            </div>
                        </div>
                        <div class='text-5xl'>
                            AU$<span class='text-orange-400'>35</span>
                        </div>
                    </div>
                    <div class='shadow-lg shadow-orange-400 rounded-3xl p-5 flex items-center justify-between'>
                        <div>
                            <div class='text-2xl font-bold pb-5'>
                                T-Shirts
                            </div>
                            <div class='text-orange-400'>
                                Colours: <span class='text-black font'>Black, White, Blue, Grey, Beige</span>
                            </div>
                            <div class='text-orange-400 '>
                                Sizes: <span class='text-black '>Small, Medium, Large, XL, 2XL</span>
                            </div>
                        </div>
                        <div class='text-5xl'>
                            AU$<span class='text-orange-400'>25</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products