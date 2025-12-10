import { CartItems } from "../Components/CartItems"
import { CartTotal } from "../Components/CartTotal"
import { CartContext } from "../Contexts/CartContext"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useContext } from "react"

export const Cart = () => {

    const { cart } = useContext(CartContext)
    const navigate = useNavigate()

    const handleCheckout = () => {
        if (cart.length === 0) {
            toast.warning("Your cart is empty")
            return
        }
        else {
            navigate("/placeorder")
        }
    }
    return (
        <>
            <div className="w-[90%] mx-auto max-w-[1320px] my-5">
                <h3 className="">YOUR CART --</h3>
            </div>
            <CartItems />
            <CartTotal />
            <div className="w-[90%] sm:w-[80%] mx-auto max-w-[1320px] flex justify-end mt-3">
                <div className="w-[100%] sm:w-[500px]">
                    <button onClick={handleCheckout} className="w-[100%] bg-black text-white py-2">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </>
    )
}