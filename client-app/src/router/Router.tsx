import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import ImoveisDashboard from "../features/imoveis/dashboard/ImoveisDashboard";
import ImoveisDetails from "../features/imoveis/details/ImoveisDetails";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            //{path: '', element: },
            {path: 'imoveis', element: <ImoveisDashboard/>},
            {path: 'imoveis/:id', element: <ImoveisDetails/>},
        ]
    }
]

export const router = createBrowserRouter(routes);