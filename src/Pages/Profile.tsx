import { NavLink, Outlet } from "react-router";

const Profile = () => {
  const DetailsList = [
    {
      id: 1,
      Title: "Profile",
      link: "/Account/profile",
    },
    {
      id: 2,
      Title: "Change Password",
      link: "/Account/changepassword",
    },
    {
      id: 3,
      Title: "My Insurance",
      link: "/Account/my",
    },
  ];
  return (
    <>
      <div className="my-4 mx-64 max-sm:mx-3 flex gap-10">
        <div className="bg-white h-fit rounded-lg w-64 max-sm:w-full flex flex-col">
          {DetailsList.map((el) => (
            <NavLink
              to={el.link}
              className={`${el.id == 1 ? "rounded-t-lg" : null} ${
                el.id == 3 ? "rounded-b-lg" : null
              }  p-1`}
            >
              <h1>{el.Title}</h1>
            </NavLink>
          ))}
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Profile;
