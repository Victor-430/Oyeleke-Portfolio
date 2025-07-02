import { createBrowserRouter } from "react-router";
import NotFound from "../components/NotFound";
import HomePage from "../Pages/HomePage";

const MainLayout = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default MainLayout;
