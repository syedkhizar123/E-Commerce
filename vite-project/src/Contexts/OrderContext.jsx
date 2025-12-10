import { createContext, useContext, useState , useEffect} from "react";
export const OrderContext = createContext()
import { AuthContext } from "./AuthContext";

export const OrderProvider = ({ children }) => {
    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const [order, setOrder] = useState([])
    const { loginStatus } = useContext(AuthContext)

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
                console.log(data.message)
            }
            else {
                setOrder(data.orders)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    useEffect(() => {
        if (loginStatus) {
            fetchOrders()
        }
    }, [loginStatus])

    return (
        <OrderContext.Provider value={{ order, setOrder }}>
            {children}
        </OrderContext.Provider>
    )
}