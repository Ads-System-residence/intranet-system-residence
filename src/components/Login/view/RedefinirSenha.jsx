import React from 'react'
import '../css/RedefinirSenha.css';
export default function RedefinirSenha() {
  return (
    <React.Fragment>
    
    <div class="container">
        <div class="centralBox">
            <h1>Redefinir senha:</h1>

            <input type="password" class="Novasenha" placeholder= "Digite a nova senha"/>
            <input type="password" class="Confirmenovasenha" placeholder= "Confirme a nova senha"/>
            <button class="Button">Redefinir</button>
        </div>
    </div>
    </React.Fragment>
  )
}
