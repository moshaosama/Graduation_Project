interface HeaderPagesProps {
  title: string;
  path: string;
}

const HeaderPages = ({ title, path }: HeaderPagesProps) => {
  return (
    <div className="-my-10 mb-32 relative">
      <div className="absolute top-0 left-0 w-full flex flex-col gap-5 justify-center max-sm:text-center items-center h-full bg-[#c9c9c929]">
        <h1 className="text-6xl text-[#00194F] font-bold">{title}</h1>
        <p className="text-[#00194F] text-xl font-bold">{path}</p>
      </div>
      <img
        src="/WhatsApp Image 2025-05-21 at 15.21.31_a0fac298.jpg"
        alt="ImageHeader.png"
        className="w-full h-[900px] object-fill"
      />
    </div>
  );
};

export default HeaderPages;
