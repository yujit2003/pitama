"use client";
import React, { Fragment, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';


const data = {
  "Rice": [
    { name: "Rani Mahal Basmati Rice", quantity: "40lB", price: 51, imageSrc: "/Rani Mahal Basmati Rice.jpg" },
    { name: "Punjabi Tadka Basmati Rice", quantity: "40lB", price: 45, imageSrc: "/Punjabi Tadka Basmati Rice.jpg" },
    { name: "TIRUPATI IDLY RICE", quantity: "20KG BAG", price: 54, imageSrc: "/TIRUPATI IDLY RICE.jpg" },
    { name: "SONA MASOORI RICE", quantity: "20 lb bag", price: 25, imageSrc: "/SONA MASOORI RICE.jpg" },
    { name: "PONNI BOILED RICE", quantity: "20KG BAG", price: 45, imageSrc: "/PONNI BOILED RICE.jpg" },
    { name: "JEERAKASALA RICE", quantity: "20kg bag", price: 110, imageSrc: "/JEERAKASALA RICE.webp" },
    { name: "ROYAL KERALA Matta Rice long grain", quantity: "20kg bag", price: 37, imageSrc: "/ROYAL KERALA Matta Rice long grain.webp" },
    { name: "Tirupati Ponni Boiled Rice", quantity: "10lb*4", price: 40, imageSrc: "/Tirupati Ponni Boiled Rice.jpg" },
    { name: "Tirupati Idaly Rice", quantity: "10 lb*4", price: 44, imageSrc: "/Tirupati Idaly Rice.webp" },
    { name: "Tirupati Matta Rice", quantity: "10 lb*4", price: 40, imageSrc: "/Tirupati Matta Rice.jpg" }
  ],
  "Pulses & Grains": [
    { name: "Moong Dal Washed", quantity: "55lb", price: 65, imageSrc: "/Moong Dal Washed.webp" },
    { name: "TIRUPATI URAD GOTA", quantity: "20KG BAG", price: 60, imageSrc: "/TIRUPATI URAD GOTA.jpg" },
    { name: "URAD GOTA", quantity: "55lb", price: 75, imageSrc: "/URAD GOTA.webp" },
    { name: "Tirupati Dalia Split (Roasted Gram)", quantity: "20KG BAG", price: 70, imageSrc: "/Tirupati Dalia Split.jpg" },
    { name: "TIRUPATI WHITE RICE FLOUR", quantity: "20KG BAG", price: 37, imageSrc: "/TIRUPATI WHITE RICE FLOUR.jpg" },
    { name: "TIRUPATI Sabudana", quantity: "2LB", price: 4, imageSrc: "/TIRUPATI Sabudana.webp" },
    { name: "TIRUPATI Urad Gota White", quantity: "20KG BAG", price: 60, imageSrc: "/TIRUPATI Urid Gota White.webp" },
    { name: "TIRUPATI Roasted Gram Split", quantity: "20KG BAG", price: 70, imageSrc: "/TIRUPATI Roasted Gram Split.webp" },
    { name: "ROYAL KERALA White Rice Flour", quantity: "4LB*10", price: 35, imageSrc: "/ROYAL KERALA White Rice Flour.webp" },
    { name: "TIRUPATI White Rice Flour", quantity: "20KG BAG", price: 36, imageSrc: "/TIRUPATI WHITE RICE FLOUR.jpg" }
  ],
  "Spices": [
    { name: "TIRUPATI TURMERIC POWDER Type-1", quantity: "5LB X 8", price: 10.5, imageSrc: "/TIRUPATI TURMERIC POWDER.webp" },
    { name: "TIRUPATI TURMERIC POWDER Type-2", quantity: "20 Kg Bag", price: 72, imageSrc: "/TIRUPATI TURMERIC POWDER.webp" },
    { name: "TIRUPATI WHOLE DRY CHILLI (STEMLESS) Type-1", quantity: "5LB X 4", price: 24.5, imageSrc: "/TIRUPATI WHOLE DRY CHILLI (STEMLESS).jpg" },
    { name: "TIRUPATI WHOLE DRY CHILLI (STEMLESS) Type-2", quantity: "10KG BOX", price: 92, imageSrc: "/TIRUPATI WHOLE DRY CHILLI (STEMLESS).jpg" },
    { name: "TIRUPATI CORIANDER SEED Type-1", quantity: "400G", price: 2, imageSrc: "/TIRUPATI CORIANDER SEED.webp" },
    { name: "TIRUPATI CORIANDER SEED Type-2", quantity: "20KG", price: 66, imageSrc: "/TIRUPATI CORIANDER SEED.webp" },
    { name: "TIRUPATI CORIANDER POWDER", quantity: "10LB X 4", price: 22, imageSrc: "/TIRUPATI CORIANDER POWDER.jpg" },
    { name: "TIRUPATI FENNEL Type-1", quantity: "25KG BAG", price: 260, imageSrc: "/TIRUPATI FENNEL.webp" },
    { name: "TIRUPATI FENNEL Type-2", quantity: "10LB", price: 48.5, imageSrc: "/TIRUPATI FENNEL.webp" },
    { name: "TIRUPATI Hot Chilli Powder", quantity: "10lb", price: 40, imageSrc: "/TIRUPATI Hot Chilli Powder.jpg" },
    { name: "TIRUPATI Extra Hot Chilli Powder", quantity: "10lb", price: 40, imageSrc: "/TIRUPATI Hot Chilli Powder.jpg" },
    { name: "TIRUPATI Crushed Chilli", quantity: "10lb", price: 45, imageSrc: "/TIRUPATI Crushed Chilli.webp" },
    { name: "TIRUPATI Kashmiri Chilli Powder", quantity: "10lb", price: 48, imageSrc: "/TIRUPATI Kashmiri Chilli Powder.webp" },
    { name: "TIRUPATI Cumin Type-1", quantity: "10 lb", price: 65, imageSrc: "/TIRUPATI Cumin.jpg" },
    { name: "TIRUPATI Cumin Type-2", quantity: "25KG BAG", price: 340, imageSrc: "/TIRUPATI Cumin.jpg" },
    { name: "MDH Degi Mirch", quantity: "500g x 24", price: 250, imageSrc: "/MDH Degi Mirch.jpg" },
    { name: "MDH Kitchen King", quantity: "500g x 24", price: 208, imageSrc: "/MDH Kitchen King.jpg" },
    { name: "Black Stone Flower", quantity: "1 lb", price: 14, imageSrc: "/Black Stone Flower.webp" },
    { name: "Kasuri Methi", quantity: "1 kg", price: 16, imageSrc: "/Kasuri Methi.jpg" },
    { name: "Ajwain", quantity: "5lb", price: 16.5, imageSrc: "/Ajwain.png" },
    { name: "Black Pepper Whole (Indian)", quantity: "5lb", price: 27.5, imageSrc: "/Black Pepper Whole.jpg" },
    { name: "Black Cardamom", quantity: "5lb", price: 49.5, imageSrc: "/Black Cardamom.jpg" },
    { name: "Shah Jeera", quantity: "5lb", price: 45, imageSrc: "/Shah Jeera.webp" },
    { name: "Cloves", quantity: "5lb", price: 54, imageSrc: "/Cloves.webp" },
    { name: "Green Cardamom", quantity: "10LB", price: 200, imageSrc: "/Green Cardamom.jpg" },
    { name: "Mace", quantity: "1 lb", price: 31, imageSrc: "/Mace.webp" },
    { name: "LG Asaefaetida powder", quantity: "10x 100g", price: 30, imageSrc: "/LG Asaefaetida powder.jpg" }
  ],
  "Sauces & Condiments": [
    { name: "CHILLI GARLIC SAUCE", quantity: "3 x 3.78 ltr", price: 80, imageSrc: "/CHILLI GARLIC SAUCE.jpg" },
    { name: "SAMBAL OELEK", quantity: "3 x 3.78 ltr", price: 75, imageSrc: "/Sambal Oelek.webp" },
    { name: "SIRIRACHA HUYFONG", quantity: "12 bottles", price: 80, imageSrc: "/Siriracha HUYFONG.jpg" },
    { name: "CHINGS Schezwaun Sauce", quantity: "1 kg x 12", price: 85, imageSrc: "/CHINGS Schezwaun Sauce.jpg" },
    { name: "CHINGS Veg Hakka Noodles", quantity: "15 x 600 g", price: 55, imageSrc: "/CHINGS Veg Hakka Noodles.webp" },
    { name: "Heinz Tomato Ketchup", quantity: "6 x 2.78 Ltr", price: 57, imageSrc: "/Heinz Tomato Ketchup.jpg" }
  ],
  "Beverages": [
    { name: "Bru Coffee", quantity: "200g", price: 5.5, imageSrc: "/Bru Coffee.jpg" }
  ],
  "Cooking Essentials": [
    { name: "Blanched Peanut", quantity: "50 LB", price: 120, imageSrc: "/Blanched Peanut.jpg" },
    { name: "Jaggery Bulk", quantity: "1 kg x 12", price: 55, imageSrc: "/Jaggery Bulk.webp" },
    { name: "Idli Rava", quantity: "4lb x 10", price: 50, imageSrc: "/Idli Rava.webp" },
    { name: "White Rice flour", quantity: "4lb x 10", price: 43, imageSrc: "/White Rice flour.jpg" },
    { name: "Ajinomoto Japani", quantity: "50 LB", price: 120, imageSrc: "/Ajinomoto Japani.webp" },
    { name: "Mustard Oil", quantity: "5 Ltr", price: 24, imageSrc: "/Mustard Oil.jpg" },
    { name: "Corn Starch", quantity: "50lb", price: 68, imageSrc: "/Corn Starch.png" },
    { name: "PINNACLE Baking Powder", quantity: "5kg", price: 48.5, imageSrc: "/PINNACLE Baking Powder.webp" }
  ],
  "Frozen Items": [
    { name: "Green Peas", quantity: "2 kg x 6", price: 35, imageSrc: "/Green Peas.jpg" },
    { name: "Mix Vegetable", quantity: "2 kg x 6", price: 35, imageSrc: "/Mix Vegetable.webp" },
    { name: "Garlic Indian", quantity: "1 kg x 8", price: 32, imageSrc: "/Garlic Indian.webp" },
    { name: "Green Chilli Stemless", quantity: "1 kg x 10", price: 50, imageSrc: "/Green Chilli Stemless.jpg" },
    { name: "Grated Coconut", quantity: "1 lb x 24", price: 40, imageSrc: "/Grated Coconut.webp" },
    { name: "Punjabi Samosa", quantity: "100g x 100pc", price: 65, imageSrc: "/Punjabi Samosa.jpg" },
    { name: "Farali Patties", quantity: "6Kg", price: 65, imageSrc: "/Farali Patties.jpg" },
    { name: "Sabudana Tikki", quantity: "144 Pc", price: 62, imageSrc: "/Sabudana Tikki.jpg" },
    { name: "Patra Cut", quantity: "10Kg", price: 90, imageSrc: "/Patra Cut.jpg" }
  ]
};


const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Rice");
  const [cart, setCart] = useState([]);

  const categories = Object.keys(data);

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.name !== item.name));
  }

  const handleCategoryClick = (category) => {
    console.log("Clicked category:", category);
    setSelectedCategory(category);
  };

  const mailto = () => {
    const email = "pitamafoods@gmail.com";
    const subject = "New Order";
    const body = cart.map(item => `${item.name} - ${item.quantity} - Rs. ${item.price * item.cartQuantity} - Item Quantity : ${item.cartQuantity}`).join("\n");

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, 'emailWindow');
  };

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProductIndex = prevCart.findIndex(cartItem => cartItem.name === product.name);

      if (existingProductIndex !== -1) {
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingProductIndex) {
            return { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 };
          }
          return cartItem;
        });
        return updatedCart;
      } else {
        return [...prevCart, { ...product, cartQuantity: 1 }];
      }
    });
  };

  return (
    <div className="min-h-screen py-10">
      <div className="">
        <section className="md:hidden block mb-6 mx-4">
          <h2 className="text-xl font-bold mb-4 flex justify-center items-center">My Cart <div className="px-4"><CiShoppingCart /></div></h2>
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="border rounded-md p-2 flex items-center justify-between hover:bg-gray-100"
              >
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-red-500 mr-2"
                  >
                    Remove
                  </button>

                  <div>
                    <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
                    <p className="text-xs md:text-sm">{item.quantity}</p>
                    <p className="text-xs md:text-sm">Rs. {item.price}</p>
                    <p className="text-xs md:text-sm">Quantity: {item.cartQuantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {cart.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setCart([])}
                className="bg-red-500 text-white px-2 py-1 rounded mx-2"
              >
                Clear Cart
              </button>
              <button
                onClick={() => mailto()}
                className="bg-green-500 text-white px-2 py-1 rounded mb-2"
              >
                Place Order
              </button>
            </div>
          )}
        </section>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
        <aside className="md:col-span-3 ml-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`cursor-pointer ${selectedCategory === category ? 'font-semibold' : ''}`}
              >
                {category}
                <hr />
              </li>
            ))}
          </ul>
        </aside>

        <section className="md:col-span-6 mx-2">
          <h2 className="text-xl font-bold mb-4 flex justify-center items-center">{selectedCategory}</h2>
          <ul className="space-y-2">
            {data[selectedCategory].map((product) => (
              <li
                key={product.name}
                className="border rounded-md p-2 flex flex-col md:flex-row justify-between items-center hover:bg-gray-100"
              >
                <div className="mb-2 md:mb-0">
                  <h3 className="text-sm md:text-base font-semibold mb-3">{product.name}</h3>
                  <p className="text-xs md:text-sm"><b>Quantity -</b> {product.quantity}</p>
                  <p className="text-xs md:text-sm"><b>Rs.</b> {product.price}</p>
                </div>
                <div className="flex flex-col items-center">
                  <Image
                    width={100}
                    height={15}
                    alt={`${product.name} Image`}
                    src={product.imageSrc}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 hover:bg-blue-700 text-white px-2 md:text-base text-xs py-1 rounded mt-2"
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="md:col-span-3 hidden md:block">
          <h2 className="text-xl font-bold mb-4 flex justify-center items-center">My Cart <div className="px-4"><CiShoppingCart /></div></h2>
          {cart.length > 0 && (
            <div className="mt-4">
              <button
                onClick={() => setCart([])}
                className="bg-red-500 text-white px-2 py-1 rounded mr-2"
              >
                Clear Cart
              </button>
              <button
                onClick={() => mailto()}
                className="bg-green-500 text-white px-2 py-1 rounded mb-2"
              >
                Place Order
              </button>
            </div>
          )}
          <ul className="space-y-2">
            {cart.map((item, index) => (
              <li
                key={index}
                className="border rounded-md p-2 flex items-center justify-between hover:bg-gray-100 mr-2"
              >
                <div className="flex items-center">
                  <button
                    onClick={() => removeFromCart(item)}
                    className="text-red-500 mr-2"
                  >
                    Remove
                  </button>
                  <div className="">
                    <h3 className="text-sm md:text-base font-semibold">{item.name}</h3>
                    <p className="text-xs md:text-sm">{item.quantity}</p>
                    <p className="text-xs md:text-sm">Rs. {item.price}</p>
                    <p className="text-xs md:text-sm">Quantity: {item.cartQuantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
