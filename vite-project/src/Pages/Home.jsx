import { Container, Row } from "react-bootstrap"
import { Hero } from "../Components/hero"
import { ProductCard } from "../Components/ProductCard"
import { Policies } from "../Components/Policies"
import { useContext, useEffect } from "react"
import { ProductsContext } from "../Contexts/ProductsContext"

export const Home = () => {

    const { AllProducts } = useContext(ProductsContext)
    const latest = AllProducts.slice(0 , 10)
    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    console.log(Backend_URL)
    const fiveItem = AllProducts.slice(10, 15)


    return (
        <>
            <Hero />
            <div className="mt-[100px]">
                <h1 className="mt-5 mb-3 text-center ">
                    LATEST COLLECTIONS ---
                </h1>
                <p className="text-secondary text-center w-[95%] mx-auto max-w-[1320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque optio quidem sint  </p>
                <Container className="mx-auto">
                    <Row className="text-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-6">
                       
                        {latest.map((item , index) => (
                            
                                <ProductCard key={index} id={item.id} img={item.img[0]} name={item.name} price={item.price} />
                            
                        ))}
                    </div>
                </Row>
            </Container>

        </div >
        <div className="mt-[100px]">
                <h1 className="mt-5 mb-3 text-center">
                    BEST SELLERS ---
                </h1>
                <p className="text-secondary text-center w-[95%] mx-auto max-w-[1320px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cumque optio quidem sint </p>
                <Container className="mx-auto">
                    <Row className="text-center">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3  gap-y-6">
                      
                       {
                        fiveItem.map((item , index) => (
                            
                                <ProductCard key={index} id={item.id} name={item.name} img={item.img[0]} price={item.price} />
                            
                        ))
                       }
                        
                    </div>
                </Row>
            </Container>
            <Policies />

        </div >
        </>
    )
}