import { AiOutlineFileProtect } from "react-icons/ai";

import { FaDatabase } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { NavLink, Outlet } from "react-router";

const Profile = () => {
  const Language = JSON.stringify(window.localStorage.getItem("Language"));
  function ChangeTextByLanguage(Text: string, newText: string) {
    if (Language == '"English"') {
      return Text;
    } else {
      return newText;
    }
  }

  const DetailsList = [
    {
      id: 1,
      Title: ChangeTextByLanguage("Profile", "صفحتي"),
      link: "/Account/profile",
      Element: <FaDatabase />,
    },
    {
      id: 2,
      Title: ChangeTextByLanguage("Change Password", "تغيير كلمه المرور"),
      link: "/Account/changepassword",
      Element: <RiLockPasswordFill />,
    },
    {
      id: 3,
      Title: ChangeTextByLanguage("My Insurance", "تأميني الطبي"),
      link: "/Account/my",
      Element: <AiOutlineFileProtect />,
    },
  ];

  const TransitionLanguage = {
    Language: `${Language == '"English"' ? "flex" : "flex-row-reverse"}`,
  };
  return (
    <>
      <div
        className={`my-4 h-[57vh] mx-64 max-sm:mx-3 flex  ${TransitionLanguage.Language} max-sm:flex-col gap-10 max-sm:gap-5`}
      >
        <div className="bg-white h-fit rounded-lg w-64 max-sm:w-full flex flex-col">
          {DetailsList.map((el) => (
            <NavLink
              to={el.link}
              className={`${el.id == 1 ? "rounded-t-lg" : null} ${
                el.id == 3 ? "rounded-b-lg" : null
              }  p-1`}
            >
              <div
                className={`flex ${TransitionLanguage.Language} gap-3 items-center mx-5`}
              >
                <h1>{el.Element}</h1>
                <h1 className="font-bold">{el.Title}</h1>
              </div>
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
