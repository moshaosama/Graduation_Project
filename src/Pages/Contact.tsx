import { IoIosCall } from "react-icons/io";
import FindDoctorContent from "../Components/findDoctor/findDoctorContent/findDoctorContent/findDoctorContent";
import FormContact from "../Components/findDoctor/findDoctorContent/FormContact/formContact";

const Contact = () => {
  return (
    <>
      <div className="relative max-sm:hidden">
        <img
          src="https://d1aovdz1i2nnak.cloudfront.net/vezeeta-web-reactjs/jenkins-93/images/search-header-background-en.jpg"
          alt="Doctors.png"
          className="w-[100%]"
        />
        <div className="my-3 absolute top-0 left-64 mx-16">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-bold text-[rgb(111,112,114)]">
              Book with The best Doctor
            </h1>
            <p className="flex items-center gap-2 text-md font-semibold text-[rgb(111,112,114)]">
              Book online or call
              <span>
                <IoIosCall className="text-[red] text-2xl" />
              </span>
              16676
            </p>
            <p className="text-md  text-[rgb(111,112,114)]">
              Num Doctors - Num Professors and Consultants - More than Num
              Specialties
            </p>{" "}
            {/* Number of Doctors and Speciality */}
          </div>
          <div>
            <FindDoctorContent />
          </div>
        </div>
      </div>
      <div>
        <FormContact />
      </div>
    </>
  );
};

export default Contact;
