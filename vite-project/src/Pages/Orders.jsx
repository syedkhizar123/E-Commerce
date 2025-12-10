import { OrderedItems } from "../Components/OrderedItems"
import { useState, useEffect, useContext } from "react"
import { OrderContext } from "../Contexts/OrderContext"
import { AuthContext } from "../Contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
export const Orders = () => {

    const { loginStatus , setLoginStatus } = useContext(AuthContext)
    const { order } = useContext(OrderContext)
    const navigate = useNavigate()
    const now = new Date()

    const logout = () => {
        if(loginStatus){
            localStorage.removeItem("token")
            setLoginStatus(false)
            navigate("/")
        }
    }

    return (
        <>
            <div className="w-[90%] sm:w-[80%] mx-auto max-w-[1320px] my-5 flex justify-between">
                <h3 className=" ">YOUR ORDERS --</h3>
               
                <img className="h-6 pe-2" onClick={() => logout()} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEX///8AAAAkJCTJycnm5uZGRkbq6urW1tZfX1+fn59aWlr5+fne3t4oKChubm5HR0fQ0NCHh4d3d3eysrKPj4/CwsLz8/NTU1M/Pz9/f38RERGZmZloaGi1tbUuLi6pqak1NTUaGhqTk5M1aKvaAAADqElEQVR4nO2di3LaQAxFbXDA2IbwJhAgj///yMK0aTF2mbTeK63kez4gO2e4WdZrSSQJIYQQQgghJCZGGYJSW+sX21WRPz8h2OXLN227pMxeUiyLTFdwD/a7cHhVFMye8IIXPrdagtVARDBNCyXF8igkmKZrHcOFmGCabjQEN4KC6U5BsCwkDdOTvOFIZh/9IpffbN5EBdP3kbjhWtZQfq8pl8KGE2nDUf08eh4EZ1o3LMQN6xvNaRic+ay2Qq5sOAYsMaEhFhoGgIZgaBgAGoKhYQBoCIaGAaAhGBoGgIZgaBgA/4arw8291McMsMJDBAzLze3FVAVY4SEChsrQ0D40tA8N7UND+9DQPjS0Dw3tQ0P70NA+NMRSnvDFmLqGC4EyN1XDa4V5ge4Z0jT8Wdo6AysqGn71CICDqmf4pwkCG1Q1w9vqa2hQtQzrbSzIoCoZ3vfpAIOqYlg2GwRwQVUxzM4NQ1xQdVJaPbcogj5Fpf/DatpUBAVVay+dtyhigqr2fSgWVL0zjVRQFc+lQkHVfLaQCarq86FIUHWf8SWCqnwTJRBU7bs2fFC1DfFBVTeEB1XfEB3UCAzBQY3BEBvUKAyhQY3DEBnUSAyBQY3FEBfUaAxhQY3HEBXUiAxBQY3JMKlaxuJ1Duo/GK6KHMyxJaedg/p9w+2sZXkJOgb1+4bis3p+0y2oFgy7BdWEYaeg2jDsElQjhh2CasUw/e8ptlYM3X+G7v8P3e+l7r8Ppc40/s+lyfB1AuZtf2gKyj1bCDB+bxHs+kdjMnT/jO/+nsb9XZv7+1L3d97u31u4f/fk/v2h+3fA7t/ju6/FcF9P474myn1dm/vaRPf1pe5rhN3Xebuv1Xffb+G+Z8Z935P73jX//Yf+e0j99wEnPejl7kE/fg9mKvRgLkYPZpv0YD5ND2YM9WBOlAQ0tA8N7UND+9DQPjS0Dw3tQ0P70NA+NLQPDQMwXt2yAazwEAHD+i884q8P7xA39PgbljQEQ8MA0BAMDQNAQzA0DAANwdAwADQEQ8MA0BDMnWEFWCIuw8kwOPN6ybP8PU19GONhOghOvfHgU9pQfK7ORNowaZbNYxG/L002H7KGiL3sMeOW7g4gS3TBbAt7UUPxjeZCKSl4lg9p0uxfQSK/z1wpj2KCaxXBJKkGQoIFvqr7L2S5iOBeTfASVIEN9fCq53dVzFqGhQdlkakKXtmul/nzE4CXXT7T2UNbGGUIFI4xhBBCCCGEEAA/AGX6VmNGgZ4AAAAAAElFTkSuQmCC" />
            </div>
            {order.map((item, index) =>
                item.products.map((product, productIndex) => {
                    let status;
                    let orderDate = new Date(item.orderDate)
                    let diff = (now - orderDate) / (1000 * 60 * 60 * 24)

                    if (diff >= 5) {
                        console.log(diff)
                        status = "Delivered"
                    } else if (diff > 2) {
                        status = "Shipped"
                    } else {
                        console.log(diff)
                        status = "Placed"
                    }
                    return <OrderedItems key={productIndex} img={product.img} name={product.name} price={product.price} quantity={product.quantity} size={product.size} date={item.orderDate.slice(0, 10)} payment={item.paymentMethod} status={status} />
                })
            )}

        </>
    )
}