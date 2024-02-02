import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Browse from "./Browse";
import Footer from "./Footer";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Outlet />
      </RouterProvider>
    </div>
  );
};
export default Body;
