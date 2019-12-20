import Home from "../containers/Home";
import Blog from "../containers/Blog";

const routes = [
  {
    path: "/",
    strict: true,
    component: Home,
    exact: true,
    name: "Home"
  },
  {
    path: "/blog",
    component: Blog,
    exact: true,
    strict: true,
    name: "Blog"
  }
];

export default routes;
