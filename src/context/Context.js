const { createContext, useState } = require("react");

export const Context = createContext();

const ContextProvider = ({ children }) => {
    const [username, setUsername] = useState();
    const [show, setShow] = useState(false);
    const [date_input, setDate_input] = useState("");
    const [title_input, setTitle_input] = useState("");
    const values = {
        username,
        setUsername,
        show,
        setShow,
        date_input,
        setDate_input,
        title_input,
        setTitle_input,
    };
    return <Context.Provider value={values}>{children}</Context.Provider>;
};
export default ContextProvider;
