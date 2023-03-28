import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        setData({name: 'Geone', age:35})
    },[])

    return (
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}