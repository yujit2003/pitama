"use client";
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const MyCart = () => {
    const [cartItems, setCartItems] = useState([]);
    const [mobile, setMobile] = useState('');

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart'));
        if (savedCart) {
            setCartItems(savedCart);
        }
    }, []);

    const whatsappMessage = () => {

        let url = `https://web.whatsapp.com/send?phone=8824270600`;
    
        const body = cartItems.map(item => `${item.name} - ${item.quantity} - $ ${item.price * item.cartQuantity} - Item Quantity : ${item.cartQuantity}`).join("\n");
    
        url += `&text=${encodeURI(body)}&app_absent=0`;
    
        // Open our newly created URL in a new tab to send the message
        window.open(url);
      }

    const mailto = () => {
      
        const email = "pitamafoods@gmail.com";
        const subject = "New Order";
        const body = `Mobile Number: ${mobile}\n\n` + 
        cartItems.map(item => `${item.name} - ${item.quantity} - $ ${item.price * item.cartQuantity} - Item Quantity : ${item.cartQuantity}`).join("\n");
      
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, 'emailWindow');
      };
      

    return (
        <>
        <h1 className="text-4xl font-bold flex justify-center items-center mt-4 mb-8 text-[#fcaf17] -tracking-tighter">My Cart.</h1>
        <div className='min-h-[50vh]'>

            {cartItems.length > 0 && (
                <div className="mt-4 justify-center items-center flex flex-col md:flex-row md:space-x-4">
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="border p-2 mb-2 rounded-md"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                    <div className="flex flex-col md:flex-row md:space-x-4">
                    <button
                        onClick={() => mailto()}
                        className="bg-green-500 text-white px-4 py-2 mb-2 rounded ml-4 mr-2"
                    >
                        Order via Email
                    </button>
                    <button
                  onClick={() => 
                    whatsappMessage()
                  }
                  className="bg-green-500 text-white mb-2 px-4 py-2 rounded"
                >
                  Order via WhatsApp
                </button>
                </div>
                </div>
            )}

            {cartItems.length > 0 ? (
                <ul className='flex justify-center items-center flex-wrap m-4'>
                    {cartItems.map((item, index) => (
                        <li
                            key={index}
                            className="border rounded-md p-4 m-2 flex flex-col items-center hover:bg-gray-100"
                        >
                            <Image
                                width={80}
                                height={80}
                                alt={`${item.name} Image`}
                                src={item.imageSrc}
                                className="w-full h-full object-cover mb-2"
                            />
                            <h3 className="text-sm font-semibold mb-2">{item.name}</h3>
                            <p className="text-xs md:text-sm">{item.quantity}</p>
                            <p className="text-xs"><b>Quantity -</b> {item.cartQuantity}</p>
                            <p className="text-xs"><b>$</b> {item.price}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <h1 className="text-xl  font-bold flex justify-center items-center mt-2 mb-8 text-[#fc3917] -tracking-tighter">Your Cart is Empty</h1>
            )}
        </div>
        </>
    );
};

export default MyCart;
