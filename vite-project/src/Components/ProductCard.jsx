import { Link } from "react-router-dom"


export const ProductCard = ({id , img , name , price}) => {
    return (
        <>
            <div className="flex flex-col gap-1 w-full">
                <div className="overflow-hidden w-full h-[250px]">
                <Link to={`/product/${id}`}><img className="h-full hover:scale-110 transition ease-in-out w-[100%]" src={img} /></Link>
                </div>
                <span className="text-start">{name}</span>
                <p className="text-start font-semibold">${price}</p>
            </div>
         

        </>
    )
}