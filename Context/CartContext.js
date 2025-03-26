"use client";
import React, { createContext, useState, useEffect } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [popupMessage, setPopupMessage] = useState("");

  // Trigger a popup for notifications
  const triggerPopup = (message) => {
    Swal.fire({
      //   icon: "success", // Icon type: success, error, warning, info, or question
      title: "Notification",
      text: message,
      //   showConfirmButton: false,
      timer: 1000,
      //   background: "#f9f9f9", // Optional: Custom background color
      //   timerProgressBar: true,
    });
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(savedCart);
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(
        (cartItem) => cartItem.name === product.name
      );

      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingProductIndex) {
            return { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 };
          }
          return cartItem;
        });
        // triggerPopup("Quantity increased for this item!");
        return updatedCart;
      } else {
        // triggerPopup("Item added to the cart!");
        return [...prevCart, { ...product, cartQuantity: 1 }];
      }
    });
  };

  // Remove product from cart
  const removeFromCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (cartItem) => cartItem.name !== product.name
      );
    //   triggerPopup("Item removed from the cart!");
      return updatedCart;
    });
  };

  // Increase quantity of product in cart
  const increaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.name === product.name
          ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 }
          : cartItem
      )
    );
    // triggerPopup("Quantity increased for this item!");
  };

  // Decrease quantity of product in cart
  const decreaseQuantity = (product) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.name === product.name
            ? {
                ...cartItem,
                cartQuantity: Math.max(cartItem.cartQuantity - 1, 0),
              }
            : cartItem
        )
        .filter((cartItem) => cartItem.cartQuantity > 0)
    );
    // triggerPopup("Quantity decreased for this item!");
  };

  // Send cart details via WhatsApp
  const whatsappMessage = (mobile) => {
    const phoneNumber = "+12893807130"; // Replace with the actual number
    const body = cart
      .map(
        (item) =>
          `${item.name} - ${item.quantity} - $${
            item.price * item.cartQuantity
          } - Quantity: ${item.cartQuantity}`
      )
      .join("\n");

    const encodedBody = encodeURIComponent(
      `Order Details:\n${body}\n\nMobile: ${mobile}`
    );
    const isMobile =
      /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    const url = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodedBody}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedBody}`;
    window.open(url, "_blank");
  };

  // Send cart details via email
  const mailto = (mobile) => {
    const email = "pitamafoods@gmail.com";
    const subject = "New Order";
    const body =
      `Mobile Number: ${mobile}\n\n` +
      cart
        .map(
          (item) =>
            `${item.name} - ${item.quantity} - $${
              item.price * item.cartQuantity
            } - Quantity: ${item.cartQuantity}`
        )
        .join("\n");

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, "_blank");
  };

  // Clear the cart
  const clearCart = () => {
    setCart([]);
    triggerPopup("Cart cleared!");
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        whatsappMessage,
        mailto,
        popupMessage,
        setPopupMessage,
        triggerPopup,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
