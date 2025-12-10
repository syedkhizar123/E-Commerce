import { useState, useContext } from "react"
import { CartTotal } from "./CartTotal"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { CartContext } from "../Contexts/CartContext"
import { OrderContext } from "../Contexts/OrderContext"


export const Form = () => {

    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const navigate = useNavigate()
    const { cart, setCart } = useContext(CartContext)
    const { order, setOrder } = useContext(OrderContext)
    const [formData, setFormData] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Street: "",
        City: "",
        State: "",
        Zipcode: "",
        Country: "",
        PaymentMethod: ""
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const fetchOrders = async () => {
        try {
            const response = await fetch(Backend_URL + "/api/orders/myorders", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + localStorage.getItem("token")
                }
            })

            const data = await response.json()
            if (response.status !== 200) {
                // console.log(data.message)
            }
            else {
                setOrder(data.orders)
            }
        } catch (error) {
            // console.log(error.message)
        }
    }

    const handleSubmit = async () => {
        if (cart.length === 0) {
            toast.error("Cart is empty")
            return
        }
        if (!formData.FirstName || !formData.LastName || !formData.Email || !formData.Street || !formData.City || !formData.State || !formData.Zipcode || !formData.Country) {
            toast.error("Please fill all the fields")
            return
        } else {
            if (!formData.PaymentMethod) {
                toast.error("Please select a payment method")
            }
            else {
                console.log(formData)

                try {
                    const response = await fetch(Backend_URL + "/api/orders/place", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("token")
                        },
                        body: JSON.stringify({
                            products: cart,
                            paymentMethod: formData.PaymentMethod,
                            DeliveryInfo: {
                                FirstName: formData.FirstName,
                                LastName: formData.LastName,
                                Email: formData.Email,
                                Street: formData.Street,
                                City: formData.City,
                                State: formData.State,
                                Zipcode: formData.Zipcode,
                                Country: formData.Country
                            }
                        })
                    })

                    const data = await response.json()

                    if (response.status !== 200) {
                        toast.error(data.message)
                    } else {
                        toast.success("Order Placed Successfully")
                        fetchOrders()
                        navigate("/orders")
                        setCart([])
                        try {
                            const clear = await fetch(Backend_URL + "/api/cart/clear", {
                                method: "POST",
                                headers: {
                                    "Content-Type": "application/json",
                                    "Authorization": "Bearer " + localStorage.getItem("token")
                                }
                            }
                            )

                            const clearData = await clear.json()
                            if (clearData.status !== 200) {
                                console.log(clearData.message)
                            } else {
                                console.log("Cart cleared")
                            }

                        } catch (error) {
                            console.log(error)
                        }
                    }
                } catch (error) {
                    toast.error(error.message)
                }
            }
        }
    }
    return (
        <>
            <div className="w-[90%] sm:w-[80%] mx-auto max-w-[1320px] flex flex-col sm:flex-row">

                <div className="w-[100%] sm:w-[50%]">
                    <h3 className="mt-3">
                        Delivery Information
                    </h3>

                    <div className="flex gap-2 mt-4 mb-3">
                        <input type="text" onChange={handleChange} name="FirstName" placeholder="First Name" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                        <input type="text" onChange={handleChange} name="LastName" placeholder="Last Name" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={handleChange} name="Email" placeholder="Email Address" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                    </div>
                    <div className="mb-3">
                        <input type="text" onChange={handleChange} name="Street" placeholder="Street" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                    </div>
                    <div className="flex gap-2 mb-3">
                        <input type="text" onChange={handleChange} name="City" placeholder="City" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                        <input type="text" onChange={handleChange} name="State" placeholder="State" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                    </div>
                    <div className="flex gap-2 mb-3">
                        <input type="text" onChange={handleChange} name="Zipcode" placeholder="Zipcode" className="pl-2 py-2 border-2 border rounded border-gray-200 w-[100%]" />
                        <input type="text" onChange={handleChange} name="Country" placeholder="Country" className="pl-2 py-1\2 border-2 border rounded border-gray-200 w-[100%]" />
                    </div>
                </div>
                <div className="w-[100%] sm:w-[50%]">
                    <CartTotal />
                    <p className="w-[90%] sm:w-[80%] max-w-[1320px] mx-auto mt-5 font-semibold text-lg">Payment Method</p>
                    <div className="w-[90%] sm:w-[80%] max-w-[1320px] space-between mx-auto mt-3 flex flex-col lg:flex-row gap-2">
                        <div className="flex gap-1  w-[100%] border-2 border-gray-200 py-2 pl-2">
                            <input type="radio" id="COD" value="COD" className="my-1 mr-2 cursor-pointer" checked={formData.PaymentMethod === "COD"} onChange={handleChange} name="PaymentMethod" />
                            <label htmlFor="COD" className="my-2 cursor-pointer text-sm text-gray-700">CASH ON DELIVERY </label>
                        </div>
                        <div className="flex gap-1  w-[100%] border-2 border-gray-200 py-2 pl-2 ">
                            <input type="radio" id="ONLINE" className="my-1 mr-2 cursor-pointer" value="ONLINE" checked={formData.PaymentMethod === "ONLINE"} onChange={handleChange} name="PaymentMethod" />
                            <label htmlFor="ONLINE" className="my-1 cursor-pointer "><img className="h-[30px] " src="data:image/png;base64,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" /></label>
                        </div>
                    </div>
                    <div className="w-[90%] sm:w-[80%] max-w-[1320px] mx-auto mt-3">
                        <button className="w-[100%] bg-black text-white py-2" onClick={handleSubmit}>
                            Place Order
                        </button>
                    </div>

                </div>

            </div>
        </>
    )
}