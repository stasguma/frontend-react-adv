import { Suspense, lazy } from "react";
import { RouteObject } from "react-router-dom";

import Layout from "../layouts/Layout";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Error404 = lazy(() => import("../pages/Error404"));

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
];

export default routes;
