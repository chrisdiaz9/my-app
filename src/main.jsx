import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { KindeProvider } from "@kinde-oss/kinde-auth-react";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <KindeProvider
      clientId="c1184e6e92ef40099ce73348bfcfc039"
      domain="https://drippp.kinde.com"
      redirectUri="http://localhost:5173/dashboard"
      logoutUri="http://localhost:5173"
    >
      <RouterProvider router={router} />
    </KindeProvider>
  </StrictMode>
);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
//   {
//     path: "dashboard",
//     element: <Dashboard />,
//   },
// ]);

// createRoot(document.getElementById("root")).render(
//   <StrictMode>
//     <KindeProvider
//       clientId="c1184e6e92ef40099ce73348bfcfc039"
//       domain="https://drippp.kinde.com"
//       redirectUri="http://localhost:5173"
//       logoutUri="http://localhost:5173"
//     >
//       <App />
//     </KindeProvider>
//   </StrictMode>
// );
