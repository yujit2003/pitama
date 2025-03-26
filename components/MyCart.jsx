"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

const MyCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [mobile, setMobile] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false); // State to toggle cart visibility

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    if (savedCart) {
      setCartItems(savedCart);
    }
  }, []);

  const whatsappMessage = () => {
    const phoneNumber = "+12893807130"; // Use the international format
    const body = cartItems
      .map(
        (item) =>
          `${item.name} - ${item.quantity} - $${item.price * item.cartQuantity} - Item Quantity: ${item.cartQuantity}`
      )
      .join("\n");

    const encodedBody = encodeURIComponent(body);
    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedBody}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedBody}`;
    window.open(url, "_blank");
  };

  const mailto = () => {
    const email = "pitamafoods@gmail.com";
    const subject = "New Order";
    const body =
      `Mobile Number: ${mobile}\n\n` +
      cartItems
        .map(
          (item) =>
            `${item.name} - ${item.quantity} - $ ${
              item.price * item.cartQuantity
            } - Item Quantity : ${item.cartQuantity}`
        )
        .join("\n");

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "emailWindow");
  };

  return (
    <>
      {/* <button
        onClick={() => setIsCartOpen(true)}
        className="fixed top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded shadow-lg"
      >
        Open Cart
      </button> */}

      {/* Cart Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[20%] bg-white shadow-lg transform ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-50`}
      >
        <button
          onClick={() => setIsCartOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h1 className="text-2xl font-bold flex justify-center items-center mt-4 mb-4 text-[#fcaf17]">
          My Cart
        </h1>
        <div className="h-[calc(100%-80px)] overflow-y-auto p-4">
          {cartItems.length > 0 && (
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
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Order via Email
                </button>
                <button
                  onClick={whatsappMessage}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          )}

          {cartItems.length > 0 ? (
            <ul className="mt-4 space-y-4">
              {cartItems.map((item, index) => (
                <li
                  key={index}
                  className="border rounded-md p-4 flex items-center justify-between hover:bg-gray-100"
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
    </>
  );
};

export default MyCart;
