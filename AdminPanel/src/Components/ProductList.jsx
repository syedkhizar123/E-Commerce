import React from "react"
import { useContext } from "react"
import { ProductsContext } from "../Contexts/ProductsContext"
import { useEffect, useState } from "react"

export const ProductList = () => {
    const { AllProducts } = useContext(ProductsContext)
    const { removeProduct } = useContext(ProductsContext)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        if (AllProducts.length > 0) {
            setLoading(false)
        }
    }, [AllProducts])

    return (
        loading ? <div className="text-center flex align-items-center"><h3>Loading...</h3></div> :
            <>
                <div className="w-[95%]  ">
                    <h4>Products List</h4>
                    <div className="flex flex-row gap-2 px-4 h-10 w-[100%] bg-gray-100 border-1 border-gray-200 hidden md:flex align-items-center items-center ">
                        <span className="w-[20%]">Image</span>
                        <span className="w-[25%]">Name</span>
                        <span className="w-[20%]">Category</span>
                        <span className="w-[15%]">Price</span>
                        <span className="w-[20%]">Action</span>
                    </div>
                    {AllProducts.map((item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className="flex flex-row  px-4 h-30 md:h-20 w-[100%] border-1 border-gray-200 align-items-center items-center mt-2 gap-2 hidden min-[550px]:flex">
                                    <span className="w-[20%]">
                                        <img src={item.img[0]} className="h-20 w-20 md:h-15 md:w-15" />
                                    </span>
                                    <span className="w-[25%] px-2">
                                        {item.name}
                                    </span>
                                    <span className="w-[20%]">
                                        {item.category}
                                    </span>
                                    <span className="w-[15%]">
                                        ${Math.round(item.price)}
                                    </span>
                                    <span className="w-[20%]">
                                        <button onClick={() => removeProduct(item)} className="px-2 py-1 bg-black text-white rounded hover:bg-red-700">Remove</button>
                                    </span>
                                </div>
                                <div className="block min-[550px]:hidden h-30 w-[100%] border-1 border-gray-200 mt-2">
                                    <div className="flex gap-1 px-2 py-2 ">
                                        <img src={item.img[0]} className="h-15 w-15" />
                                        <p className="px-2">{item.name}</p>
                                    </div>
                                    <div className="flex justify-between px-2">
                                        <p>${item.price}</p>
                                        <p>{item.category}</p>
                                        <button onClick={() => removeProduct(item)} className="h-7 w-7 flex align-items-center justify-center bg-black text-white ">X</button>
                                    </div>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </div>
            </>
    )
}