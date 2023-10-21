import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import MainLayout from "./Layouts/MainLayout";
import Update from "./pages/Update";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/create",
          element: <CreateUser />,
        },
        {
          path: "/update/:id",
          element: <Update />,
        },
      ],
    },
  ]);
  return (
    <div className="h-screen">
      <RouterProvider router={routes} />;
    </div>
  );
}

export default App;
