import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/Home";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
