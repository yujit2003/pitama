"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import logo from "../images/nav_logo.png";
import Image from 'next/image';
import { CiShoppingCart } from "react-icons/ci";

const Header = ({ page }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCartItems(savedCart);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-white p-0 m-0 md:px-56 pb-2 flex justify-center relative border-b-2 font-montserrat h-32">
            <div className="flex">
                <Image
                    src={logo}
                    width={200}
                    height={200}
                    alt="Policy"
                    className="object-contain md:mx-8"
                />
                <button
                    className="text-gray-700 md:hidden block ml-8 left-0"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={toggleDropdown}
                >
                    {/* Hamburger icon */}
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex">
                <div className={`hover:text-[#6bb545] flex items-center ${page === 'home' && 'border-[#6bb545] border-t-2'} justify-center hover:border-t-2 hover:border-[#6bb545] transition-all h-full w-40 ${page === 'company' ? 'border-[#6bb545]' : ''}`}>
                    <Link className={`text-lg font-medium -tracking-tighter  ${page === 'home' ? 'text-[#6bb545]' : 'text-gray-900'}`} href="/">Our Company</Link>
                </div>
                <div className={`hover:text-[#6bb545] flex items-center ${page === 'products' && 'border-[#6bb545] border-t-2'}  justify-center hover:border-t-2 hover:border-[#6bb545] transition-all h-full w-40 ${page === 'products' ? 'border-[#6bb545]' : ''}`}>
                    <Link className={`text-lg font-medium -tracking-tighter ${page === 'products' ? 'text-[#6bb545]' : 'text-gray-900'}`} href="/products">Our Products</Link>
                </div>
                <div className={`hover:text-[#6bb545] -tracking-tighter flex items-center justify-center ${page === 'contact' && 'border-[#6bb545] border-t-2'}  hover:border-t-2 hover:border-[#6bb545] transition-all h-full w-40 ${page === 'contact' ? 'border-[#6bb545]' : ''}`}>
                    <Link className={`text-lg font-medium ${page === 'contact' ? 'text-[#6bb545]' : 'text-gray-900'}`} href="/contact">Contact Us</Link>
                </div>
                <div className={`hover:text-[#6bb545] -tracking-tighter flex items-center justify-center ${page === 'cart' && 'border-[#6bb545] border-t-2'}  hover:border-t-2 hover:border-[#6bb545] transition-all h-full w-40 ${page === 'cart' ? 'border-[#6bb545]' : ''}`}>
                    <Link href={{
                        pathname: "/cart",
                        query: { cartItems: JSON.stringify(cartItems) }
                    }} className={`text-lg flex justify-center items-center font-medium ${page === 'cart' ? 'text-[#6bb545]' : 'text-gray-900'}`}>
                        My Cart <div className='mx-2'> <CiShoppingCart /></div>
                    </Link>
                </div>
            </div>

            {/* Dropdown menu with glassmorphism */}
            {isDropdownOpen && (
                <div className="z-50 absolute top-full left-0 w-full bg-white bg-opacity-30 backdrop-blur-lg rounded-lg md:hidden p-4 shadow-lg">
                    <Link className={`block px-4 py-2 text-lg font-medium ${page === 'home' ? 'text-[#6bb545]' : 'text-gray-900'}`} href="/">Our Company</Link>
                    <Link className={`block px-4 py-2 text-lg font-medium ${page === 'products' ? 'text-[#6bb545]' : 'text-gray-900'}`} href="/products">Our Products</Link>
                    <Link className={`block px-4 py-2 text-lg font-medium ${page === 'contact' ? 'text-[#6bb545]' : 'text-gray-900'}`} href="/contact">Contact Us</Link>
                    <Link href={{
                        pathname: "/cart",
                        query: { cartItems: JSON.stringify(cartItems) }
                    }} className={`block px-4 py-2 text-lg font-medium ${page === 'cart' ? 'text-[#6bb545]' : 'text-gray-900'}`}>
                        <div className='flex items-center'> My Cart <div className='mx-2'><CiShoppingCart /></div></div>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Header;
