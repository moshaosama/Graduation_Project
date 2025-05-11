const CopyRight = () => {
  return (
    <div className="flex justify-between max-2xl:mx-10 max-sm:flex-col-reverse max-sm:gap-5 mx-80 max-sm:mx-5 my-5">
      <div>
        <h1 className="font-bold">© 2025 MedicalPulse. All rights reserved.</h1>
      </div>
      <div className="flex gap-10 max-sm:flex-col max-sm:gap-2">
        <a href="/privacy-policy" className="underline font-bold">
          Privacy Policy
        </a>
        <h1 className="underline font-bold">Terms of Service</h1>
        <h1 className="underline font-bold">Cookie Settings</h1>
      </div>
    </div>
  );
};

export default CopyRight;
