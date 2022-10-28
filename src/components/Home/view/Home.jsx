import React from 'react';

import { useContext } from 'react';
import { AuthContext } from '../../../contexts/auth';



export default function Home() {

  const { authenticated, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  }

  return (
    <React.Fragment>
        <h6>Teste Componente Home</h6>
        <p>{String(authenticated)}</p>
        <button onClick={handleLogout}> Sair </button>
    </React.Fragment>
  )
}