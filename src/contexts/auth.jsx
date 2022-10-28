import React, { createContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const usuarioLogado = {
        id: "123",
        usuario:"joao.barreto",
    }

    useEffect(() => {
        
        const recuperacaoUsuarioLogado = localStorage.getItem("usuario");

        if(usuarioLogado){
            setUser(JSON.parse(recuperacaoUsuarioLogado));
        }

        setLoading(false);
    }, []);


    const login = (usuario, senha) => {
        

        localStorage.setItem("usuario", JSON.stringify(usuarioLogado));


        if(senha === "senha") {
            setUser(usuarioLogado);
            navigate("/Home");
        } else {
            alert("Tudo errado filho!");
        }

        console.log ('login auth', {usuario, senha}) 
    };

    const logout = () => {
        console.log ("logout");
        localStorage.removeItem("usuario");
        setUser(null);
        navigate('/');
    };

    return (

        <AuthContext.Provider value = {{ authenticated: !!user,user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}
