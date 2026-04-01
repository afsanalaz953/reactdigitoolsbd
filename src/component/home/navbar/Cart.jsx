import React from 'react';
import { toast } from 'react-toastify';
const Cart = ({ cartItems, removeFromCart, updateQuantity, clearCart, total }) => {
const handleRemove = (item) => {
        removeFromCart(item.id);
        toast.info(`${item.name} removed from cart`, {
            position: "top-right",
            autoClose: 2000,
        });
    };
    
    const handleCheckout = () => {
        if (cartItems.length === 0) {
            toast.warning("Your cart is empty!", {
                position: "top-right",
                autoClose: 2000,
            });
                 return;
        }
        clearCart();
        toast.success("Thank you for your purchase! Cart cleared.", {
            position: "top-right",
            autoClose: 3000,
        });
    };
    
    if (cartItems.length === 0) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="max-w-md mx-auto">
                    <div className="text-6xl mb-4">🛒</div>
                    <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
                    <p className="text-gray-500">Looks like you haven't added any products to your cart yet.</p>
                </div>
            </div>
        );
    }

    return (
        <div  className="max-w-3xl mx-auto">
           <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
                
                {/* Cart Items - 1 column layout */}
                <div className="space-y-4">
                    {cartItems.map(item => (
                        <div key={item.id} className="flex items-center gap-4 p-4 border rounded-lg shadow-sm bg-white">
                            {/* Icon */}
                            <div className="w-16 h-16 shrink-0">
                                <img src={item.icon} alt={item.name} className="w-full h-full object-contain" />
                            </div>
                            
                            {/* Name and Price */}
                            <div className={`grow`}>
                                <h3 className="font-semibold text-lg">{item.name}</h3>
                                <p className="text-gray-600">${item.price} each</p>
                            </div>
                            
                            {/* Quantity Controls */}
                            <div className="flex items-center gap-2">
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                                >
                                    -
                                </button>
                                <span className="w-8 text-center">{item.quantity}</span>
                                <button 
                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    className="w-8 h-8 rounded-full border border-gray-300 hover:bg-gray-100"
                                >
                                    +
                                </button>
                            </div>
                            
                            {/* Subtotal */}
                            <div className="min-w-24 text-right">
                                <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            
                            {/* Remove Button */}
                            <button 
                                onClick={() => handleRemove(item)}
                                className="text-red-500 hover:text-red-700 px-3 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </div>
                
                {/* Cart Summary */}
                <div className="mt-8 p-6 border-t bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-2xl font-bold text-blue-600">${total.toFixed(2)}</span>
                    </div>
                    
                    <button 
                        onClick={handleCheckout}
                        className="w-full py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div> 
        </div>
    );
};

export default Cart;