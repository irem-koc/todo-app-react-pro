const { createContext, useState } = require("react");

export const Context = createContext();

const ContextProvider = ({children}) => {
    const [username, setUsername] = useState()

    const values ={
        username, setUsername
    }
    return(
        <Context.Provider value={values}>{children}</Context.Provider>
    )
}
export default ContextProvider;