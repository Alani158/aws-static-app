import Rectangle from "./images/Rectangle40196.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";

export default function StudentUpdate() {
  return (
    <div className=" w-full mt-4">
      <div className="bg-[#FFF6F5] pb-10  mx-auto w-[96%] border-[#FE5E55] border-[1px]">
        <h1 className="text-center text-4xl pt-4">Student Updates</h1>
        <div className="flex gap-10  w-full flex-col mt-4 ">
          <div className="sm:flex justify-center gap-10   w-[80%] mx-auto px-10">
            <div className="sm:w-[30%] w-[100%]">
              <img
                src={Rectangle.src}
                className="w-[100%] sm:h-[400px] h-[200px]"
                alt="student1IMG"
              />
            </div>
            <div className="sm:w-[50%]">
              {" "}
              <p className="sm:text-2xl text-sm mt-4 text-[#4F4F4F]">
                School Updates Emily's Adventure in SpainHigh school student
                Emily embarked on a six-month adventure in Spain, delving deep
                into its culture, language, and history. Dive into her story to
                uncover her experiences and learnings.{" "}
              </p>
              <button className="bg-[#FE5E55] rounded-lg px-2 py-4 text-sm sm:text-2xl cursor-pointer transition-all sm:hover:w-[52%]  hover:w-[83%] hover:py-5  text-white w-[80%] sm:w-[50%] mt-6">
                <p className="text-center">DISCOVER MORE</p>
              </button>
            </div>
          </div>
          <div className="sm:flex justify-center gap-10 mt-4  w-[80%] mx-auto px-10">
            <div className="sm:w-[30%] w-[100%]">
              <img
                src={image2.src}
                className="w-[100%] sm:h-[400px] h-[200px]"
                alt="student1IMG"
              />
            </div>
            <div className="mt-4 sm:w-[50%]">
              {" "}
              <p className="sm:text-2xl text-sm text-[#4F4F4F]">
                School Updates Emily's Adventure in SpainHigh school student
                Emily embarked on a six-month adventure in Spain, delving deep
                into its culture, language, and history. Dive into her story to
                uncover her experiences and learnings.{" "}
              </p>
              <button className="bg-[#FE5E55] rounded-lg px-2 py-4 text-sm sm:text-2xl cursor-pointer transition-all sm:hover:w-[52%]  hover:w-[83%] hover:py-5  text-white w-[80%] sm:w-[50%] mt-6">
                <p className="text-center">DISCOVER MORE</p>
              </button>
            </div>
          </div>
          <div className="sm:flex justify-center gap-10 mt-4  w-[80%] mx-auto px-10">
            <div className="sm:w-[30%] w-[100%]">
              <img
                src={image3.src}
                className="w-[100%] sm:h-[400px] h-[200px]"
                alt="student1IMG"
              />
            </div>
            <div className="mt-4 sm:w-[50%]">
              {" "}
              <p className="sm:text-2xl text-sm text-[#4F4F4F]">
                School Updates Emily's Adventure in SpainHigh school student
                Emily embarked on a six-month adventure in Spain, delving deep
                into its culture, language, and history. Dive into her story to
                uncover her experiences and learnings.{" "}
              </p>
              <button className="bg-[#FE5E55] rounded-lg px-2 py-4 text-sm sm:text-2xl cursor-pointer transition-all sm:hover:w-[52%]  hover:w-[83%] hover:py-5  text-white w-[80%] sm:w-[50%] mt-6">
                <p className="text-center">DISCOVER MORE</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
