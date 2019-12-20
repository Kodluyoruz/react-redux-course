import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes/routes";

const Blog = () => (
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
  </div>
);

export default Blog;
