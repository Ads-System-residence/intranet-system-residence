import React from 'react';
import "../css/Login.css";
import { useState } from 'react';
import LoginAPI from "../api/api";


export default function Login() {


  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [tentativasLogin, setTentativasLogin] = useState(0);

  const handleSubmit = (e) => {
    debugger;
    LoginAPI.autenticarUsuario(usuario, senha).then((res) => {
          window.location.href = "/Home"
          if (res.erros) {
            setTentativasLogin(tentativasLogin + 1);
      }
      debugger;
    });
  }
  
  return (
    
    <React.Fragment>
        <div className="container">
          <div className="centralBox">
            <h1> Login: </h1>
            <div>
              
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

              <button className="button" onClick={(e) => handleSubmit(e)} > Entrar </button>
            </div>
          </div>
        </div>
    </React.Fragment>
    
 );
}