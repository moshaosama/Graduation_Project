import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";
import { useGetHistories } from "../Hook/ueGetHistories";
import { useOpenSideBar } from "../Hook/useOpenSideBar";
import clsx from "clsx";

export const SideBarHistory = () => {
  const { Histories } = useGetHistories();
  const { OpenSidebar, handleTriggerSidebar } = useOpenSideBar();

  return (
    <>
      {OpenSidebar ? null : (
        <div className="mx-8">
          <BsLayoutSidebarReverse
            size={35}
            className="cursor-pointer hover:bg-gray-300 p-2 rounded-xl"
            onClick={handleTriggerSidebar}
          />
        </div>
      )}

      <div
        className={clsx(
          "sticky top-5 transition-all duration-500 bg-gray-300 p-5 rounded-r-lg shadow-xl",
          OpenSidebar ? "w-96 opacity-100" : "w-0 opacity-0"
        )}
      >
        <div className="flex justify-between items-center">
          <img
            src="/download-removebg-preview (6).png"
            alt="ChatGbt.logo"
            className="w-7 h-7 object-fill"
          />
          <BsLayoutSidebar
            size={35}
            className="cursor-pointer hover:bg-gray-300 p-2 rounded-xl"
            onClick={handleTriggerSidebar}
          />
        </div>
        <div className="mt-10 flex flex-col gap-2">
          {Histories?.History?.data?.result?.flatMap((el: any) =>
            el?.Data?.map((msg: any, index: number) => (
              <div
                key={index}
                className="hover:bg-gray-500 transition-all duration-300 p-2 rounded-lg cursor-pointer"
              >
                <h1>{msg?.MessageRequest?.message}</h1>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
