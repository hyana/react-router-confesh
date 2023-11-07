import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './contracts.jsx'
import Root, { loader as rootLoader } from "./routes/root";
import ErrorPage from './error-page.jsx';
import Contact from './routes/contact.jsx';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: rootLoader, // loading data
    children: [
      {
        path: "contacts/:contactId",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);