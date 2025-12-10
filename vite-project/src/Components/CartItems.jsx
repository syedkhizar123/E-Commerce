import { useContext } from "react"
import { CartContext } from "../Contexts/CartContext"

export const CartItems = () => {

    const { cart, removeFromCart } = useContext(CartContext)
   if(cart.length === 0){
    return ( 
        <>
            
        </>
    )
   }

    return (

        <>
        {cart.map((item , index) => (
             <div key={index} className="w-[90%] sm:w-[80%] max-w-[1320px] mx-auto flex space-between  justify-between  py-2 border-t border-t-gray-200 border-b border-b-gray-200 gap-3">
                <div className="flex">
                    <div>
                        <img src={item.img} className="h-[100%] w-[80px] my-auto" />
                    </div>
                    <div>
                        <p className="text-lg ml-3 mt-1 font-semibold mb-2">{item.name}</p>
                        <div className="flex ml-3 gap-2">
                            <p className="mt-1 text-md">${Math.round(item.price)}</p>
                            <div className="bg-gray-100 h-[30px] w-[30px] flex justify-center text-center align-items-center border-1 border-gray-300">
                                <p className="text-md pt-[15px]">{item.size}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center align-items-center ">
                    <p className="border-1 border-gray-200 px-4 py-1 my-auto">{item.quantity}</p>
                </div>
                <div className="flex justify-center align-items-center sm:mr-0 md:mr-4">
                    <img onClick={() => removeFromCart(item.id , item.size)} className="h-[20px] w-[20px] cursor-pointer" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAbFBMVEX///8EAAAAAAANBgavr6/Pz89vbm74+Pjn5+fz8/PCwsLr6+vg4ODv7++ioaFIR0c+PT0tKyuYl5eIiIiAf396eXnV1dW4t7dUUlJEQ0OOjo4oJye9vb3JyMizsrKrqqogHx9cW1tPTk42NDQIYh7GAAADVElEQVR4nO3d7VbiMBCA4XaqImpBREFB6KL3f49LBoV4NIWyGRLc9/09p83jZ2nRFAUREREREVHGTZ8rObxqeJF6wR3rvXTgbRrdpl50p4ZSdk1GvdSr7tCgO3BNnKVedodejhLOz+eTWMsxwlLO5zvx9kjhdeqFHxxChPn3nwn3XMqcv1CaxU24xaucv/CudbT364V9hHmG0AthpiH0Qphpv1/ov8bfs+wv1zTJX+NP2q4w/Zb+spvW0ak/enHg8RcTE9/l/eH3PkuveKNeo9f4wEaOe9Fn0notD7GBdxn5NFlEFq4yA5ZyHxfYL7MT7vk11LXsvkjXxMtfLhSJ/CvjT3bCMvJTjofshE9xgUUxyosoVfQHVfXwHy9Dju7H071bXKW/rspv5zwB8KfTvS0NfF6V98phanuqdRNfaH62Tb7Q/i0UlwgNQhg3hBYhjBtCixDGDaFFCOOG0CKEcUNo0aHCuhk/Dvbdmb4ePI6btgeHGQubzT2V9rt+s81Qy5OkfIUPm1tIIquWQz19Dj0GR7IVTrb3yGQQPNL2CbDITWgmW+HVdqjlT0V2f3giz6GZXIU970FH8M0K3ns2REIfhmyF/tsxQk+Jrv3F9wNDZyEMPelDqCG0CKELoYZQQ2gRQhdCDaGG0CKELoQaQg2hRQhdCDWEGkKLELoQagg1hBYhdCHUEGoILULoQqgh1BBahNCFUEOoIbQIoQuhhlBDaBFCF0INoYbQIoQuhBpCDaFFCF0INYQaQosQuhBqCDWEFiF0IdQQaggtQuhCqCHUEFqE0IVQQ6ghtAihC6GGUENoEUIXQg2hhtAihC6EGkINoUUIXQg1hBpCixC6vghDO0Dc+kPn9j/Zi7ftkEgdmOnNd0Pz0IGyFTa7xV8FjzTeDQV3uMhWuN33QIIbBxRF/3N/AZmHvg0zFtbvHxu/tu0uffcxU4U/CvkKi2LwXpXzcfCTs2k2qqpRyyYsWQvXX4WhnzF+dftQ3sIYIbQIYdwQWoQwbggtQhi31MKl+dkmiYVvV9at0gpLsa9MKzxtCBEiTC6UUwlfkgmrEwlnyYTtewvHq5Y0RAk+HojeNAlRWjYWjt7NCS5lvmd/Dew3nZlfkH5tvAzum0xERERERGTfXzyHWdY7l7t9AAAAAElFTkSuQmCC" />
                </div>
            </div>
        ))}
            
        </>

    )
}