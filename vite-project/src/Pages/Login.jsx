import { LoginSignup } from "../Components/LoginSignup"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    
    return(
        <>
            <LoginSignup title="LOGIN" link="/signup" text="Don't have an account ? Signup" />
        </>
    )
}