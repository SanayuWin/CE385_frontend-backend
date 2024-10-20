import HomePage from "@/pages/home";
import CategoriesPage from "@/pages/category";
import MainLayout from "@/components/layouts/layout.main";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "@/components/layouts/layout.error404";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "/categories",
            element: <CategoriesPage />,
          },
        ],
    },
    {
        path: "*",
        element: <Error404 />,
    },
])


export default function Router() {
    return <RouterProvider router={router} />;
}