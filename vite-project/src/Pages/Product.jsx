import { useParams } from "react-router-dom"
import { Container, Row } from "react-bootstrap"
import { useEffect, useState, useContext } from "react"
import { DynamicProductCard } from "../Components/Dynamicproduct"
import { Review } from "../Components/Review"
import { ProductCard } from "../Components/ProductCard"
import { ProductsContext } from "../Contexts/ProductsContext"

export const Product = () => {
    const { AllProducts } = useContext(ProductsContext)
    const { id } = useParams()
    const [item, setItem] = useState(null)
    const [related, setRelated] = useState([])
    useEffect(() => {
        if (!item) return; 

        const filtered = AllProducts.filter((product) =>
            product.category === item.category &&
            product.subCategory === item.subCategory &&
            product.id !== item.id
        );

        setRelated(filtered.slice(0, 5));
    }, [item, AllProducts]);
    useEffect(() => {
        const getProduct = AllProducts.find((item) => item.id == parseInt(id))
        setItem(getProduct)
    }, [id, AllProducts])

    if (!item) {
        return (
            <>
                <h1 className="text-center mx-auto mt-5">Product not found</h1>
            </>
        )
    }

    return (
        <>
            <DynamicProductCard img={item.img} name={item.name} price={item.price} description={item.description} Product={item} sizes={item.sizes} />
            <Review />
            <h1 className="mt-5 mb-3 text-center">
                RELATED PRODUCTS ---
            </h1>
            <Container className="mx-auto">
                <Row className="text-center">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 gap-y-6 ">
                        {
                            related.map((item, index) => (
                                // <ProductCard key={index} id={item.id} img={item.img} name={item.name} price={item.price} />
                                <ProductCard key={index} id={item.id} name={item.name} img={item.img[0]} price={item.price} />
                            ))
                        }

                    </div>
                </Row>
            </Container>
        </>
    )
}