import ButtonForm from "../../../../Components/Form/ButtonForm";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../Store/Store";
import { fetchCreateContact } from "../../../../Store/Reducer/Contact/CreateContact";
import { Bounce, ToastContainer } from "react-toastify";
import useNotifytoastify from "../../../../Hooks/useNotifytoastify";
import { useForm } from "react-hook-form";

const FormContectusList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { notifySuccess, notifyError } = useNotifytoastify();

  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm();

  const handleSubmitForm = async (data: any) => {
    try {
      dispatch(fetchCreateContact(data));
      notifySuccess("Successfully created contact");
    } catch (error) {
      notifyError("Error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(handleSubmitForm)}
        className="w-1/2 grid grid-col-2"
      >
        <p className="flex flex-col">
          <label htmlFor="Name" className="font-bold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Name"
            className="my-2 rounded-lg p-2 border-[2px] border-black"
            {...register("Name", { required: "Name is required" })}
          />
        </p>
        <p className="text-red-500 font-bold">
          {errors.Name?.message as string}
        </p>
        <p className="flex flex-col">
          <label htmlFor="Email" className="font-bold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="Email"
            className="my-2 rounded-lg p-2 border-[2px] border-black"
            {...register("Email", { required: "Email is required" })}
          />
        </p>
        <p className="text-red-500 font-bold">
          {errors.Email?.message as string}
        </p>
        <p className="flex flex-col">
          <label htmlFor="Comment" className="font-bold">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            className="w-96 max-sm:w-[21.5pc] border-2 border-black rounded-lg px-3 h-20"
            {...register("Comment", { required: "Comment is required" })}
          />
        </p>
        <p className="text-red-500 font-bold">
          {errors.Comment?.message as string}
        </p>
        <div className="mt-3">
          <ButtonForm Value={isLoading ? "Loading..." : "Send"} Width={"96"} />
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
