import React from "react"
import { useContext } from "react"
import { OrdersContext } from "../Contexts/OrdersContext"
import { useState } from "react"
import { useEffect } from "react"

export const OrderCard = () => {
    const { allOrders } = useContext(OrdersContext)
    const [loading , setLoading] = useState(true)
    let now = new Date()
    useEffect(() => {
        if(allOrders.length > 0){
            setLoading(false)
        }
    } , [allOrders])
    return (
       loading ? <div className="text-center flex align-items-center"><h3>Loading...</h3></div> :
        <>
            <div className=" w-[95%]">
                <h5 className="mt-3 mb-1">Orders</h5>
                {allOrders.map((item, index) => {
                    let orderDate = new Date(item.orderDate)
                    let diff = (now - orderDate)/(1000 * 60 * 60 * 24)
                    let status ;
                    if(diff  >= 5){
                        status = "Delivered"
                    } else if (diff > 2){
                        status = "Shipped"
                    } else {
                        status = "Placed"
                    }
                    let orderPrice= 0 
                    let payment = "Pending" ;
                    if(item.paymentMethod === "ONLINE"){
                        payment = "Completed"
                    }
                    return (
                        <React.Fragment key={index}>
                            <div className="w-[100%] min-h-40 h-max-content border-1 border-gray-300 mt-2 pt-2 pb-2">
                                <div className="w-[95%] mx-auto flex flex-col min-[570px]:flex-row justify-between gap-1  ">
                                    <div className="my-1 min-[570px]:my-3 max-[570px]:w-[100%] [35%] min-[920px]:w-[15%]">
                                        <img className="h-12 w-12 mb-3 " src="data:image/svg+xml,%3csvg%20width='73'%20height='73'%20viewBox='0%200%2073%2073'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20x='0.5'%20y='0.5'%20width='72'%20height='72'%20fill='%23F9FAFB'%20stroke='%23D2D2D2'/%3e%3cpath%20d='M41.1484%2037.4871L38.6348%2038.9418V65.0908L61.2694%2052.0221V25.873L41.1484%2037.4871Z'%20fill='%23565656'/%3e%3cpath%20d='M45.247%2014.039L36.5423%209L13.2793%2022.4295L21.9956%2027.4684L45.247%2014.039Z'%20fill='%23565656'/%3e%3cpath%20d='M59.7945%2022.4307L49.7631%2016.7168L26.5117%2030.1463L27.8384%2030.8329L36.5431%2035.8602L45.2013%2030.8678L59.7945%2022.4307Z'%20fill='%23565656'/%3e%3cpath%20d='M24.7545%2039.7573L20.5883%2037.6161V30.9595L12%2026.0137V51.9765L34.4717%2064.9521V38.9893L24.7545%2033.3917V39.7573Z'%20fill='%23565656'/%3e%3c/svg%3e" />
                                        <div className="min-w-20 px-2 py-1 border-1 border-gray-400 bg-gray-300 text-center hidden min-[570px]:block min-[920px]:hidden text-sm max-w-10"> {status} </div>
                                    </div>
                                    <div className="my-1 min-[570px]:my-3 ps-2 max-[570px]:w-[100%] w-[40%] min-[920px]:w-[35%]">
                                        <div className="mb-3">
                                            {item.products.map((item , index) => {
                                                orderPrice = orderPrice + (item.price*item.quantity)
                                                return(
                                                    <React.Fragment key={index}>
                                                        <p className="mb-0 text-xs sm:text-sm">{item.name} x {item.quantity} {item.size}</p>                                                   
                                                    </React.Fragment>
                                                )
                                            })}
                                        </div>
                                        <p className="mb-2 text-xs sm:text-sm font-bold">{item.DeliveryInfo.FirstName}  {item.DeliveryInfo.LastName}</p>
                                        <p className="mb-0 text-xs sm:text-sm">{item.DeliveryInfo.Street}</p>
                                        <p className="text-xs sm:text-sm">{item.DeliveryInfo.City}, {item.DeliveryInfo.State}, {item.DeliveryInfo.Country}, {item.DeliveryInfo.ZipCode}</p>
                                    </div>
                                    <div className="my-1 min-[570px]:my-3 ps-2 max-[570px]:w-[100%] w-[25%] min-[920px]:w-[30%]">
                                        <p className="mb-2 text-xs sm:text-sm">Items: {item.products.length}</p>
                                        <p className="mb-0 text-xs sm:text-sm">Price: ${Math.round(orderPrice)}</p>
                                        <p className="mb-0 text-xs sm:text-sm">Payment: {payment}</p>
                                        <p className="mb-0 text-xs sm:text-sm">Method: {item.paymentMethod}</p>
                                        <p className="mb-0 text-xs sm:text-sm">Date: {item.orderDate.slice(0,10)}</p>
                                    </div>
                                    <div className="my-1 ps-2 block min-[570px]:hidden">
                                        <div className="w-[100px] px-2 py-1 border-1 border-gray-400 bg-gray-300 text-center "> {status} </div>
                                    </div>
                                    <div className="my-3 hidden min-[920px]:block w-[20%]">
                                        <div className="max-w-30 px-2 py-1 border-1 border-gray-400 bg-gray-300 text-center "> {status} </div>
                                    </div>
                                </div>

                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        </>
    )
}