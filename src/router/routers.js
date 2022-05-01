import Home from "pages/home";
import Details from "pages/details";
import Error from "pages/exception";
const routers = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/details/:id',
        component: <Details />
    },
    {
        path: '*',
        component: <Error />
    },
]
export default routers