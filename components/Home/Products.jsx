import React from 'react'
import scrollHome from "../../images/product1.jpg";
import Image from 'next/image';

const Products = () => {
    return (
        <div className="box-border md:mt-20 mt-6 mx-52">
            <div className="wpb_wrapper">
                <div id="padding-10" className="mk-padding-divider hidden sm:block clearfix"></div>
                {/* <div className='grid grid-cols-1 md:grid-cols-2'> */}
                <div className='flex justify-center items-center'>
                    <div className='h-auto m-6'>
                        <h1 className="flex justify-center items-center text-[26px] text-[#b1cc39] font-medium normal-case">Produce</h1>
                        <Image
                        width={500}
                        height={1000}
                        alt="Policy"
                        src={scrollHome}
                        className="object-cover"
                        />
                        <div className="flex justify-center items-center">

                        <button className="border mt-6 border-red-700 text-red-500 hover:bg-red-700 hover:text-white transition-all duration-300 py-2 px-4 justify-center items center">Browse Products</button>
                        </div>
                    </div>
                    {/* <div className='h-auto m-6 '>
                        <h1 className="flex justify-center items-center text-[26px] text-[#b1cc39] font-medium normal-case">Produce</h1>
                        <Image
                        width={1000}
                        height={1000}
                        alt="Policy"
                        src={scrollHome}
                        className="object-cover"
                        />
                        <div className="flex justify-center items-center">
<a href="/products">
                        <button className="border mt-6 border-red-700 text-red-500 hover:bg-red-700 hover:text-white transition-all duration-300 py-2 px-4 justify-center items center">Browse Products</button>
</a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Products
