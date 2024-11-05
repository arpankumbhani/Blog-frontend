import React from "react";

const Home = React.lazy(() => import("./views/home/Home"));
const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const HomeDetailPage = React.lazy(() =>
  import("./views/homeDetailPage/HomeDetailPage")
);
const AuthorPage = React.lazy(() => import("./views/authorPage/AuthorPage"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "dashboard", name: "Dashboard", element: Dashboard },
  { path: "home", name: "Home", element: Home },
  { path: "home/:postId", name: "Home Detail", element: HomeDetailPage },
  { path: "home/author/:authorId", name: "Author Detail", element: AuthorPage },
];

export default routes;
