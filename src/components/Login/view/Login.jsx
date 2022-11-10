import React from 'react';
import "../css/Login.css";
import { useState } from 'react';
import LoginAPI from "../api/api";
import { redirect } from "../../../Common/miscellaneous";
import { UserInfo } from "../../../Common/Util/storage";


export default function Login() {


  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [tentativasLogin, setTentativasLogin] = useState(0);

  const handleSubmit = (e) => {
    LoginAPI.autenticarUsuario(usuario, senha).then((res) => {
          if (res.erro) {
            setTentativasLogin(tentativasLogin + 1);
          } else  {
              UserInfo(res);
              redirect("/Home");
          }
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