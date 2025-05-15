import { createBrowserRouter } from "react-router";
import Layout from "../Layout/layout";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import InfoProfile from "../Components/ProfileData/infoProfile";
import ChangePassword from "../Components/ProfileData/changePassword";
import { RouterProvider } from "react-router-dom";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import Doctor from "../Pages/Doctor";
import CreateNewMedicine from "../Pages/CreateNewMedicine";
import ListMedicine from "../Pages/ListMedicine/ListMedicine";
import EditMedicine from "../Pages/EditMedicine/EditMedicine";
import AllSpeciality from "../Pages/AllSpeciality";
import Contact from "../Pages/Contact";
import ProfileDoctor from "../Pages/ProfileDoctor";
import JoinNewDoctor from "../Pages/JoinNewDoctor";
import PersonalInfoProvider from "../features/JoinNewDoctor/Context/PersonalInfoContext";
import MedicinesRender from "../Components/MedicinesProductRender/MedicinesRender";
import AboutUs from "../Pages/AboutUs";
import PrivacePolicy from "../Pages/PrivacePolicy";
import BookDoctor from "../Pages/BookDoctor";
import MyAppointements from "../Pages/MyAppointements";
import ProfileUser from "../features/Profile/Component/ProfileUser";
import ProfileAsDoctor from "../features/Profile/Component/ProfileAsDoctor";
import OpenChatApiProvider from "../features/PopUpChatBot/Context/useOpenChatApi";
const Router_pages = () => {
  const Router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: (
            <OpenChatApiProvider>
              <Home />
            </OpenChatApiProvider>
          ),
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "profile",
          element: <ProfileUser />,
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
          path: "profile-doctor",
          element: <ProfileAsDoctor />,
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
          path: "joinnewdoctor",
          element: (
            <PersonalInfoProvider>
              <JoinNewDoctor />
            </PersonalInfoProvider>
          ),
        },
        {
          path: "signup",
          element: <SignUp />,
        },
        {
          path: "doctors",
          children: [
            {
              index: true,
              element: <Doctor />,
            },
            {
              path: ":id",
              children: [
                {
                  index: true,
                  element: <ProfileDoctor />,
                },
                {
                  path: "bookdoctor",
                  element: <BookDoctor />,
                },
              ],
            },
          ],
        },
        {
          path: "specialty-directory",
          element: <AllSpeciality />,
        },
        {
          path: "medicine-library",
          element: <MedicinesRender />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "privacy-policy",
          element: <PrivacePolicy />,
        },
        {
          path: "myappointments",
          element: <MyAppointements />,
        },
      ],
    },
  ]);
  return <RouterProvider router={Router} />;
};

export default Router_pages;
