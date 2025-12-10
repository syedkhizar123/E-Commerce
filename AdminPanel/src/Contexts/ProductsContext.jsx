import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify"
export const ProductsContext = createContext()
import { LoginContext } from "./LoginContext";
import { useContext } from "react";

export const ProductsProvider = ({ children }) => {
    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const [AllProducts, setAllProducts] = useState([])
    const { isLogin } = useContext(LoginContext)

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

    const addProduct = async (product) => {
        const newproduct = {
            img: product.Images,
            name: product.ProductName,
            description: product.ProductDescription,
            price: product.Price,
            category: product.Category,
            subCategory: product.SubCategory,
            sizes: product.Sizes,
            id: product.id
        }

        setAllProducts(prev => [...prev, newproduct])
    }

    const removeProduct = async (product) => {
        if (!isLogin) {
            toast.warning("Feature disabled in demo")
        } else {
            const Id = product.id
            setAllProducts(AllProducts.filter((item) => {
                return item.id !== Id
            }))
            try {
                const response = await fetch(Backend_URL + "/api/products/remove", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ id: Id })
                })

                const data = await response.json()
                if (response.status !== 200) {
                    console.log(data?.message)
                } else {
                    toast.success("Product removed")
                    console.log(data)
                }
            } catch (error) {
                console.log(error)
            }
        }

    }

    useEffect(() => {
        getAllProducts()
    }, [])

    return (
        <ProductsContext.Provider value={{ AllProducts, setAllProducts, getAllProducts, addProduct, removeProduct }}>
            {children}
        </ProductsContext.Provider>
    )
}