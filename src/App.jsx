//Importação react
import { useState } from 'react';
import React, { useContext } from 'react';
import {Route, Routes, Navigate } from "react-router-dom";

//Importação componentes internos
import Login from "./components/Login/view/Login.jsx";
import Home from "./components/Home/view/Home.jsx";
import PrivateRoute from './privateRoute.js';

import { AuthProvider, AuthContext } from './contexts/auth.jsx';

function App() {

  const Private = ({children}) => {
    const {authenticated} = useContext(AuthContext);

    if (!authenticated){
      return <Navigate to = "/" />
    }

    return children;
  }

  return (
    <div>
      <AuthProvider >
        <Routes >
          <Route exact path="/"  element={<Login />} />
          <Route exact path="/Home" element={<Private> <Home/> </Private>} />
          {/* <PrivateRoute path="/home" exact element={() => <Home />} isAuthenticated /> */}
        </Routes >
      </AuthProvider>
    </div>
  );
}
export default App;
