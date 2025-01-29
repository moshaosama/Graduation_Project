import FindDoctors from "../Components/findDoctors";

function Home() {
  return (
    <>
      <div className="relative">
        <div>
          <img
            src="https://www.accruent.com/hubfs/Healthcare-Hero.webp"
            alt="ImageHome.png"
            className="h-[47pc] opacity-75  transition-all duration-1000 w-full object-cover"
          />
        </div>
        <div className="absolute top-20 left-80 flex flex-col gap-3 text-black">
          <h1 className="text-4xl font-bold">
            Better Healthcare for a Better Life
          </h1>
          <p className="text-2xl font-semibold">Book online or call16676</p>
        </div>
        <FindDoctors />
      </div>
    </>
  );
}

export default Home;
