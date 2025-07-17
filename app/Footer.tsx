export default function Footer() {
  return (
    <div className="w-full bg-[#EEEEEE] mt-8 pb-10">
      <div className=" w-full ">
        <div className="flex justify-between items-center w-[56%] mx-auto py-4">
          <img
            src="facebook.png"
            alt="Logo"
            className="sm:h-8 h-6 cursor-pointer"
          />
          <img
            src="twitter.png"
            alt="Logo"
            className="sm:h-8 h-6   cursor-pointer"
          />
          <img
            src="instagram.png"
            alt="Logo"
            className="sm:h-8 h-6   cursor-pointer"
          />
          <img
            src="linkedin.png"
            alt="Logo"
            className="sm:h-8 h-6   cursor-pointer"
          />
          <img
            src="google.png"
            alt="Logo"
            className="sm:h-8 h-6   cursor-pointer"
          />
          {/* <img
            src="lasticon.png"
            alt="Logo"
            className="sm:h-8 h-6   cursor-pointer"
          /> */}
        </div>
        <div className="text-center">
          {" "}
          <p className="text-[#FE5E55]">Unsubscribe instantly</p>
          <p className="text-2xl">EMAIL VIA MAILGET</p>
        </div>
      </div>
    </div>
  );
}
