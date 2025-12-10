import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"
import { useState  , useContext} from "react"
import { LoginContext } from "../Contexts/LoginContext"

export const LoginComponent = () => {

    const { isLogin , setIsLogin } = useContext(LoginContext)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const checkLogin = () => {
        if (email.trim() === "" || password.trim() === "") {
            toast.warning("Email and Password are required")
        } else {
            if (email.trim() === "admin@gmail.com" && password.trim() === "admin123") {
                setIsLogin(true)
                navigate("/")
            } else {
                toast.error("Invalid email or password")
            }
        }

    }

    return (
        <>
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center  bg-gray-100 rounded p-5 w-[95%] max-w-[550px] mx-auto">
                    <h1 className="text-center mt-5 mb-3 ">Admin Login</h1>
                    <form >
                        <div className="flex flex-col gap-3 mx-auto">
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="border-1 border-gray-500 p-2 w-[100%] sm:w-[450px] mx-auto" placeholder="Enter your email" />
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="border-1 border-gray-500 p-2 w-[100%] sm:w-[450px] mx-auto" placeholder="Enter your password" />
                        </div>
                        <button onClick={checkLogin} type="button" className="bg-black text-white w-[100%] sm:w-[450px] px-4 py-2  my-3 mx-auto text-center">
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </>
    )
}