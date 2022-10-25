import React from 'react';
import "../css/Login.css";
import { useState, useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';


export default function Login() {

  const { authenticated, login } = useContext(AuthContext);
  
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.table("submit",{usuario, senha});

    login(usuario, senha);
  }
  
  return (
    
    <React.Fragment>
        <div className="container">
          <div className="centralBox">
            <h1> Login: </h1>
            <form onSubmit={handleSubmit}>
              
              {/* Usuário */}
              <input type="text" className="User" placeholder="Usuário"
              value = {usuario}
              onChange = {(e) => setUsuario(e.target.value)}
              />

              {/* Senha */}
              <input type="password" className="Password" placeholder="Senha"
              value = {senha}
              onChange = {(e) => setSenha(e.target.value)}
              />

              <button className="button" > Entrar </button>
            </form>
          </div>
        </div>
    </React.Fragment>
    
 );
}