interface ListMedicineProps {
  Title: string;
}
const TitleText = ({ Title }: ListMedicineProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-sans ">{Title}</h1>
      <p className="h-1 rounded-full my-2 w-full bg-blue-400"></p>
    </div>
  );
};

export default TitleText;
