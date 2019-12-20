import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Login from "./containers/Login/Login";
import Error from "./containers/Error";
import routes from "./routes/routes";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={Login} />
        {routes.map((item, index) => (
          <PrivateRoute
            key={index}
            path={item.path}
            component={item.component}
            exact={item.exact}
            strict={item.strict}
          />
        ))}
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
