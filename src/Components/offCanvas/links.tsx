import { LinksProps } from "../../Types/offCanvas/Links";

function Links(props: LinksProps) {
  const { Title, Icon } = props;

  return (
    <>
      <div className="flex items-center gap-5 cursor-pointer  py-5 mx-5 my-5 ">
        <div className="text-black">{Icon}</div>
        <div className="font-bold text-black">{Title}</div>
      </div>
    </>
  );
}

export default Links;
