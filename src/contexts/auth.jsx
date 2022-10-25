import React, { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    let loginUsuario = ["joao.barreto"];

    const login = (usuario, senha) => {

        if(senha === "senha" && usuario === loginUsuario) {
            setUser({ id: "123", usuario })
            navigate("/Home");
        } else {
            alert("Tudo errado filho!");
        }

        console.log ('login auth', {usuario, senha}) 
    };

    const logout = () => {
        console.log ("logout");
        setUser(null);
        navigate('/Login');
    };

    return (

        <AuthContext.Provider value = {{ authenticated: !!user,user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
