"use client";
import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import logo from "../images/nav_logo.png";
import Image from "next/image";
import { CiShoppingCart } from "react-icons/ci";
import { CartContext } from "@/context/CartContext";

const Header = ({ page }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [mobile, setMobile] = useState("");
    const [isCartOpen, setIsCartOpen] = useState(false);
    const { cart, setCart, removeFromCart, whatsappMessage, mailto } = useContext(CartContext);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart"));
        if (savedCart) {
            setCart(savedCart);
        }
    }, [isCartOpen]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <nav className="bg-gray-100 p-0 m-0 md:px-56 pb-2 flex justify-center relative border-b-2 font-montserrat h-32">
            <div className="flex">
                <Image
                    src={logo}
                    width={250}
                    height={180}
                    alt="Policy"
                    className="object-contain md:mx-8 h-[15vh]"
                />
                <button
                    className="text-gray-700 md:hidden block ml-8 left-0"
                    type="button"
                    aria-label="Toggle navigation"
                    onClick={toggleDropdown}
                >
                    {/* Hamburger icon */}
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
            </div>

            {/* Desktop menu */}
            <div className="hidden md:flex">
                {[
                    { label: "Our Company", href: "/", key: "home" },
                    { label: "Our Products", href: "/products", key: "products" },
                    { label: "Contact Us", href: "/contact", key: "contact" },
                ].map(({ label, href, key }) => (
                    <div
                        key={key}
                        className={`hover:text-gray-800 flex items-center justify-center hover:border-t-2 hover:border-gray-400 transition-all h-full w-40 ${
                            page === key ? "border-gray-400 border-t-2 text-gray-800" : "text-gray-600"
                        }`}
                    >
                        <Link className="text-lg font-medium" href={href}>
                            {label}
                        </Link>
                    </div>
                ))}
                <div
                    className={`hover:text-gray-800 flex items-center justify-center hover:border-t-2 hover:border-gray-400 transition-all h-full w-40 ${
                        page === "cart" ? "border-gray-400 border-t-2 text-gray-800" : "text-gray-600"
                    }`}
                >
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="text-lg flex justify-center items-center font-medium"
                    >
                        My Cart <div className="mx-2"> <CiShoppingCart /></div>
                    </button>
                </div>
            </div>

            {/* Dropdown menu with glassmorphism */}
            {isDropdownOpen && (
                <div className="z-50 absolute top-full left-0 w-full bg-gray-100 bg-opacity-90 backdrop-blur-lg rounded-lg md:hidden p-4 shadow-lg">
                    {[
                        { label: "Our Company", href: "/", key: "home" },
                        { label: "Our Products", href: "/products", key: "products" },
                        { label: "Contact Us", href: "/contact", key: "contact" },
                    ].map(({ label, href, key }) => (
                        <Link
                            key={key}
                            className={`block px-4 py-2 text-lg font-medium ${
                                page === key ? "text-gray-800" : "text-gray-600"
                            }`}
                            href={href}
                        >
                            {label}
                        </Link>
                    ))}
                    <button className="block px-4 py-2 text-lg font-medium text-gray-600">
                        <button
                            className="flex items-center"
                            onClick={() => setIsCartOpen(true)}
                        >
                            My Cart <div className="mx-2"><CiShoppingCart /></div>
                        </button>
                    </button>
                </div>
            )}
            <div
                className={`fixed top-0 right-0 h-full ${
                    isCartOpen ? "translate-x-0" : "translate-x-full"
                } bg-white shadow-lg transform transition-transform duration-300 z-50 md:w-[20%] w-full`}
            >
                <button
                    onClick={() => setIsCartOpen(false)}
                    className="absolute top-2 right-2 text-2xl font-bold text-gray-500 hover:text-gray-700"
                >
                    ✕
                </button>
                <h1 className="text-2xl font-bold flex justify-center items-center mt-4 mb-4 text-gray-800">
                    My Cart
                </h1>
                <div className="h-[calc(100%-80px)] overflow-y-auto p-4">
                    {cart.length > 0 && (
                        <div className="flex flex-col space-y-4">
                            <input
                                type="text"
                                placeholder="Mobile Number"
                                className="border p-2 rounded-md"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                            <div className="flex space-x-4">
                                <button
                                    onClick={mailto}
                                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                                >
                                    Order via Email
                                </button>
                                <button
                                    onClick={whatsappMessage}
                                    className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700 transition"
                                >
                                    Order via WhatsApp
                                </button>
                            </div>
                        </div>
                    )}

                    {cart.length > 0 ? (
                        <ul className="mt-4 space-y-4">
                            {cart.map((item, index) => (
                                <li
                                    key={index}
                                    className="border rounded-md p-4 flex items-center justify-between hover:bg-gray-200 transition"
                                >
                                    <div className="flex items-center space-x-4">
                                        <Image
                                            width={50}
                                            height={50}
                                            alt={`${item.name} Image`}
                                            src={item.imageSrc}
                                            className="w-12 h-12 object-cover"
                                        />
                                        <div>
                                            <h3 className="text-sm font-semibold">{item.name}</h3>
                                            <p className="text-xs">{item.quantity}</p>
                                            <p className="text-xs">
                                                <b>Quantity:</b> {item.cartQuantity}
                                            </p>
                                            <p className="text-xs">
                                                <b>$</b> {item.price}
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item)}
                                            className="text-red-500 hover:text-red-700 transition"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <h1 className="text-center font-bold text-red-500 mt-8">
                            Your Cart is Empty
                        </h1>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Header;
