import type { RouteObject } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/home/page";
import Laboratory from "../pages/laboratory/page";
import Collection from "../pages/collection/page";
import Distribution from "../pages/distribution/page";
import Devis from "../pages/devis/page";
import Contact from "../pages/contact/page";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/laboratoire",
    element: <Laboratory />,
  },
  {
    path: "/collection",
    element: <Collection />,
  },
  {
    path: "/distribution",
    element: <Distribution />,
  },
  {
    path: "/devis",
    element: <Devis />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;