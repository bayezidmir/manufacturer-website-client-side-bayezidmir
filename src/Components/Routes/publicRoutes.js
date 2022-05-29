import Blog from "../Pages/Blog/Blog";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyPortfolio from "../Pages/MyPortfolio/MyPortfolio";
import NotFound from "../Pages/NotFound/NotFound";

export const publicRoutes = [
  { path: "/", Component: Home },
  { path: "/home", Component: Home },
  { path: "/login", Component: Login },
  { path: "/portfolio", Component: MyPortfolio },
  { path: "/blog", Component: Blog },
  { path: "/register", Component: Register },
  { path: "*", Component: NotFound },
];
