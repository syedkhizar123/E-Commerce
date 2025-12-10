import { Col, Container, Row } from "react-bootstrap"
import { ProductCard } from "../Components/ProductCard"
import { use, useContext, useEffect, useState } from "react"
import { ProductsContext } from "../Contexts/ProductsContext"

export const Collection = () => {

    const { AllProducts } = useContext(ProductsContext)
    const [products, setProducts] = useState([])
    const [selectedCategory, setSelectedCategory] = useState([])
    const [selectedSubCategory, setSelectedSubCategory] = useState([])
    const [showFilters, setShowFilters] = useState(true)

    // Stores the selected category
    const handleChecked = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setSelectedCategory((prev) => [...prev, value])
        }
        else {
            setSelectedCategory((prev) => prev.filter((item) => item !== value))
        }
    }

    // Stores the selected SubCategory
    const handleCheckedSubCategory = (e) => {
        const { value, checked } = e.target

        if (checked) {
            setSelectedSubCategory((prev) => [...prev, value])
        }
        else {
            setSelectedSubCategory((prev) => prev.filter((item) => item !== value))
        }
    }

    const filter = () => {
        let filtered = AllProducts

        if (selectedCategory.length > 0) {
            filtered = filtered.filter((item) => selectedCategory.includes(item.category))
            if (selectedSubCategory.length > 0) {
                filtered = filtered.filter((item) => selectedSubCategory.includes(item.subCategory))
            }
        }
        if (selectedSubCategory.length > 0) {
            filtered = filtered.filter((item) => selectedSubCategory.includes(item.subCategory))
            if (selectedCategory.length > 0) {
                filtered = filtered.filter((item) => selectedCategory.includes(item.category))
            }
        }

        setProducts(filtered)
    }
    useEffect(() => {
        filter()
    }, [selectedCategory, selectedSubCategory, AllProducts])




    return (
        <>

            <Container className="">
                <div className="w-full justify-around mx-auto flex flex-col sm:flex-row ">
                    <div className="mx-auto w-[100%] sm:w-[30%] text-start flex flex-col">
                        <div className="flex gap-2 mt-2"> <h5 className="mb-3">FILTERS </h5>
                            <img
                                onClick={() => setShowFilters(!showFilters)}
                                className="h-4 block sm:hidden mt-1"
                                src={
                                    showFilters
                                        ? "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAACUlJSYmJj5+fmfn5/7+/vv7+/09PTo6Ojr6+s5OTmcnJzY2NhEREQpKSkcHBzf398ODg5WVlZdXV1iYmJ+fn4XFxckJCQqKiofHx8vLy9KSkpPT09vb2+9vb2zs7PS0tLCuLEaAAADBElEQVR4nO3b2VYqMRSE4QRBJgUcmRzf/yUlC8+RITv0kJ1OWP9360WlVrUNSmMMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAft2Ox8OkgcPx+DZh3OfM7sx7/UR5/d7cBc4+E+VNpvafrySBX//zppMUeff2wCBB4OAw8F4/b2Rt2oqD48CReuCLTVvxpKB9Uc47vkYTVDwtqH+dvp4l2jvFuPOC9lUxzlmcRyqu6CloF2ppe55IvRV9Ba1VCvs19GYqVfQXtMpvpvyhKhWFgsobmqUQexM96U5I0v499NxLdSpKC6rfS7+lYNuLmiMtaO131ByPdzE65opywaeIKX4jMTviijdyiP77Us/7tugrygum+NsiQcWuC6pXDFyiiQoqV+x+QSdQse3tJrDgQ5SzV6S2Yg6X6N6Dzoq9TBZ0AhWbr5jLJbqnsGJOCzrRV8xrQSdyxUDBcfSzVxS1Yo4Fo1bMs6AxY/lc9W43gZtMks8qZIGKdVbMdUEnyor5LuhEWDGwYAYFjZm0XVFe8DHtB82ilivKC+ZSMLji5YpywWU2BVtVLGFBZ/LYsGIZCzrCRzZO6HYj32SWCf5tWM+wyYrygovsCgYrSivKC24yLNhgxbIWdEbSR2/+FeUFV6ketqotUPF8RXnBVaYLOqNN5YpywXW2Czoj37MavopywXnWBXcVV5UqygW3mRc0pi9fqH+3G/kms075FGlDFVaUF9xkv6DTn19YscSXiWP98Iplvkwcu90GVgz8DhayoNNfizWexJ/k/jJxLLCiZFvAXfRQ7YqlFdxVnF5uVXTBnTorbrs+bCM1VpyWuKBTteK064M2V61iwQWNmVUoOOv6kO1crlh4QWPeLhR86/qA7YUrXkHB0FPF1r53fbg45IpXUlCuqP/MdjL+P5muqKC/4lUVNOb5rOBz10eK7bTi1RU8/Xqt+pddu/BxUPCj68Po+HsKX/OLtZ0a9tzf/dteZs8gRFbMP30BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABy9gPL/xo0JWK8TgAAAABJRU5ErkJggg=="
                                        : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADm5ubz8/MkJCQwMDD19fXw8PBXV1dQUFBZWVlTU1MsLCzk5OQpKSkmJiZeXl5mZmbExMStra2YmJjY2NgfHx9LS0vQ0NCDg4Pr6+sYGBhDQ0MODg6MjIw6Ojpzc3Nra2uMgwEvAAADEklEQVR4nO2d61LbMBSEZVJsbiE0F3IBAn3/l2wKLZPg7Qw/nNH42/2eQDvaoz2KLKWUEEIIIYQQwgjo5ovFpq09ivOx2z41B2ZLqsbVY/OX54vaYzkL0/vmkzukxIfmiEugxHlzwowncXuqsPmBk3j1RSHPqOuvCnESH3oKaUZd9hXClpvVi5DIMupeKGRFf3ujJKKMOrnGz2InJaJqse3F/ntoTGuPa0Amt1IiaRY7KRFlVAOJE1mLqNBo5Yp6T5Joa1TULBrUos5FlFENalHvNFAN3H96VNIs6uUGZVQtEbVfNNj161o0iH5ULToYVeciSaKBUQ0ktuLQBmZUHRqo5WYilxuWUaVEVgMnaxFlVINZdKhFg9DgN3BaIsuoBhJda5G163c1KmoW08AR8N31o45t+A2cQWhoiajlxiE0cmwDIMc2BAyMaiDRwKgOxzZ8ozo0cAa5yP96yuB7VFujonLRITT4Eh0aOLmiopYbgy/8DW7bOOw0pFFRDZxBLTrctsl1aQBaImq5cQgNg+vS/Dc2DBo4LREVGrqBe+1qj2tAdC2+1R7WkGijbmoPa0hkaOxrj2pQVHdzU3tQwzKd9RSua49pUPBziK9D/FqKz0MtENTT4N9+0wJBewv8/hC/x8c/pYX/rc20BkkxQX/mFW9RLRC0yOhOBh8ToKDH16COCZBF8T/j4y2KF8jf0eO3S3iLplUbOdnRj520amMHb1G8wLRqY4dv0Ry+jJy0amMnhy9jh29R+iKDjwn8N/j4O036XhpoBvEX0vGPCuAF4i2KF8i3KP2hJPxrpVogaAbxrwbjn7nC/+UD/m879AziBZIs6pmDeIuSdvQ/LS0KatVMa5AUE7IGQYcvfIvKGcQLJMWEFIgPepBFC30Gyy/LGgRZFC9Q1yCoVdM1SGrVPC0K2g+WN3hMlD19Blcv8BosS7hFSxFbXlIOHlizLXqgd05PE1i2bIsemJMXmQ9OlhqcRf9wHIikoD9i8/hP4HpXeyxnYrd9el9jlm3tkZyPbr5YbMD6QgghhBBCCN/iN2OMJtWmSsaKAAAAAElFTkSuQmCC"  
                                } />
                            {/* <img  onClick={() => setShowFilters(!showFilters)} className="h-4 block sm:hidden mt-1" src={ ` ${showFilters ? src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII=" : " data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAkCAYAAACJ8xqgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAAEJwAABCcASbNOjQAAAGASURBVEhLrZa7cYQwFEX5RiRbwpawLoEEhtAVeN2BOzCuxHYFJMzwSWjBJVCCIzLA74KQWRAgBGcG0GOGw9WHERrIsizM8/y9Kw6iJ0lyN03zk9Wh53kfrK2EQbywNgjxAtZWwqiq6pmuP32paUh7RKrjFEXRxXGcgpo31KCu69cgCL5YKU0nBGdJuRBQV6/UZUiv/Z390gchEEnbtn3yfZ+P8xoGu3IoTUmpXGqW/Z1OWNBa5UOxxizhwDRp0zS/uq67W0kXhUBFuioEe6WbQiCSYqIw3qjHzCZFxHSi6HO90FHgRajHSCUcmCallCWldcdJdwnBlnS3EKxJlYQgjuObZVkFxhP1IJWaFBG2bWu0fFj1j5IQXSZZRMdDOqUunzoppy4bGRmQEk5lJFr8njeFe2RgVbhXBhaFKjIgFKrKwEw4lQGaUbVNCnuzQHaXlQEuHG30U9k3K6Xouiz6a1CRAf1MGTDOlAGDlgR/mDaityMyDi2VME3TE36JNe0PEvQ33QXCa5oAAAAASUVORK5CYII="} `} /> */}
                        </div>
                        <div className={`${showFilters ? "block" : "hidden sm:block"} border-1 border-gray-500 flex flex-col text-start w-[100%] sm:w-[90%] `}>
                            <h6 className="ml-4 mt-3">CATEGORIES</h6>
                            <div className="flex gap-1 ml-4">
                                <input type="checkbox" id="Men" value="Men" onChange={handleChecked} className="my-1 mr-2 cursor-pointer" />
                                <label htmlFor="Men" className="my-1 cursor-pointer ">Men</label>
                            </div>
                            <div className="flex gap-1 ml-4">
                                <input type="checkbox" id="Women" value="Women" onChange={handleChecked} className="my-1 mr-2 cursor-pointer" />
                                <label htmlFor="Women" className="my-1 cursor-pointer ">Women</label>
                            </div>
                            <div className="flex gap-1 ml-4 mb-3">
                                <input type="checkbox" id="Kids" value="Kids" onChange={handleChecked} className="my-1 mr-2 cursor-pointer" />
                                <label htmlFor="Kids" className="my-1 cursor-pointer ">Kids</label>
                            </div>

                        </div>
                        <div className={` ${showFilters ? "block" : "hidden sm:block"} border-1 border-gray-500 flex flex-col text-start mt-4 w-[100%] sm:w-[90%]`}>
                            <h6 className="ml-4 mt-3">TYPE</h6>
                            <div className="flex gap-1 ml-4">
                                <input type="checkbox" id="Topwear" value="Topwear" onChange={handleCheckedSubCategory} className="my-1 mr-2 cursor-pointer" />
                                <label htmlFor="Topwear" className="my-1  cursor-pointer">Topwear</label>
                            </div>
                            <div className="flex gap-1 ml-4">
                                <input type="checkbox" id="Bottomwear" value="Bottomwear" onChange={handleCheckedSubCategory} className="my-1 mr-2 cursor-pointer" />
                                <label htmlFor="Bottomwear" className="my-1  cursor-pointer">Bottomwear</label>
                            </div>
                            <div className="flex gap-1 ml-4 mb-3">
                                <input type="checkbox" id="Winterwear" value="Winterwear" onChange={handleCheckedSubCategory} className="my-1 mr-2 cursor-pointer" />
                                <label htmlFor="Winterwear" className="my-1 cursor-pointer">Winterwear</label>
                            </div>

                        </div>
                    </div>

                    <div className="mx-auto w-[100%] sm:w-[70%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-6 mt-5">
                        {products.map((item, index) => (
                            <ProductCard key={index} id={item.id} name={item.name} img={item.img[0]} price={item.price} />
                        ))}

                    </div>
                </div>
            </Container>
        </>
    )
}