interface Props {
  Value: string;
  Width: string;
  handleClick: () => void;
}

const ButtonForm = ({ Value, Width, handleClick }: Props) => {
  return (
    <>
      <input
        type="submit"
        value={Value}
        className={`bg-red-600 hover:bg-red-900 transition-all duration-300 w-${Width} text-white font-bold py-1 rounded-lg cursor-pointer`}
        onClick={handleClick}
      />
    </>
  );
};

export default ButtonForm;
