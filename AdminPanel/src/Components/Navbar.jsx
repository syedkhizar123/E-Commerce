import {Nav} from "react-bootstrap"
import { NavLink } from "react-router-dom"

export const Navbar = () => {


    return (
        <>
            <div className="w-[90%] h-20 bg-white-900 flex justify-between  max-w-[1320px] mx-auto ">
                <div className="my-[20px]  ">
                    <p className="text-2xl text-black-800 font-semibold pt-1"> EASYWEAR </p>
                </div>
                <div className="my-[20px]">
                    <Nav.Link as={NavLink} to="https://e-commerce-adminpanel-iota.vercel.app/" >
                        <button className="px-4 py-2  bg-gray-600 text-white font-medium rounded hover:bg-gray-700">
                        Logout
                    </button>
                    </Nav.Link>
                    
                </div>
            </div>
            <div className="w-[100%] border-b border-gray-300 " >
               
            </div>
        </>
    )
}