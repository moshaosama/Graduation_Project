const FormBookDoctor = () => {
  return (
    <>
      <div className="mt-40 mb-10 flex justify-center w-full">
        <div className="shadow-lg border-2 border-black w-[40pc] p-4 rounded-lg">
          <h1 className="text-[#184C99] font-bold text-3xl">
            Book An Appointment
          </h1>
          <form action="" className="grid grid-cols-2 gap-5 mt-4">
            <p className="col-span-2 flex flex-col gap-2">
              <label htmlFor="Name" className="text-xl mx-1">
                Name
              </label>
              <input
                type="text"
                placeholder="Type your name"
                className="border-2 border-gray-400 py-4 rounded-lg px-2"
              />
            </p>
            <p className="col-span-2 flex flex-col gap-2">
              <label htmlFor="Name" className="text-xl mx-1">
                Phone Number
              </label>
              <input
                type="number"
                placeholder="Phone Number"
                className="border-2 border-gray-400 py-4 rounded-lg px-2"
              />
            </p>
            <p className="col-span-2 flex flex-col gap-2">
              <label htmlFor="Name" className="text-xl mx-1">
                Email address
              </label>
              <input
                type="email"
                placeholder="Email"
                className="border-2 border-gray-400 py-4 rounded-lg px-2"
              />
            </p>
            <div className="col-span-2 flex gap-5">
              <button className="p-3 bg-red-500 hover:bg-red-800 transition-all duration-300 w-1/2 rounded-full text-white font-bold">
                Book
              </button>
              <button className="p-3 w-1/2 border-2 border-gray-400 rounded-full font-bold">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormBookDoctor;
