interface Props {
  Value: string;
}

const ButtonForm = ({ Value }: Props) => {
  return (
    <>
      <input
        type="submit"
        value={Value}
        className="bg-red-600 hover:bg-red-900 transition-all duration-300 w-full  text-white font-bold py-1 rounded-lg cursor-pointer"
      />
    </>
  );
};

export default ButtonForm;
