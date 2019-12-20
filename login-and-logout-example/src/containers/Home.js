import React from "react";
import { NavLink } from "react-router-dom";

import routes from "../routes/routes";

class Home extends React.Component {
  logOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div>
        {routes.map((item, index) => (
          <div key={index}>
            <NavLink
              to={item.path}
              activeStyle={{ color: "red" }}
              exact={item.exact}
              strict={item.strict}
            >
              {item.name}
            </NavLink>
          </div>
        ))}
        <button onClick={this.logOut}>Çıkış</button>
      </div>
    );
  }
}

export default Home;
