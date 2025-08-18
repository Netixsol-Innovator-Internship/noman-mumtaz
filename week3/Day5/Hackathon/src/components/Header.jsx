"use client";
import { ShoppingCart, Search, X, Minus, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCart, updateCartQuantity, removeFromCart } from "../services/api";
import image from "../assets/logo.png";
const getFallbackImage = (teaId) => {
  const fallbackImages = [
    "/assets/t2.jpg",
    "/assets/t3.jpg",
    "/assets/t4.jpg",
    "/assets/t5.jpg",
    "/assets/t6.jpg",
    "/assets/t7.jpg",
    "/assets/t8.jpg",
  ];

  if (!teaId) {
    // return a default image if teaId is missing
    return "/assets/t2.jpg";
  }

  const hash = teaId
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);

  return fallbackImages[hash % fallbackImages.length];
};


const Header = () => {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [showCartSidebar, setShowCartSidebar] = useState(false);
  const navigate = useNavigate();

  const fetchCart = async () => {
    try {
      const res = await getCart();
      const items = res.data.items || [];
      setCartItems(items);
      const totalItems = items.reduce((sum, item) => sum + (item.quantity || 0), 0);
      setCartItemCount(totalItems);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const handleQuantityChange = async (teaId, action, currentQty) => {
    try {
      let newQty = action === "increase" ? currentQty + 1 : currentQty - 1;
      if (newQty <= 0) {
        await removeFromCart({ teaId });
      } else {
        await updateCartQuantity({ teaId, quantity: newQty });
      }
      fetchCart();
    } catch (err) {
      console.error("Failed to update cart:", err);
    }
  };

  const cartTotal = cartItems.reduce(
    (sum, item) => sum + (item.tea?.price || 0) * (item.quantity || 0),
    0
  );

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center text-2xl font-bold text-gray-900">
                <img src={image} alt="Logo" className="h-8 w-auto" />
                <span className="ml-2">Brand Name</span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link to="/collections" className="text-gray-700 hover:text-gray-900 font-medium">
                SHOP ALL COLLECTIONS
              </Link>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                OUR BLENDS
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                BLOG
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                CONTACT
              </a>
            </nav>

            {/* Right Side */}
            <div className="flex items-center space-x-4">
              <Search className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900" />

              {/* Cart */}
              <div className="relative">
                <ShoppingCart
                  className="w-5 h-5 text-gray-700 cursor-pointer hover:text-gray-900"
                  onClick={() => setShowCartSidebar(true)}
                />
                {cartItemCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Cart Sidebar */}
      {showCartSidebar && (
        <div className="fixed inset-0 z-50 flex">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={() => setShowCartSidebar(false)}
          ></div>

          {/* Sidebar */}
          <div className="ml-auto relative w-full max-w-md bg-white shadow-xl flex flex-col pointer-events-auto">
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-lg font-medium">My Bag</h2>
              <button onClick={() => setShowCartSidebar(false)}>
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <p className="text-gray-500">Your bag is empty</p>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.tea._id} className="flex items-center space-x-4">
                      <img
                        src={getFallbackImage(item.tea._id)}
                        alt={item.tea.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="text-sm font-medium">{item.tea.name}</h3>
                        <p className="text-sm text-gray-600">
                          {item.tea.price !== undefined
                            ? `$${Number(item.tea.price).toFixed(2)}`
                            : "N/A"}
                        </p>
                        <div className="flex items-center mt-2">
                          <button
                            onClick={() =>
                              handleQuantityChange(item.tea._id, "decrease", item.quantity)
                            }
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="mx-2 text-sm">{item.quantity}</span>
                          <button
                            onClick={() =>
                              handleQuantityChange(item.tea._id, "increase", item.quantity)
                            }
                            className="p-1 hover:bg-gray-100 rounded"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="border-t p-6 space-y-4">
                <div className="flex justify-between text-lg font-medium">
                  <span>Total</span>
                  <span>{cartTotal > 0 ? `$${cartTotal.toFixed(2)}` : "N/A"}</span>
                </div>
                <button
                  onClick={() => {
                    setShowCartSidebar(false);
                    navigate("/bag");
                  }}
                  className="w-full bg-black text-white py-3 px-6 rounded hover:bg-gray-800 transition-colors"
                >
                  View Bag
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
