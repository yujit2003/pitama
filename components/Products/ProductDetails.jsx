"use client";
import React, { Fragment, useState, useEffect } from "react";
import { CiShoppingCart } from "react-icons/ci";
import Image from 'next/image';


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
  const [cart, setCart] = useState([]);
  const [mobile, setMobile] = useState('');

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  const categories = Object.keys(data);

  const removeFromCart = (item) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(cartItem => cartItem.name !== item.name);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const whatsappMessage = () => {
    const phoneNumber = "+12893807130"; // Use the international format
    const body = cart
      .map(
        (item) =>
          `${item.name} - ${item.quantity} - $${item.price * item.cartQuantity} - Item Quantity: ${item.cartQuantity}`
      )
      .join("\n");
  
    const encodedBody = encodeURIComponent(body);
  
    // Check if the user is on mobile or desktop
    const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
    let url;
  
    if (isMobile) {
      // For mobile devices, use the WhatsApp app
      url = `whatsapp://send?phone=${phoneNumber}&text=${encodedBody}`;
    } else {
      // For desktop (WhatsApp Web)
      url = `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedBody}`;
    }
  
    // Open the URL in a new tab
    window.open(url, "_blank");
  };

  const mailto = () => {

    const email = "pitamafoods@gmail.com";
    const subject = "New Order";
    const body = `Mobile Number: ${mobile}\n\n` +
      cart.map(item => `${item.name} - ${item.quantity} - $ ${item.price * item.cartQuantity} - Item Quantity : ${item.cartQuantity}`).join("\n");

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, 'emailWindow');
  };


  const ClearCart = () => {
    setCart([]);
    localStorage.setItem('cart', JSON.stringify([]));

  }

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
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      } else {
        const updatedCart = [...prevCart, { ...product, cartQuantity: 1 }];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        return updatedCart;
      }
    });
  };

  const increaseQuantity = (cartItem) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item => {
        if (item.name === cartItem.name) {
          return { ...item, cartQuantity: item.cartQuantity + 1 };
        }
        return item;
      });
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const decreaseQuantity = (cartItem) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map(item => {
        if (item.name === cartItem.name) {
          return { ...item, cartQuantity: Math.max(item.cartQuantity - 1, 0) };
        }
        return item;
      }).filter(item => item.cartQuantity > 0);  // Remove item if quantity is 0
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return updatedCart;
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
                    <p className="text-xs md:text-sm">$ {item.price}</p>
                    <p className="text-xs md:text-sm">Quantity: {item.cartQuantity}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {cart.length > 0 ? (
            <div className="block p-4 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border p-2 rounded-md flex-grow"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <button
                  onClick={() => ClearCart()}
                  className="bg-red-500 text-white px-4 py-2 rounded mb-2 md:mb-0"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() =>
                    mailto()
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                >
                  Order via Email
                </button>
                <button
                  onClick={() =>
                    whatsappMessage()
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded mb-2"
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ) : (<h1 className="flex justify-center items-center  font-bold text-[#e73737]">Empty</h1>)}

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

        <section className="md:col-span-5 mx-2">
  <h2 className="text-xl font-bold mb-4 flex justify-center items-center">
    {selectedCategory}
  </h2>

  {/* Grid Layout for Row-wise Display */}
  <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    {data[selectedCategory].map((product) => {
      const cartItem = cart.find((item) => item.name === product.name);

      return (
        <li
          key={product.name}
          className="border rounded-md p-4 flex flex-col justify-between items-center hover:bg-gray-100"
        >
          <Image
            width={100}
            height={100}
            alt={`${product.name} Image`}
            src={product.imageSrc}
            className="w-24 h-24 object-cover"
          />

          <div className="text-center mt-2">
            <h3 className="text-sm md:text-base font-semibold mb-1">
              {product.name}
            </h3>
            <p className="text-xs md:text-sm">
              <b>Quantity -</b> {product.quantity}
            </p>
            <p className="text-xs md:text-sm">
              <b>$</b> {product.price}
            </p>
          </div>

          {cartItem ? (
            <div className="flex items-center space-x-2 mt-2">
              <button
                onClick={() => decreaseQuantity(cartItem)}
                className="bg-gray-100 hover:bg-gray-300 text-black px-2 text-xs py-1 rounded border border-gray-300"
              >
                -
              </button>
              <span className="text-sm mx-2">{cartItem.cartQuantity}</span>
              <button
                onClick={() => increaseQuantity(cartItem)}
                className="bg-gray-100 hover:bg-gray-300 text-black px-2 text-xs py-1 rounded border border-gray-300"
              >
                +
              </button>
            </div>
          ) : (
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 hover:bg-blue-700 text-white px-2 text-xs md:text-base py-1 rounded mt-2"
            >
              Add to Cart
            </button>
          )}
        </li>
      );
    })}
  </ul>
</section>


        <section className="md:col-span-4 hidden md:block">
          <h2 className="text-xl font-bold mb-4 flex justify-center items-center">My Cart <div className="px-4"><CiShoppingCart /></div></h2>
          {cart.length > 0 ? (
            <div className="block p-4 space-y-4">
              <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                <input
                  type="text"
                  placeholder="Mobile Number"
                  className="border p-2 rounded-md flex-grow"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <button
                  onClick={() => ClearCart()}
                  className="bg-red-500 text-white px-4 py-2 rounded mb-2 md:mb-0"
                >
                  Clear Cart
                </button>
                <button
                  onClick={() => mailto()}
                  className="bg-green-500 text-white px-4 py-2 rounded"
                >
                  Order via Email
                </button>
                <button
                  onClick={() =>
                    whatsappMessage()
                  }
                  className="bg-green-500 text-white px-4 py-2 rounded "
                >
                  Order via WhatsApp
                </button>
              </div>
            </div>
          ) : (<h1 className="flex justify-center items-center  font-bold text-[#dd0f0f]">Empty</h1>)}

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
                    <p className="text-xs md:text-sm">$ {item.price}</p>
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
