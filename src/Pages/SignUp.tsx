import { FaFacebookSquare } from "react-icons/fa";
import FormSignUp from "../Components/Form/FormSignUp";
import ButtonForm from "../Components/Form/ButtonForm";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const SignUp = () => {
  const URL =
    "https://www.facebook.com/login.php?skip_api_login=1&api_key=366132763487462&kid_directed_site=0&app_id=366132763487462&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv11.0%2Fdialog%2Foauth%3Fapp_id%3D366132763487462%26cbt%3D1732830348500%26channel_url%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Df9c448b8f371c7aba%2526domain%253Dwww.vezeeta.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.vezeeta.com%25252Ff0cd9ec2058da30be%2526relation%253Dopener%26client_id%3D366132763487462%26display%3Dpopup%26domain%3Dwww.vezeeta.com%26e2e%3D%257B%257D%26fallback_redirect_uri%3Dhttps%253A%252F%252Fwww.vezeeta.com%252Fen%252FAccount%252FSignIn%26locale%3Den_US%26logger_id%3Df7c85fa0f662c1c75%26origin%3D1%26perms%3Duser_address%252C%2Bverified_mobile_phone%26redirect_uri%3Dhttps%253A%252F%252Fstaticxx.facebook.com%252Fx%252Fconnect%252Fxd_arbiter%252F%253Fversion%253D46%2523cb%253Dfd3dbb5ab6266cbf7%2526domain%253Dwww.vezeeta.com%2526is_canvas%253Dfalse%2526origin%253Dhttps%25253A%25252F%25252Fwww.vezeeta.com%25252Ff0cd9ec2058da30be%2526relation%253Dopener%2526frame%253Df723cd6fe977988b9%26response_type%3Dtoken%252Csigned_request%252Cgraph_domain%26scope%3Demail%252C%2Bpublic_profile%26sdk%3Djoey%26version%3Dv11.0%26ret%3Dlogin%26fbapp_pres%3D0%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfd3dbb5ab6266cbf7%26domain%3Dwww.vezeeta.com%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fwww.vezeeta.com%252Ff0cd9ec2058da30be%26relation%3Dopener%26frame%3Df723cd6fe977988b9%26error%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied&display=popup&locale=en_GB&pl_dbl=0";
  const [FirstName, setFirstName] = useState("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFirstName(e.target.value);
  };

  const Submiteed = () => {
    console.log(FirstName);
  };
  return (
    <div className="flex justify-center items-center max-sm:h-full  h-screen bg-[#eee]">
      <div className="rounded-xl bg-white w-[40pc] max-sm:w-80 p-10 relative max-sm:my-5">
        <div className="bg-blue-500 w-full rounded-tr-lg rounded-tl-lg absolute top-0 left-0">
          <h1 className="text-center text-white font-bold p-1">Sign Up</h1>
        </div>

        <div className="flex justify-center">
          <a
            href={URL}
            target="blank"
            className="flex items-center w-[15pc] my-5  bg-blue-600 rounded-lg p-2 cursor-pointer"
          >
            <div className="text-white flex items-center gap-2">
              <span>
                <FaFacebookSquare />
              </span>
            </div>
            <div className="w-full text-center">
              <p className="text-white font-bold">Connect with Facebook</p>
            </div>
          </a>
        </div>
        <hr className="p-1" />
        <form action="">
          <FormSignUp
            Placeholder="First Name and LastName"
            Type="text"
            Title="Your Name"
            HandleChange={handleInputChange}
          />
          <FormSignUp
            Placeholder="Mobile Number"
            Type="number"
            Title="Mobile Number"
            HandleChange={handleInputChange}
          />
          <FormSignUp
            Placeholder="Email Address"
            Type="email"
            Title="Email Address"
            HandleChange={handleInputChange}
          />
          <div className="flex max-sm:flex-col justify-between">
            <p>
              <label htmlFor="">Gender</label>
            </p>
            <p className="flex max-sm:mx-0 gap-10 mx-36">
              <label>
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <br />
              <label>
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </p>
          </div>
          <FormSignUp
            Placeholder="Birth Date"
            Type="date"
            Title="Birth Date"
            HandleChange={handleInputChange}
          />
          <FormSignUp
            Placeholder="Password"
            Type="password"
            Title="Password"
            HandleChange={handleInputChange}
          />

          <div className="text-center my-2">
            <p className="text-[10px]">
              By signing up you agree to our{" "}
              <a href="" className="text-blue-500 hover:underline ">
                Terms Of Use
              </a>
            </p>
          </div>
          <div className="flex justify-center">
            <ButtonForm
              Value="Join Now"
              Width="[10pc]"
              handleClick={Submiteed}
            />
          </div>
        </form>
        <hr className="p-1 my-5" />
        <div className="text-center">
          <h4 className="text-gray-600 font-bold text-[12px]">
            Already Registered in BrandName ?{" "}
            <Link to={"/login"} className="text-blue-500 hover:underline">
              Login
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
