import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "react-tippy/dist/tippy.css";
//import reportWebVitals from './reportWebVitals';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./routes/Index";
import P404 from "./routes/P404";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Index />,
		errorElement: <P404 />,
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
