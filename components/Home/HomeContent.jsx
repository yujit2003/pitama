import React from 'react';

const HomeContent = () => {
    return (
        <div className="box-border md:mt-20 mt-6">
            <div className="wpb_wrapper">
                <div id="padding-10" className="mk-padding-divider hidden sm:block clearfix"></div>
                <div >
                    <div id="text-block-11 " className="mk-text-block text-center mb-0  mx-2 md:mx-[30vw] ">
                        <h1 className="text-4xl font-bold mb-8 text-[#fcaf17] -tracking-tighter">Pitama Foods</h1>
                        <p className="">Pitama Foods is a premier provider of high-quality food products, specializing in a diverse range of offerings including rice, pulses, grains, spices, sauces and condiments, beverages, cooking essentials, and frozen items. Our commitment to excellence ensures that we deliver top-notch products that meet the highest standards of quality and freshness.</p>
                        <p className=" pt-6">We pride ourselves on our extensive selection, catering to the needs of both retail and wholesale clients. Our dedication to customer satisfaction and product integrity is reflected in our rigorous quality control processes and our focus on food safety. At Pitama Foods, we are committed to delivering exceptional products that enhance the culinary experience of our customers while maintaining competitive pricing.</p>
                    <div id="text-block-12" className="mk-text-block flip-x mt-8">
                        <h1 className="text-3xl font-pacifico text-red-500 font-bold">Elevating Every Meal with Quality You Can Trust.</h1>
                    </div>
                    <a href="/products">
                    <button className="border mt-6 border-red-700 text-red-700 hover:bg-red-700 hover:text-white transition-all duration-300 py-2 px-4 justify-center items center">Browse Products</button>
                    </a>

                    </div>
                <div >
                </div>
                </div>
            </div>
        </div>
    );
};

export default HomeContent;
