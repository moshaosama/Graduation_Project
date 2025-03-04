import { CiLocationOn } from "react-icons/ci";
import ButtonForm from "../Form/ButtonForm";
import { BiPhoneCall } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { useMemo, useState, useTransition } from "react";
import { useDispatch } from "react-redux";
import { fetchCreateContact } from "../../Store/Reducer/Contact/CreateContact";
import { AppDispatch } from "../../Store/Store";

const FormContactUs = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ListInput = useMemo(
    () => [
      {
        Label: "Name",
        placeHolder: "YourName",
      },
      {
        Label: "Email",
        placeHolder: "Email Address",
      },
    ],
    []
  );

  const [, startTransition] = useTransition();

  const [Comment, setComment] = useState({
    Name: "",
    Email: "",
    Comment: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setComment({ ...Comment, [e.target.name]: e.target.value });
    });
  };

  const handleClick = (event?: React.ChangeEvent<HTMLButtonElement>) => {
    event?.preventDefault();
    dispatch(fetchCreateContact(Comment));
  };
  return (
    <div className="border-[3px] border-solid m-10 h-fit mx-36 p-[2.4pc] rounded-md shadow-2xl border-gray-500">
      <h1 className="text-3xl font-bold text-[#343437] flex justify-center">
        Contact US
      </h1>
      <div className="flex items-center mt-10 mx-5">
        <form action="" className="w-1/2 flex flex-col gap-2">
          {ListInput?.map(
            (el: { placeHolder: string; Label: string }, index: number) => {
              return (
                <div key={index}>
                  {/* <Inputs
                    Label={el.Label}
                    Type="text"
                    placeHolder={el.placeHolder}
                    ChangeEvent={handleChange}
                    Active={false}
                  /> */}

                  <input
                    type="text"
                    className="w-96 rounded-lg p-3"
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
            className="w-96 rounded-lg px-3 h-20"
            onChange={(el: React.ChangeEvent<HTMLTextAreaElement>) => {
              setComment({ ...Comment, Comment: el.target.value });
            }}
          />
          <div className="mt-3">
            <ButtonForm Value={"Send"} Width={"96"} handleClick={handleClick} />
          </div>
        </form>
        <div className="flex flex-col gap-7">
          <div className="flex items-center gap-3">
            <CiLocationOn className="text-xl" />
            <p>Akhbar Academy, 6th of October city</p>
          </div>
          <div className="flex items-center gap-3">
            <BiPhoneCall className="text-xl" />
            <p>+20 1004365707</p>
          </div>
          <div className="flex items-center gap-3">
            <MdEmail className="text-xl" />
            <p>mohamedOSFekry@gmail.com</p>
          </div>

          <div className="flex gap-7">
            <BsYoutube />
            <BsFacebook />
            <BsInstagram />
            <BsTwitter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactUs;
