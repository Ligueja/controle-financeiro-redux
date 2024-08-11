import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "../pages/Home";
import { Extrato } from "../pages/Extrato";
import { DefaultLayout } from "../configs/layout/DefaultLayout";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    ),
  },
  {
    path: "/extrato",
    element: (
      <DefaultLayout>
        <Extrato />
      </DefaultLayout>
    ),
  },
]);

export function AppRouter() {
  return <RouterProvider router={appRouter} />;
}
