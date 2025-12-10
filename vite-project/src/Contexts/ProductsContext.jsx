import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {
    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const [AllProducts, setAllProducts] = useState([])

    const getAllProducts = async () => {
        try {
            const response = await fetch(Backend_URL + "/api/products/all", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if (response.status === 200) {
                const data = await response.json()
                setAllProducts(data.products)
            } else {
                console.log("Failed to fetch products")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ AllProducts, setAllProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}