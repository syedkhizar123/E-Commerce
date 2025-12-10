
import { createContext , useEffect , useState } from "react";

export const OrdersContext = createContext()

export const OrdersProvider = ({children}) => {
    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const [allOrders , setAllOrders] = useState([])

    const getAllOrders = async () => {
        try {
            const response = await fetch(Backend_URL + "/api/orders/all" , {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })

            if(response.status === 200){
                const data = await response.json()
                setAllOrders(data.allOrders)
            } else{
                console.log("Failed to fetch orders")
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getAllOrders()
    } , [])
    return(
        <OrdersContext.Provider value={{allOrders , setAllOrders}}>
            {children}
        </OrdersContext.Provider>
    )
}