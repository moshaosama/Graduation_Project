const JoinUs = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className="text-[#23A6F0] font-semibold">Newsletter</p>
          <h1 className="text-4xl font-bold">JOIN US</h1>
        </div>
        <p className="text-sm text-[#808080]">
          One step away from connecting with your health
        </p>

        <form action="" className="p-10 my-10">
          <input
            type="text"
            placeholder="Your Email"
            className="p-3 w-[40pc] bg-gray-200"
          />
          <button className="bg-[#23A6F0] p-3">Subscripe</button>
        </form>
      </div>
    </>
  );
};

export default JoinUs;
