"use client";
import React, { Fragment, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";


const data = {
  "Rice": [
    { name: "Rani Mahal Basmati Rice", quantity: "40lB", price: 51 },
    { name: "Punjabi Tadka Basmati Rice", quantity: "40lB", price: 45 },
    { name: "TIRUPATI IDLY RICE", quantity: "20KG BAG", price: 54 },
    { name: "SONA MASOORI RICE", quantity: "20 lb bag", price: 25 },
    { name: "PONNI BOILED RICE", quantity: "20KG BAG", price: 45 },
    { name: "JEERAKASALA RICE", quantity: "20kg bag", price: 110 },
    { name: "ROYAL KERALA Matta Rice long grain", quantity: "20kg bag", price: 37 },
    { name: "Tirupati Ponni Boiled Rice", quantity: "10lb*4", price: 40 },
    { name: "Tirupati Idaly Rice", quantity: "10lb*4", price: 44 },
    { name: "Tirupati Matta Rice", quantity: "10lb*4", price: 40 }
  ],
  "Pulses & Grains": [
    { name: "Moong Dal Washed", quantity: "55lb", price: 65 },
    { name: "TIRUPATI URAD GOTA", quantity: "20KG BAG", price: 60 },
    { name: "URAD GOTA", quantity: "55lb", price: 75 },
    { name: "Tirupati Dalia Split (Roasted Gram)", quantity: "20KG BAG", price: 70 },
    { name: "TIRUPATI WHITE RICE FLOUR", quantity: "20KG BAG", price: 37 },
    { name: "TIRUPATI Sabudana", quantity: "2LB", price: 4 },
    { name: "TIRUPATI FENNEL", quantity: "25KG BAG", price: 260 },
    { name: "TIRUPATI Urid Gota White", quantity: "20KG BAG", price: 60 },
    { name: "TIRUPATI Roasted Gram Split", quantity: "20KG BAG", price: 70 },
    { name: "ROYAL KERALA White Rice Flour", quantity: "4LB*10", price: 35 },
    { name: "TIRUPATI White Rice Flour", quantity: "20KG BAG", price: 36 }
  ],
  "Spices": [
    { name: "TIRUPATI TURMERIC POWDER", quantity: "5LB X 8", price: 10.5 },
    { name: "TIRUPATI TURMERIC POWDER", quantity: "20 Kg Bag", price: 72 },
    { name: "TIRUPATI WHOLE DRY CHILLI (STEMLESS)", quantity: "5LB X 4", price: 24.5 },
    { name: "TIRUPATI WHOLE DRY CHILLI (STEMLESS)", quantity: "10KG BOX", price: 92 },
    { name: "TIRUPATI CORIANDER SEED", quantity: "400G", price: 2 },
    { name: "TIRUPATI CORIANDER SEED", quantity: "20KG", price: 66 },
    { name: "TIRUPATI CORIANDER POWDER", quantity: "10LB X 4", price: 22 },
    { name: "TIRUPATI FENNEL", quantity: "10LB", price: 48.5 },
    { name: "TIRUPATI Hot Chilli Powder", quantity: "10lb", price: 40 },
    { name: "TIRUPATI Extra Hot Chilli Powder", quantity: "10lb", price: 40 },
    { name: "TIRUPATI Crushed Chilli", quantity: "10lb", price: 45 },
    { name: "TIRUPATI Kashmiri Chilli Powder", quantity: "10lb", price: 48 },
    { name: "TIRUPATI Cumin", quantity: "10 lb", price: 65 },
    { name: "TIRUPATI Cumin", quantity: "25KG BAG", price: 340 },
    { name: "MDH Degi Mirch", quantity: "500g x 24", price: 250 },
    { name: "MDH Kitchen King", quantity: "500g x 24", price: 208 },
    { name: "Black Stone Flower", quantity: "1 lb", price: 14 },
    { name: "Kasuri Methi", quantity: "1 kg", price: 16 },
    { name: "Ajwain", quantity: "5lb", price: 16.5 },
    { name: "Black Pepper Whole (Indian)", quantity: "5lb", price: 27.5 },
    { name: "Black Cardamom", quantity: "5lb", price: 49.5 },
    { name: "Shah Jeera", quantity: "5lb", price: 45 },
    { name: "Cloves", quantity: "5lb", price: 54 },
    { name: "Green Cardamom", quantity: "10LB", price: 200 },
    { name: "Mace", quantity: "1 lb", price: 31 },
    { name: "LG Asaefaetida powder", quantity: "10x 100g", price: 30 }
  ],
  "Sauces & Condiments": [
    { name: "CHILLI GARLIC SAUCE", quantity: "3 x 3.78 ltr", price: 80 },
    { name: "Sambal Oelek", quantity: "3 x 3.78 ltr", price: 75 },
    { name: "Siriracha HUYFONG", quantity: "12 bottles", price: 80 },
    { name: "CHINGS Schezwaun Sauce", quantity: "1 kg x 12", price: 85 },
    { name: "CHINGS Veg Hakka Noodles", quantity: "15 x 600 g", price: 55 }
  ],
  "Beverages": [
    { name: "Bru Coffee 200g", quantity: "200g", price: 5.5 },
    { name: "Heinz Tomato Ketchup", quantity: "6 x 2.78 Ltr", price: 57 }
  ],
  "Cooking Essentials": [
    { name: "Blanched Peanut", quantity: "50 LB", price: 120 },
    { name: "Jaggery Bulk", quantity: "1 kg x 12", price: 55 },
    { name: "Idli Rava", quantity: "4lb x 10", price: 50 },
    { name: "White Rice flour", quantity: "4lb x 10", price: 43 },
    { name: "Ajinomoto Japani", quantity: "50 LB", price: 120 },
    { name: "Mustard Oil 5 ltr", quantity: "5 Ltr", price: 24 },
    { name: "Corn Starch", quantity: "50lb", price: 68 },
    { name: "PINNACLE Baking Powder", quantity: "5kg", price: 48.5 }
  ],
  "Frozen Items": [
    { name: "Green Peas", quantity: "2 kg x 6", price: 35 },
    { name: "Mix Vegetable", quantity: "2 kg x 6", price: 35 },
    { name: "Garlic Indian", quantity: "1 kg x 8", price: 32 },
    { name: "Green Chilli Stemless", quantity: "1 kg x 10", price: 50 },
    { name: "Grated Coconut", quantity: "1 lb x 24", price: 40 },
    { name: "Punjabi Samosa", quantity: "100g x 100pc", price: 65 },
    { name: "Farali Patties", quantity: "6Kg", price: 65 },
    { name: "Sabudana Tikki", quantity: "144 Pc", price: 62 },
    { name: "Patra Cut", quantity: "10Kg", price: 90 }
  ]
};

const ProductDetails = () => {
  const [selectedCategory, setSelectedCategory] = useState("Rice");
  const [cart, setCart] = useState([]);

  const categories = Object.keys(data);

  const removeFromCart = (item) => {
    setCart((prevCart) => prevCart.filter(cartItem => cartItem.name !== item.name));
  }

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
        // If the item is already in the cart, increase its quantity by 1
        const updatedCart = prevCart.map((cartItem, index) => {
          if (index === existingProductIndex) {
            return { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 };
          }
          return cartItem;
        });
        return updatedCart;
      } else {
        // Otherwise, add the new item with a cartQuantity of 1
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
      <div className="grid grid-cols-3 md:grid-cols-12 gap-4">
        <aside className="md:col-span-3 ml-4">
          <h2 className="text-xl font-bold mb-4">Categories</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`cursor-pointer ${selectedCategory === category ? 'font-semibold' : ''}`}
              >
                {category}
                <hr />
              </li>
            ))}
          </ul>
        </aside>

        <section className="col-span-2 md:col-span-6 mx-2">
          <h2 className="text-xl font-bold mb-4 flex justify-center items-center">{selectedCategory}</h2>
          <ul className="space-y-2">
            {data[selectedCategory].map((product) => (
              <li
                key={product.name}
                className="border rounded-md p-2 flex justify-between items-center hover:bg-gray-100"
              >
                <div className="">
                  <h3 className="text-sm md:text-base font-semibold mb-3">{product.name}</h3>
                  <p className="text-xs md:text-sm"><b>Quantity -</b> {product.quantity}</p>
                  <p className="text-xs md:text-sm"><b>Rs.</b> {product.price}</p>
                </div>
                <button
                  onClick={() => addToCart(product)}
                  className="bg-blue-500 hover:bg-blue-700 text-white px-1 min-w-20 md:px-2 md:text-base text-xs py-1 rounded"
                >
                  Add to Cart
                </button>
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
