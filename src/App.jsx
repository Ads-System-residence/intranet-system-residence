//Importação react
import React from 'react';
import {Route, Switch } from "react-router-dom";

//Importação componentes internos
import Login from "./components/Login/view/Login.jsx";
import Home from "./components/Home/view/Home.jsx";


function App() {
  return (
    <>
        <Switch>
          <Route path="/" exact  component={() => <Login />} />
          <Route path="/Home" component={() => <Home/>} />
        </Switch>
    </>
  );
}
export default App;
