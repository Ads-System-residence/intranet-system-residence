//Importação ReactDom
import React from 'react'
import { Navigate, Route } from 'react-router-dom';

import validationToken from './Common/miscellaneous';

export default function PrivateRoute({ isAuthenticated = false, component: Component, ...rest }) {

  const tokenAcessSystem = "EgMHkeOy33Bk1Uobe5NQiKQypem28Ai2OIxYqd2BACy0qguxcji3ewcpfMnGg69A0fIdObN2YfK0DHy9gorEWdC63461d96c65ff"
  const tokenActive = validationToken(tokenAcessSystem);

  if (!tokenActive) window.localStorage.removeItem("token");

  return (
    <Route {...rest}>
      render={props => {
        return isAuthenticated === !!tokenActive ? (
          <Component {...props} />
        ) : (
          <Navigate 
            to={{ 
              pathname: "/", 
              state: {from: props.location }
            }}
          />
        )
      }}
    </Route>
  );
};
