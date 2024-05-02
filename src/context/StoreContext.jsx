/* eslint-disable react/prop-types */
import { createContext, useState } from "react";
import ResponseMessage from "../components/ResponseMessage";

export const Store = createContext();

const StoreContext = ({ children }) => {
    const [response, setResponse] = useState({
        type: '',
        content: ''
    });

    const handleResponseMessage = (type, content) => {
        setResponse({
            type: type,
            content: content
        });

        setTimeout(() => {
            setResponse({
                type: '',
                content: ''
            });
        }, 3000);
    }

    let contextData = {
        response,
        setResponse,
        handleResponseMessage
    }

    return (
        <Store.Provider value={contextData}>
            <ResponseMessage type={response.type} content={response.content} />
            {children}
        </Store.Provider>
    )
}

export default StoreContext;