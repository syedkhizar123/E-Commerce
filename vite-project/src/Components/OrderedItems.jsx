

export const OrderedItems = ({img , name , price , quantity , size , date , payment , status}) => {
    
    return (
        <>
       
            <div className="w-[90%] sm:w-[80%] mx-auto max-w-[1320px] flex flex-col flex-md-row space-between  justify-between  py-2 border-t border-t-gray-200 border-b border-b-gray-200 gap-3">
                <div className="flex">
                    <div>
                        <img src={img} className="h-[100%] w-[80px] my-auto" />
                    </div>
                    <div>
                        <p className="text-md ml-3 mt-1 font-semibold mb-1">{name}</p>
                        <div className="flex ml-3 gap-2">
                            <p className="mt-0 mb-1 ">${Math.round(price)}</p>
                            <p className="mt-0 mb-1">Quantity: {quantity}</p>
                            <p className="mt-0 mb-1">Size: {size}</p>
                        </div>
                        <div className="flex gap-2 ml-3 ">
                            <p className="text-sm font-semibold mb-1">Date:</p>
                            <p className="text-sm mb-1">{date}</p>
                        </div>
                        <div className="flex gap-2 ml-3">
                            <p className="text-sm font-semibold">Payment:</p>
                            <p className="text-sm">{payment}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center align-items-center d-none d-sm-none d-md-flex">
                    <p className=" px-4 py-1 my-auto"><span className="text-green-500 text-lg">●</span> {status}</p>
                </div>
                <div className="flex justify-center align-items-center sm:mr-0 md:mr-4 d-none d-sm-none d-md-flex">
                    <div className="border-1 border-gray-200 px-4 py-1">
                        Track Order
                    </div>
                </div>
                <div className=" d-flex d-sm-flex d-md-none mt-2 justify-between">
                    <div className="flex justify-center align-items-center ">
                        <p className="  py-1 my-auto"><span className="text-green-500 text-lg">●</span> {status}</p>
                    </div>
                    <div className="flex justify-center align-items-center sm:mr-0 md:mr-4 ">
                        <div className="border-1 border-gray-200 px-4 py-1">
                            Track Order
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}