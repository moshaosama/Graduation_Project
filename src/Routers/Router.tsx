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
import CreateNewMedicine from "../Pages/CreateNewMedicine";
import ListMedicine from "../Pages/ListMedicine/ListMedicine";
import EditMedicine from "../Pages/EditMedicine/editMedicine";

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
          path: "createmedicine",
          element: <CreateNewMedicine />,
        },
        {
          path: "listmedicine",
          element: <ListMedicine />,
        },
        {
          path: "listmedicine/:id",
          element: <EditMedicine />,
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
