import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState(['']);

    const peticion = data => {
        console.log(data)
    }
    const addToUser = (data) => {
        setUserData(data);
        peticion(data);
    }

    return (
        <>
            <UserContext.Provider value={{ userData, addToUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;