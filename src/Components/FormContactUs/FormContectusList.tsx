import React, { useState, useTransition } from "react";
import ButtonForm from "../Form/ButtonForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../Store/Store";
import { fetchCreateContact } from "../../Store/Reducer/Contact/CreateContact";
import useDelay from "../../Hooks/useDelay";
import { Bounce, toast, ToastContainer } from "react-toastify";
import useNotifytoastify from "../../Hooks/useNotifytoastify";

const FormContectusList = () => {
  const [, startTransition] = useTransition();
  const [pending, setPending] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const [Comment, setComment] = useState({
    Name: "",
    Email: "",
    Comment: "",
  });
  const { notifySuccess, notifyError } = useNotifytoastify();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setComment({ ...Comment, [e.target.name]: e.target.value });
    });
  };

  const { delay } = useDelay();

  const handleClick = async (event?: React.MouseEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    setPending(true);
    try {
      if (Comment.Name == "" || Comment.Email == "" || Comment.Comment == "") {
        notifyError("Error");
      } else {
        await delay(1000);
        dispatch(fetchCreateContact(Comment));
        notifySuccess("Successfully created contact");
      }
    } catch (error) {
      notifyError("Error");
    } finally {
      setPending(false);
    }
  };
  const ListInput = [
    {
      Label: "Name",
      placeHolder: "YourName",
    },
    {
      Label: "Email",
      placeHolder: "Email Address",
    },
  ];
  return (
    <>
      <form action="" className="w-1/2 flex flex-col gap-2">
        {ListInput?.map(
          (el: { placeHolder: string; Label: string }, index: number) => {
            return (
              <div key={index}>
                <input
                  type="text"
                  className="w-96 rounded-lg p-3 bg-gray-200"
                  placeholder={el.placeHolder}
                  name={el.Label}
                  onChange={handleChange}
                />
              </div>
            );
          }
        )}
        <textarea
          placeholder="Your Message"
          className="w-96 rounded-lg px-3 bg-gray-200 h-20"
          onChange={(el: React.ChangeEvent<HTMLTextAreaElement>) => {
            setComment({ ...Comment, Comment: el.target.value });
          }}
        />
        <div className="mt-3">
          <ButtonForm
            Value={pending ? "Loading..." : "Send"}
            Width={"96"}
            handleClick={handleClick}
          />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
            transition={Bounce}
          />
        </div>
      </form>
    </>
  );
};

export default FormContectusList;
