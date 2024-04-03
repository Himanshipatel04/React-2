import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Route, RouterProvider, createRoutesFromElements } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Github from "./Pages/Github";
import User from "./Pages/User";
import { loaderinfo } from "./Pages/Github";


// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       },
//       {
//         path:'github',
//         element:<Github />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="" element= {<Home/>} />
    <Route path="about" element= {<About/>} />
    <Route  loader={loaderinfo} path="github" element= {<Github/>} />
    <Route
    path="user/:username" 
    element= {<User/>} />
  </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
