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

    const mailto = () => {
        if (!mobile || mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
          alert("Please enter a valid 10-digit mobile number before placing the order.");
          return;
        }
      
        const email = "pitamafoods@gmail.com";
        const subject = "New Order";
        const body = `Mobile Number: ${mobile}\n\n` + 
        cartItems.map(item => `${item.name} - ${item.quantity} - Rs. ${item.price * item.cartQuantity} - Item Quantity : ${item.cartQuantity}`).join("\n");
      
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(mailtoLink, 'emailWindow');
      };
      

    return (
        <>
        <h1 className="text-4xl font-bold flex justify-center items-center mt-4 mb-8 text-[#fcaf17] -tracking-tighter">My Cart.</h1>
        <div className='min-h-[50vh]'>

            {cartItems.length > 0 && (
                <div className="mt-4 flex justify-center items-center">
                    <input
                        type="text"
                        placeholder="Mobile Number"
                        className="border p-2 rounded-md"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                        required
                    />
                    <button
                        onClick={() => {
                            if (mobile.length === 10 && /^\d+$/.test(mobile)) {
                              mailto();
                            } else {
                              alert('Please enter a valid 10-digit mobile number.');
                            }
                          }}
                        className="bg-green-500 text-white px-4 py-2 rounded ml-4"
                    >
                        Place Order
                    </button>
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
                            <p className="text-xs"><b>Quantity -</b> {item.quantity}</p>
                            <p className="text-xs"><b>Rs.</b> {item.price}</p>
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