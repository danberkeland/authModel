import React, { useState, createContext } from 'react';

export const UserContext = createContext();


const initialFormState = {
    username: "",
    password: "",
    newPassword: "",
    email: "",
    location: "",
  };


export const UserProvider = (props) => {

    const [ user, setUser ] = useState()
    
    const [ chosen, setChosen ] = useState({
        locName: '',
        locNick: ''
    });
    const [formData, setFormData] = useState(initialFormState);
    const [formType, setFormType] = useState();

    
 
    return (
        <UserContext.Provider 
            value={{    
                user, setUser,
                chosen, setChosen,
                formData, setFormData,
                formType, setFormType
            }}>
            {props.children}
        </UserContext.Provider>
    );   
    
};

