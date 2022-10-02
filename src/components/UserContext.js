import { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const [userData, setUserData] = useState({});

    const peticion = () => {
        console.log(userData)
        fetch(`/api/message/${JSON.stringify(userData)}`, { method: "POST" }).then((res) => res.json());
    }

    const addToUser = (data) => {
        setUserData(data);
    }

    return (
        <>
            <UserContext.Provider value={{ userData, addToUser, peticion }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider;