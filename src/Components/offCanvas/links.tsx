import React from "react";

interface Props {
  Title: String;
  Icon: React.ReactNode;
}

function Links(props: Props) {
  const { Title, Icon } = props;

  return (
    <>
      <div className="flex items-center gap-5 cursor-pointer  py-5 mx-5 my-5 ">
        <div>{Icon}</div>
        <div className="font-bold">{Title}</div>
      </div>
    </>
  );
}

export default Links;
