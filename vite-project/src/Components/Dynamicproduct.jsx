import { useContext, useState } from "react"
import { CartContext } from "../Contexts/CartContext"
import { useEffect } from "react"

export const DynamicProductCard = ({ img, name, price, description, Product , sizes}) => {

    const star = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg=="
    const [selectedSize, setselectedSize] = useState(null)
    const { addToCart } = useContext(CartContext)
    const [ mainImg , setMainImg] = useState(img[0])
    useEffect(() => {
        setMainImg(img[0])
    } , [img])
    function AddToCart(){
            addToCart(Product, selectedSize)
    }

    return (
        <>
            <div className="flex flex-col sm:flex-row mx-auto justify-center text-center gap-4 mt-5 w-[95%] sm:w-[90%] mb-5 max-w-[1320px] sm:max-h-[700px] " >
                <div className="w-[90%] sm:w-[60%] sm:h-[500px] lg:h-[auto]  mx-auto sm:mx-0 flex flex-col-reverse  sm:flex-row justify-center gap-2  ">
                    <div className="flex  sm:flex-col  gap-2  overflow-hidden ">
                        {
                            img.map((item , index) => {
                                return(
                                    <img src={item} key={index} onClick={() => { setMainImg(item) }} className=" w-[25%] sm:w-auto sm:h-[25%]  overflow-hidden cursor-pointer" />
                                )
                            })
                        }

                    </div>
                    <img src={mainImg} className=" w-[100%] sm:w-[75%] md:w-[75%] h-auto sm:h-[80%] md:h-[100%] " />
                </div>
                <div className="flex flex-col w-[90%] sm:w-[40%] mx-auto sm:mx-0 my-auto">
                    <p className="font-bold uppercase text-2xl text-start">{name}</p>
                    <div className="flex gap-1">
                        <img src={star} className="h-[15px] w-[15px]" />
                        <img src={star} className="h-[15px] w-[15px]" />
                        <img src={star} className="h-[15px] w-[15px]" />
                        <img src={star} className="h-[15px] w-[15px]" />
                        <img className="h-[15px] w-[15px]" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBtVZLUsJAEO0OaFmuuIHhBIJLyg/ZWIIL8QTGI3gCOQKcQG+gLKwswVLLnXID4AbZiR/S9owEyWQSJxZ5izB00/2mH9M9QcgIevDqYMEZzKiH+81b0ziEjKAnbwQENq98+Hwvo3Pqm8RZkAGyGkkigCUoblRMYzMRScmWgXQChshGBFBXvrtgCGOiqGwhsCTtqySKybbgMpPPiIheb0oQly2ES33pT4U83oveSKaqAGElJcuYn4NEv+g5mebRI8gV5P9IR3JHOfLgnOgLnPzIaCjyR0YQj5dLJmzDykAd3G1eiFVs1s374oo9NvwXQp0CuVhr3oem2PHGvcZASoloPJkVcPy0ukwi86ZFcHWjTJVxJbzRss6V3rCIRleACRIromfPhhmMICs2Axt3jieqObkiQuMrIII3y9WZk4kC8ysgAtLPRC2RlE3MN32mDmBQZdHbej/U6eVuSzUW9bmEbKTuVO2NIZ9KsY733LTQ4md32aSXLqCWYtH3RthzANd/xCdU9FuFDwVsY+2om/QTdBpj/jjn8TVejC+kWFtojzf1+T9ax234sCboHA7BEDJujQ74NaynvoZ9A1WXpcuUkbt/AAAAAElFTkSuQmCC" alt="" />
                    </div>
                    <p className="font-bold text-3xl text-start mt-4">${price}</p>
                    <p className="text-secondary font-medium text-start w-[100%] sm:w-[80%]">{description}</p>
                    <p className="text-start text-lg font-medium mt-4">Select Size</p>
                    <div className="flex gap-2 mt-2">
                        {
                            sizes.map((item) => {
                                return (
                                    <div key={item} onClick={() => { setselectedSize(item) }} className={`bg-gray-100 h-[45px] w-[50px] flex justify-center text-center pt-2 border-1 border-gray-200 cursor-pointer ${selectedSize === item ? "border-black" : "border-gray-200"}`}>
                                        <p className="font-medium">{item}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <button onClick={() => AddToCart()} className="mt-4 bg-black  text-white w-[170px] h-[50px]">
                        ADD TO CART
                    </button>
                    <hr className="mt-5" />
                    <div className="flex flex-col ">
                        <p className="text-grey-700 text-secondary text-sm text-start font-semibold">100% Original product.</p>
                        <p className="text-grey-700 text-secondary text-sm text-start font-semibold">Cash on delivery is available on this product.</p>
                        <p className="text-grey-700 text-secondary text-sm text-start font-semibold">Easy return and exchange policy within 7 days.</p>

                    </div>
                </div>
            </div>
        </>
    )
}