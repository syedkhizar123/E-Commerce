import { useEffect } from "react"
import { useState } from "react"
import { toast } from "react-toastify"
import { useContext } from "react"
import { ProductsContext } from "../Contexts/ProductsContext"
import { LoginContext } from "../Contexts/LoginContext"

export const AddProduct = () => {
    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME
    const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET
    console.log(cloudName , uploadPreset , Backend_URL)
    const { AllProducts, setAllProducts } = useContext(ProductsContext)
    const { isLogin } = useContext(LoginContext)
    const [loading, setLoading] = useState(false)
    const [preview, setPreview] = useState([])
    const [images, setImages] = useState([])
    const URLs = []
    const [sizes, setSizes] = useState([])
    const [form, setForm] = useState({
        ProductName: "",
        ProductDescription: "",
        Category: "Men",
        SubCategory: "Topwear",
        Price: "",
        Sizes: sizes,
        Images: URLs
    })


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const fetchProductsAgain = async () => {
        const res = await fetch(Backend_URL + "/api/products/all");
        const data = await res.json();
        setAllProducts(data.products);
    };

    const handleSubmit = async () => {
        if (!isLogin) {
            toast.warning("Feature disabled in demo")
        }
        else {
            if (images.length < 1) {
                toast.warning("Atleast one image is required")
                return
            }
            try {
                setLoading(true)
                for (const item of images) {
                    const data = new FormData()
                    data.append("file", item)
                    data.append("upload_preset", uploadPreset)
                    data.append("cloud_name", cloudName)
                    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
                        method: "POST",
                        body: data
                    })

                    const imageInfo = await response.json()
                    console.log(imageInfo.url)
                    URLs.push(imageInfo.url)
                }

                const finalform = { ...form, Images: URLs }
                const formRes = await fetch(Backend_URL + "/api/products/add", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ ...finalform, id: AllProducts.length + 1 })
                })

                const getformData = await formRes.json()
                setLoading(false)
                toast.success("Product Added")
                fetchProductsAgain()
                setSizes([])
                setPreview([])
                document.querySelectorAll(".sizeDiv").forEach((btn) => {
                    btn.style.backgroundColor = ""
                })
                setForm(prev => ({
                    ...prev,
                    ProductName: "",
                    ProductDescription: "",
                    Category: "Men",
                    SubCategory: "Topwear",
                    Price: "",
                    Sizes: [],
                    Images: []

                }))
                console.log(getformData)

            } catch (error) {
                console.log(error)
            }
        }
    }
    useEffect(() => {
        setForm(prev => ({ ...prev, Sizes: sizes }));
    }, [sizes]);


    const handleSizes = (e) => {
        if (!sizes.includes(e.target.innerText)) {
            e.target.style.backgroundColor = "rgba(129, 129, 129, 1)"
            setSizes([...sizes, e.target.innerText])
        } else {
            e.target.style.backgroundColor = ""
            setSizes(sizes.filter((item) => item !== e.target.innerText))
        }
    }


    const handleImages = async (e) => {
        const file = e.target.files[0]
        if (!file) {
            console.log("No file")
        }
        else {
            console.log(file)
            const imageURL = URL.createObjectURL(file)
            setPreview(prev => [...prev, imageURL])
            setImages(prev => [...prev, file])

        }
    }

    return (
        <>
            <div className=" flex flex-col justify-start sm:ms-8 mt-3 w-[95%]">
                <p>Upload Image</p>
                <div className="flex gap-2 ">
                    <label htmlFor="image1">
                        <img className="h-13 sm:h-20 w-13 sm:w-20" src={preview[0] || "data:image/png;base64,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"} />
                        <input onChange={handleImages} type="file" id="image1" hidden />
                    </label>
                    <label htmlFor="image2">
                        <img className="h-13 sm:h-20 w-13 sm:w-20" src={preview[1] || "data:image/png;base64,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"} />
                        <input onChange={handleImages} type="file" id="image2" hidden />
                    </label>
                    <label htmlFor="image3">
                        <img className="h-13 sm:h-20 w-13 sm:w-20" src={preview[2] || "data:image/png;base64,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"} />
                        <input onChange={handleImages} type="file" id="image3" hidden />
                    </label>
                    <label htmlFor="image4">
                        <img className="h-13 sm:h-20 w-13 sm:w-20" src={preview[3] || "data:image/png;base64,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"} />
                        <input onChange={handleImages} type="file" id="image4" hidden />
                    </label>

                </div>
                <p className="mt-3 mb-1">Product Name</p>
                <input onChange={handleChange} value={form.ProductName} name="ProductName" className="ps-2  border-1 border-gray-500 rounded py-2 w-[100%] sm:w-[90%] max-w-150" placeholder="Product Name" />
                <p className="mt-3 mb-1">Product Description</p>
                <textarea name="ProductDescription" value={form.ProductDescription} onChange={handleChange} className="pt-1 ps-2 border-1 border-gray-500 rounded h-18 w-[100%] sm:w-[90%] max-w-150 " placeholder="Product Description" />
                <div className="flex flex-col sm:flex-row gap-2 max-w-150">
                    <div className="sm:w-[30%]">
                        <p className="mt-3 mb-1">Category</p>
                        <select value={form.Category} onChange={handleChange} name="Category" className="border-1 border-gray-500 rounded p-2 w-full outline-none w-full sm:w-[90%]">
                            <option value="Men">Men</option>
                            <option value="Women">Women</option>
                            <option value="Kids">Kids</option>
                        </select>
                    </div>
                    <div className="sm:w-[30%]">
                        <p className="mt-3 mb-1">Sub Category</p>
                        <select value={form.SubCategory} onChange={handleChange} name="SubCategory" className="border-1 border-gray-500 rounded p-2 w-full outline-none w-full sm:w-[90%]">
                            <option value="Topwear">Topwear</option>
                            <option value="Bottomwear">Bottomwear</option>
                            <option value="Winterwear">Winterwear</option>
                        </select>
                    </div>
                    <div className="sm:w-[30%]">
                        <p className="mt-3 mb-1">Price</p>
                        <input value={form.Price} onChange={handleChange} name="Price" type="number" className="ps-2  border-1 border-gray-500 rounded p-2 w-full sm:w-[90%]" placeholder="Price" />
                    </div>
                </div>
                <div className="">
                    <p className="mt-3 mb-1">Product Sizes</p>
                    <div className="flex gap-2 mt-2">
                        <div onClick={handleSizes} className="sizeDiv h-10 w-10 flex items-center justify-center cursor-pointer bg-gray-100">
                            S
                        </div>
                        <div onClick={handleSizes} className="sizeDiv h-10 w-10 flex items-center justify-center cursor-pointer bg-gray-100">
                            M
                        </div>
                        <div onClick={handleSizes} className="sizeDiv h-10 w-10 flex items-center justify-center cursor-pointer bg-gray-100">
                            L
                        </div>
                        <div onClick={handleSizes} className="sizeDiv h-10 w-10 flex items-center justify-center cursor-pointer bg-gray-100">
                            XL
                        </div>
                        <div onClick={handleSizes} className="sizeDiv h-10 w-12 flex items-center justify-center cursor-pointer bg-gray-100">
                            XXL
                        </div>
                    </div>
                </div>
                <div className="mt-4 mb-1">
                    <button onClick={handleSubmit} className="bg-black text-white px-6 py-2 rounded mt-6 mb-10 ">
                        {loading ? "Loading..." : "Add Product"}
                    </button>
                </div>
            </div>
        </>
    )
}