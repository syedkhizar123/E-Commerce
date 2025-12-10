import { use } from "react";
import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const [cart, setCart] = useState([])

    useEffect(() => {
        console.log("Cart updated:", cart);
    }, [cart]);

    const { loginStatus } = useContext(AuthContext);
    const [token, setToken] = useState(false);
    useEffect(() => {
        if (loginStatus) {
            setToken(true);
        } else {
            setToken(false);
        }
    }, [loginStatus])

    const addToCart = async (product, size) => {
        if (!token) {
            toast.error("Not Logged In");
            return;
        }

        if (!size) {
            toast.warn("Select a size");
            return;
        }

        const cartProduct = {
            id: product.id,
            name: product.name,
            price: product.price,
            category: product.category,
            img: product.img[0],
            size,
            quantity: 1
        };

        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === cartProduct.id && item.size === size)
            if (existingItem) {
                return prevCart.map((item) =>
                    item.id === cartProduct.id && item.size === size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...prevCart, { ...cartProduct, size, quantity: 1 }];
        })

        try {
            const response = await fetch(Backend_URL + "/api/cart/add", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({ product: cartProduct, size })
            })

            const data = await response.json();
            if (response.status !== 200) {
                console.log("Failed to add to cart on server", data.message);
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    const removeFromCart = async (id, size) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === id && item.size === size))
        );

        try {
            const response = await fetch(Backend_URL + "/api/cart/remove", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                },
                body: JSON.stringify({ id, size })

            })

            if (response.status !== 200) {
                const data = await response.json();
                toast.error(data.message)
            }



        } catch (error) {
            toast.error(error.message)
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) return;

        const fetchCart = async () => {
            try {
                const response = await fetch(Backend_URL + "/api/cart/", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": "Bearer " + token
                    }
                }
                )

                const data = await response.json()
                if (response.status === 200) {
                    setCart(data.cart)
                } else {
                    console.log("Failed to fetch cart data", data.message);
                }
            } catch (error) {
                console.log(error.message)
            }
        }


        fetchCart();
    }, [])

    return (
        <CartContext.Provider value={{ cart, setCart, addToCart, removeFromCart }}>
            {children}
            <ToastContainer position="top-right" autoClose={3000} />
        </CartContext.Provider>

    )
}