import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Blog from "../../Pages/Blog/Blog";
import Homepage from "../../Pages/HomePage/Homepage";
import WebsiteDetailsPage from "../../Pages/MyProjects/WebsiteDetailsPage";
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
    },
    {
        path: '/myCreatedSite/:id',
        loader: ({ params }) => fetch(`https://arif-uddin-portfolio-side-server.vercel.app/myAllSites/${params.id}`),
        element: <WebsiteDetailsPage></WebsiteDetailsPage>
    }
])

export default routes;