import { DetailsList } from "../Data/DetailsListData";
import { NavLink, Outlet } from "react-router-dom";
import useTransition from "../Hook/useTransition.tsx";

const ProfileUser = () => {
  const { TransitionLanguage } = useTransition();
  return (
    <>
      <div
        className={`my-24  mx-64 max-sm:mx-3 flex  ${TransitionLanguage.Language} max-sm:flex-col gap-10 max-sm:gap-5`}
      >
        <div className="bg-white border-[1px] border-solid border-black shadow-xl h-fit rounded-lg w-64 max-sm:w-full flex flex-col">
          {DetailsList.map((el) => (
            <NavLink
              to={el.link}
              key={el.id}
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
        <Outlet />
      </div>
    </>
  );
};

export default ProfileUser;
