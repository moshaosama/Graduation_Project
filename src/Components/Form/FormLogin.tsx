import { loginProps } from "../../Types/User/Login";

const FormLogin = ({ Title, Type, Id, CahngeEvent }: loginProps) => {
  return (
    <>
      <div className="my-7 ">
        <p className="flex flex-col">
          <label htmlFor={Id} className="font-bold">
            {Title} <span className="text-red-500">*</span>
          </label>
          <input
            type={Type}
            name={Id}
            id={Id}
            className="my-2 rounded-lg p-2 border-[2px] border-black"
            onChange={CahngeEvent}
          />
        </p>
      </div>
    </>
  );
};

export default FormLogin;
