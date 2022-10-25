import React from 'react'
import '../css/PerguntaSeguranca.css';

export default function PerguntaSeguranca() {
  return (
     
    <React.Fragment>
     
      <div class="container">
        <div class="centralBox">
            <h1>Responda a pergunta de segurança!</h1>
      

           <form>
             <input type="text" class="User" placeholder="Usuário"></input>
             <input type="text" class="Answer" placeholder="Qual o nome do seu pet?"></input>
             <button class="button">Verificar!</button>
           </form>

        </div>
      </div>



   </React.Fragment>
  );
 }