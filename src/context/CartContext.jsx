import { useState, useContext, createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    //Add to Cart
    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if(existing){
                return prev.map((item)=>item.id === product.id ? {...item, qty: item.qty +1} : item)
            }
            return [...prev, {...product, qty: 1}]
        });
    };

    //Remove Cart
    const removeFromCart = (id)=>{
        setCart((prev) => prev.filter((item) => item.id != id))
    }

    //Update Quantity
    const updateQty = (id, qty) =>{
        setCart((prev)=>
            prev.map((item) => (item.id === id ? {...item, qty} : item))
        )
    }

    //Total Price
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <CartContext.Provider value={{cart, addToCart, removeFromCart, updateQty, total}}>
            {children}
        </CartContext.Provider>
    )
} 

//Custom Hook
export const useCart = () => useContext(CartContext);