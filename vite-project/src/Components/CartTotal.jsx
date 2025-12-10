import { useEffect } from "react"
import { CartContext } from "../Contexts/CartContext"
import { useContext, useState } from "react"


export const CartTotal = () => {

    const { cart } = useContext(CartContext)
    const [subTotal, setSubTotal] = useState(0)
    const shippingFee = 10

    useEffect(() => {
        if (cart.length > 0) {
            cart.map((item) => {
                const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
                setSubTotal(total);
            })
        } else{
            setSubTotal(0)
        }
    }, [cart])
    return (
        <>
            <div className="w-[90%] sm:w-[80%] max-w-[1320px] mx-auto  flex justify-end mt-5">
                <div className="w-[100%] sm:w-[500px] ">
                    <h3 className="mb-4">Cart Totals ---</h3>
                    <div className="flex justify-between my-2 pb-3 border-bottom border-gray-100">
                        <span>Subtotal</span>
                        <span>${Math.round(subTotal)}</span>
                    </div>
                    <div className="flex justify-between my-2 pb-3 border-bottom border-gray-100">
                        <span>Shipping Fee</span>
                        <span>${shippingFee}</span>
                    </div>
                    <div className="flex justify-between my-2 ">
                        <span className="font-bold">Total</span>
                        <span className="font-bold">${Math.round(subTotal + shippingFee)}</span>
                    </div>
                </div>
            </div>
        </>
    )
}