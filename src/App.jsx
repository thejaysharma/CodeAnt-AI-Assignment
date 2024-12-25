import { createBrowserRouter, RouterProvider } from "react-router";
import NotFound from "./pages/404NotFound";
import Repositories from "./pages/repositories";
import Home from "./pages/home";
import Layout from "./pages/layout";
import Login from "./pages/login";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/repositories",
        element: <Repositories />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ],
  }
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
