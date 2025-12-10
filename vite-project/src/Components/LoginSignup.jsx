import { NavLink } from "react-router-dom"
import { Nav } from "react-bootstrap"
import { useState } from "react"
import React from "react"
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";



export const LoginSignup = ({ title, link, text }) => {

    const Backend_URL = import.meta.env.VITE_BACKEND_URL
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { setCart } = useContext(CartContext)
    const { setLoginStatus } = useContext(AuthContext)
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        const endpoint = title === "LOGIN" ? Backend_URL + "/api/users/login" : Backend_URL + "/api/users/register";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password })
            })

            const data = await response.json();

            if (response.status !== 200) {
                toast.error(data.message || "Something went wrong");
            }

            else {
                setEmail("");
                setPassword("");
                console.log(data);
                localStorage.setItem("token", data.token);
                toast.success(title + " SUCCESSFUL");
                setLoginStatus(true);
                navigate("/")

                const userID = data.user._id
                const cartResponse = await fetch(Backend_URL + '/api/cart/', {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${data.token}`
                    }
                })
                const cartData = await cartResponse.json();
                if (cartResponse.status === 200) {
                    setCart(cartData.cart);
                }
                else {
                    toast.error("Failed to fetch cart data");
                }
            }
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="text-center mt-5">
                <h3 className="text-center mt-5 mb-3 ">{title}</h3>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-3 mx-auto">
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="border-1 border-gray-500 p-2 w-[90%] sm:w-[450px] mx-auto" placeholder="Enter your email" />
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="border-1 border-gray-500 p-2 w-[90%] sm:w-[450px] mx-auto" placeholder="Enter your password" />
                    </div>
                    <button className="bg-black text-white w-[90%] sm:w-[450px] px-4 py-2  my-3 mx-auto text-center">
                        {title}
                    </button>
                </form>
                <Nav.Link as={NavLink} to={link}>
                    {text}
                </Nav.Link>

            </div>
        </>
    )

}