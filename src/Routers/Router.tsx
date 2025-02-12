import { createBrowserRouter } from "react-router";
import Layout from "../Layout/layout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Profile from "../Pages/Profile";
import InfoProfile from "../Components/ProfileData/infoProfile";
import ChangePassword from "../Components/ProfileData/changePassword";
import { RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Doctor from "../Pages/Doctor";
import FormContact from "../Components/findDoctorForm/findDoctorContent/FormContact/formContact";
import Contact from "../Pages/Contact";
import MedicineTracker from "../Pages/MedicineTracker";

const Router_pages = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
          children: [
            {
              index: true,
              element: <FormContact />,
            },
            {
              path: "doctor",
              element: <Doctor />,
            },
          ],
        },
        {
          path: "profile",
          element: <Profile />,
          children: [
            {
              path: "info",
              element: <InfoProfile />,
            },
            {
              path: "changepassword",
              element: <ChangePassword />,
            },
          ],
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "medicinetracker",
          element: <MedicineTracker />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "doctors",
          element: <Doctor />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Router} />;
};

export default Router_pages;
