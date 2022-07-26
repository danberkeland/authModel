import React, { useState, createContext } from 'react';

export const UserContext = createContext();


export const UserProvider = (props) => {

    const [ sub, setSub ] = useState('')
    const [ authType, setAuthType ] = useState(0);
    
 
    return (
        <UserContext.Provider 
            value={{    
                sub, setSub,
                authType, setAuthType,
            }}>
            {props.children}
        </UserContext.Provider>
    );   
    
};

