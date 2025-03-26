"use client";
import React, { Fragment, useState, useEffect, useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';
import { CartContext } from "../../context/CartContext.js";


const data = {
  "Rice": [
    { name: "Rani Mahal Basmati Rice", quantity: "40lB", price: 54.99, imageSrc: "/Rani Mahal Basmati Rice.jpg" },
    { name: "Rani Mahal Basmati Rice( Golden Sella )", quantity: "40lB", price: 47, imageSrc: "/Rani Mahal Basmati Rice.jpg" },
    { name: "Rani Mahal Basmati Rice( White Sella )", quantity: "40lB", price: 45, imageSrc: "/Rani Mahal Basmati Rice.jpg" },
    { name: "Punjabi Tadka Basmati Rice", quantity: "40lB", price: 45, imageSrc: "/Punjabi Tadka Basmati Rice.jpg" },
    { name: "TIRUPATI IDLY RICE", quantity: "20KG BAG", price: 43.5, imageSrc: "/TIRUPATI IDLY RICE.jpg" },
    { name: "SONA MASOORI RICE", quantity: "20 lb bag", price: 24.99, imageSrc: "/SONA MASOORI RICE.jpg" },
    { name: "PONNI BOILED RICE", quantity: "20KG BAG", price: 43.5, imageSrc: "/PONNI BOILED RICE.jpg" },
    { name: "JEERAKASALA RICE", quantity: "20kg bag", price: 75, imageSrc: "/JEERAKASALA RICE.webp" },
    { name: "Pavizham Matta Rice Long Grain", quantity: "20LB", price: 23.99, imageSrc: "/Tirupati Matta Rice.jpg" }
  ],
  "Pulses": [
    { name: "Yellow Moong Dal", quantity: "55lb", price: 67.5, imageSrc: "/Moong Dal Washed.webp" },
    { name: "URAD GOTA", quantity: "55lb", price: 82.5, imageSrc: "/URAD GOTA.webp" },
    { name: "Tirupati Dalia Split (Roasted Gram)", quantity: "20KG BAG", price: 85, imageSrc: "/Tirupati Dalia Split.jpg" },
    { name: "TIRUPATI Roasted Gram Split", quantity: "1LB X 24", price: 60, imageSrc: "/TIRUPATI Roasted Gram Split.webp" },
    { name: "Toor Dal", quantity: "55LB", price: 98, imageSrc: "/TIRUPATI Sabudana.jpg" },
    { name: "Chana Dal", quantity: "55KG BAG", price: 60, imageSrc: "/chanadal.jpg" },
  ],
  "Noodles": [
    { name: "Chings Veg Hakka Noodles", quantity: "15 x 600g", price: 55, imageSrc: "/Chings Veg Hakka Noodles.jpg" },
  ],
  "Flour Items": [
    { name: "Tirupati Idli Rava", quantity: "4LB x 10", price: 50, imageSrc: "/flour.webp" },
    { name: "Tirupati White Rice Flour", quantity: "4LB x 10", price: 43, imageSrc: "/flour.webp" },
    { name: "Tirupati White Rice Flour", quantity: "20KG", price: 37, imageSrc: "/flour.webp" },
  ],
  "Spices": [
    { name: "TIRUPATI TURMERIC POWDER Type-1", quantity: "5LB X 8", price: 10.5, imageSrc: "/TIRUPATI TURMERIC POWDER.webp" },
    { name: "TIRUPATI TURMERIC POWDER Type-2", quantity: "20 Kg Bag", price: 72, imageSrc: "/TIRUPATI TURMERIC POWDER.webp" },
    { name: "TIRUPATI WHOLE DRY CHILLI (STEMLESS)", quantity: "5LB X 4", price: 80, imageSrc: "/TIRUPATI WHOLE DRY CHILLI (STEMLESS).jpg" },
    { name: "TIRUPATI WHOLE DRY CHILLI (STEMLESS)", quantity: "10KG BOX", price: 84, imageSrc: "/TIRUPATI WHOLE DRY CHILLI (STEMLESS).jpg" },
    { name: "TIRUPATI CORIANDER SEED", quantity: "400G", price: 2, imageSrc: "/TIRUPATI CORIANDER SEED.webp" },
    { name: "TIRUPATI CORIANDER SEED", quantity: "20KG", price: 66, imageSrc: "/TIRUPATI CORIANDER SEED.webp" },
    { name: "TIRUPATI CORIANDER POWDER", quantity: "10LB", price: 22, imageSrc: "/TIRUPATI CORIANDER POWDER.jpg" },
    { name: "TIRUPATI FENNEL", quantity: "25KG BAG", price: 250, imageSrc: "/TIRUPATI FENNEL.webp" },
    { name: "TIRUPATI FENNEL", quantity: "10LB", price: 48.5, imageSrc: "/TIRUPATI FENNEL.webp" },
    { name: "TIRUPATI Hot Chilli Powder", quantity: "10LB", price: 40, imageSrc: "/TIRUPATI Hot Chilli Powder.jpg" },
    { name: "TIRUPATI Extra Hot Chilli Powder", quantity: "10lb", price: 40, imageSrc: "/TIRUPATI Hot Chilli Powder.jpg" },
    { name: "TIRUPATI Crushed Chilli", quantity: "10LB", price: 40, imageSrc: "/TIRUPATI Crushed Chilli.webp" },
    { name: "TIRUPATI Kashmiri Chilli Powder", quantity: "5lb", price: 48, imageSrc: "/TIRUPATI Kashmiri Chilli Powder.webp" },
    { name: "TIRUPATI Kashmiri Chilli (Stemless)", quantity: "5LB", price: 48, imageSrc: "/kashmirchili.jpg" },
    { name: "TIRUPATI Cumin", quantity: "10LB", price: 65, imageSrc: "/TIRUPATI Cumin.jpg" },
    { name: "TIRUPATI Cumin", quantity: "25KG BAG", price: 340, imageSrc: "/TIRUPATI Cumin.jpg" },
    { name: "Laxmi Garam Masala", quantity: "4LB x 6", price: 145, imageSrc: "/Laxmi Garam Masala.jpg" },
    { name: "Degi Mirch", quantity: "500g", price: 7.5, imageSrc: "/MDH Degi Mirch.jpg" },
    { name: "Kitchen King", quantity: "500g x 24", price: 208, imageSrc: "/MDH Kitchen King.jpg" },
    { name: "Black Stone Flower", quantity: "1LB", price: 12.5, imageSrc: "/Black Stone Flower.webp" },
    { name: "Kasuri Methi", quantity: "1kg", price: 16, imageSrc: "/Kasuri Methi.jpg" },
    { name: "Ajwain", quantity: "5LB", price: 16.5, imageSrc: "/Ajwain.png" },
    { name: "Marathi Mukku", quantity: "5lb", price: 27.5, imageSrc: "/Marathi Mukku.jpg" },
    { name: "Black Cardamom", quantity: "5LB", price: 49.5, imageSrc: "/Black Cardamom.jpg" },
    { name: "Shah Jeera", quantity: "5lb", price: 45, imageSrc: "/Shah Jeera.webp" },
    { name: "Cloves", quantity: "5LB", price: 54, imageSrc: "/Cloves.webp" },
    { name: "Mace", quantity: "1LB", price: 31, imageSrc: "/Mace.webp" },
    { name: "Cinnamon Sticks", quantity: "5LB", price: 37, imageSrc: "/cinnamonsticks.jpg" },
    { name: "LG Asaefaetida powder", quantity: "10x 100G", price: 30, imageSrc: "/LG Asaefaetida powder.jpg" }
  ],
  "Sauces & Condiments": [
    { name: "CHILLI GARLIC SAUCE", quantity: "3 x 3.78 ltr", price: 80, imageSrc: "/CHILLI GARLIC SAUCE.jpg" },
    { name: "SAMBAL OELEK", quantity: "3 x 3.78 ltr", price: 75, imageSrc: "/Sambal Oelek.webp" },
    { name: "SIRIRACHA HUYFONG", quantity: "12 bottles", price: 80, imageSrc: "/Siriracha HUYFONG.jpg" },
    { name: "CHINGS Schezwaun Sauce", quantity: "1 kg x 12", price: 85, imageSrc: "/CHINGS Schezwaun Sauce.jpg" },
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
  const [mobile, setMobile] = useState('');
  const { cart,
    setCart,
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    triggerPopup } = useContext(CartContext);

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const categories = Object.keys(data);

  const handleCategoryClick = (category) => {
    // triggerPopup(`Switched to ${category}`);
    setSelectedCategory(category);
  };




  return (
    <div className="min-h-screen py-10">
      {/* Categories Section */}
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={`px-4 py-2 rounded-full font-medium text-xs md:text-sm shadow-sm transition-all duration-300 ${selectedCategory === category
              ? "bg-gray-700 text-white hover:bg-gray-600"
              : "bg-gray-300 text-gray-800 hover:bg-gray-400"
              }`}
          >
            {category}
          </button>
        ))}
      </div>


      {/* Product Section */}
      {/* Product Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-4 text-center">
          {selectedCategory}
        </h2>
        {/* Add a key to the <ul> based on the selectedCategory */}
        <ul key={selectedCategory} className="grid grid-cols-3 gap-4 sm:grid-cols-3 md:grid-cols-3">
          {data[selectedCategory].map((product) => {
            const cartItem = cart.find((item) => item.name === product.name);
            return (
              <li
                key={product.name}
                className="border rounded-lg p-2 h-[25vh] md:h-[60vh] flex flex-col justify-between items-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  width={100}
                  height={100}
                  alt={`${product.name} Image`}
                  src={product.imageSrc}
                  className="w-16 h-16 md:h-[30vh] md:w-48 object-cover"
                />
                <div className="text-center mt-2">
                  <h3 className="text-xs md:text-xl font-semibold mb-1">{product.name}</h3>
                  <p className="text-xs md:text-xl">
                    <b>Qty:</b> {product.quantity}
                  </p>
                  <p className="text-xs md:text-xl">
                    <b>Price:</b> ${product.price.toFixed(2)}
                  </p>
                </div>
                {cartItem ? (
                  <div className="flex items-center space-x-1 md:space-x-1 mt-2">
                    <button
                      onClick={() => decreaseQuantity(cartItem)}
                      className="bg-gray-100 hover:bg-gray-300 text-black px-2 py-1 rounded border border-gray-300 text-xs md:text-xl"
                    >
                      -
                    </button>
                    <span className="text-xs md:text-xl">{cartItem.cartQuantity}</span>
                    <button
                      onClick={() => increaseQuantity(cartItem)}
                      className="bg-gray-100 hover:bg-gray-300 text-black px-2 py-1 rounded border border-gray-300 text-xs md:text-xl"
                    >
                      +
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(product)}
                    className="bg-blue-500 md:text-xl hover:bg-blue-700 text-white px-2 py-1 rounded mt-2 mb-2 text-xs md:px-4 md:py-2 md:mt-4"
                  >
                    Add to Cart
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </section>

    </div>
  );
};

export default ProductDetails;
