import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Plants from "./Pages/Plants/Plants";
import Details from "./Pages/Details/Details";
import Layout from "./Components/Layout/Layout";

const routers = createBrowserRouter([
    { path: "/", element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: "plants", element: <Plants /> },
        { path: "details/:id", element: <Details /> }
        ]
    }
]);

function App() {
    return <RouterProvider router={routers} />;
}

export default App;
