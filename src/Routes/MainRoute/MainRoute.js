import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import Homepage from "../../Pages/HomePage/Homepage";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Homepage></Homepage>
            },
        ]
    },
    {
        path: '/blog',
        element: <Blog></Blog>
    }
])

export default routes;