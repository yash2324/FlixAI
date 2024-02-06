import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login";
import Browse from "./Browse";
import PlayMovie from "./PlayMovie";

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
    {
      path: "/movie/:movieId",
      element: <PlayMovie />,
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
