import { createContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [auth, setAuth] = useState([])
}