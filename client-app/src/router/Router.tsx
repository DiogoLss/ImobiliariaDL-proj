import { createBrowserRouter, RouteObject } from "react-router-dom";
import App from "../App";
import HomePage from "../features/homePage/HomePage";
import ImoveisDashboard from "../features/imoveis/dashboard/ImoveisDashboard";
import ImoveisDetails from "../features/imoveis/details/ImoveisDetails";


export const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {path: '', element: <HomePage/>},
            {path: 'imoveis', element: <ImoveisDashboard key={'imoveis'}/>},
            {path: 'imoveis/filtrados', element: <ImoveisDashboard key={'filtrado'}/>},
            {path: 'imoveis/:id', element: <ImoveisDetails/>},
        ]
    }
]

export const router = createBrowserRouter(routes);