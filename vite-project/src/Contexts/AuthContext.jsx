import { createContext , useState , useEffect } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [ loginStatus , setLoginStatus ] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token){
            setLoginStatus(true)
        } else {
            setLoginStatus(false)
        }
    } , [])

    return(
        <AuthContext.Provider value={{ loginStatus , setLoginStatus }}>
            {children}
        </AuthContext.Provider>
    )
}