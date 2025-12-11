import React from "react"
import { NavLink } from "react-router-dom"
import { useState, useContext } from "react"
import { Nav } from "react-bootstrap"
import user from "../assets/user.png"
import CartImg from "../assets/cart.png"
import menu from "../assets/menu.png"
import { CartContext } from "../Contexts/CartContext"
import { useEffect } from "react"
import { AuthContext } from "../Contexts/AuthContext.jsx"

export const Navbar = () => {

    const [visible, setVisible] = useState(false)
    const { cart } = useContext(CartContext)
    let noOfItems = 0
    if (cart.length > 0) {
        cart.map((item) => noOfItems = noOfItems + item.quantity)
    }


    const { loginStatus } = useContext(AuthContext)
    const [navigateUser, setNavigateUser] = useState("")
    useEffect(() => {

        if (loginStatus) {
            setNavigateUser("/orders")
        } else {
            setNavigateUser("/login")
        }
    }, [loginStatus])



    return (
        <>

            <div className="w-[95%] h-20 bg-white-900 flex justify-between mb-3 max-w-[1320px] mx-auto border-b border-gray-200 pb-3">
                <div className="my-4">
                    <p className="text-2xl text-black-800 font-semibold pt-2"> EASYWEAR </p>
                </div>
                <div className="my-4 mx-8 flex  space-around gap-x-4 hidden min-[840px]:flex">

                    <Nav className=" hidden min-[840px]:flex">
                        <Nav.Link as={NavLink} to="/" className="text-dark">
                            HOME
                            <hr className="text-black-500  hidden" />
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/collection" className="text-dark">
                            COLLECTION
                            <hr className="text-black-500 hidden" />
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/about" className="text-dark">
                            ABOUT
                            <hr className="text-black-500 hidden" />
                        </Nav.Link>
                        <Nav.Link as={NavLink} to="/contact" className="text-dark ">
                            CONTACT
                            <hr className="text-black-500 hidden" />
                        </Nav.Link>
                        
                    </Nav>
                </div>
                <div className="flex m-4 gap-2 flex justify-around gap-1">
                    <Nav.Link as={NavLink} to="https://e-commerce-adminpanel-iota.vercel.app/" className="text-dark ">
                            <button className="px-3 py-1 border rounded-5 bg-black text-white mt-2 hidden min-[840px]:block">
                                Admin
                            </button>
                        </Nav.Link>
                    <Nav.Link as={NavLink} to={navigateUser}><p className="pt-2 h-8 w-8 cursor-pointer"><img src={user} alt="User Logo" /></p></Nav.Link>
                    <Nav.Link as={NavLink} to="/cart">
                        <div className="relative h-6 w-6 cursor-pointer">
                            <img src={CartImg} alt="Cart" className="h-6 w-6 mt-2.75" />
                            <span className="absolute -bottom-1 -right-1 bg-black text-white text-xs font-bold h-4 w-4 flex items-center justify-center rounded-full">
                                {noOfItems}
                            </span>
                        </div>
                    </Nav.Link>
                    <p className="pt-2.5 ml-1 block min-[840px]:hidden h-7 w-7 cursor-pointer"><img onClick={() => { setVisible(!visible) }} src={menu} alt="" /></p>
                </div>
            </div>

            <div className={`absolute top-0 bottom-0 right-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className="flex flex-col text-gray-600">
                    <div className="p-4" onClick={() => { setVisible(false) }}>
                        Back
                    </div>
                    <Nav.Link onClick={() => { setVisible(false) }} className="py-2 px-3 border bg" as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link onClick={() => { setVisible(false) }} className="py-2 px-3 border bg" as={NavLink} to="/collection">Collection</Nav.Link>
                    <Nav.Link onClick={() => { setVisible(false) }} className="py-2 px-3 border bg" as={NavLink} to="/about">About</Nav.Link>
                    <Nav.Link onClick={() => { setVisible(false) }} className="py-2 px-3 border bg" as={NavLink} to="/contact">Contact</Nav.Link>
                    <Nav.Link onClick={() => { setVisible(false) }} className="py-2 px-3 border bg" as={NavLink} to="https://e-commerce-adminpanel-iota.vercel.app/">Admin</Nav.Link>



                </div>
            </div>


        </>
    )
}