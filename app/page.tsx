import Footer from "./Footer";
import firstbackground from "./images/MaskGroup.jpg";
import StudentUpdate from "./StudentUpdate";

export default function Home() {
  return (
    <div className="w-full h-screen ">
      <div className="w-full ">
        <div className="bg-[#141414] w-full  py-5  fixed">
          <h1 className="text-3xl font-bold sm:pl-10  text-white ">
            Madison School District
          </h1>
        </div>
        <img
          src={firstbackground.src}
          loading="lazy"
          className=" bg-red w-full mx-auto h-screen"
          alt="backgroungimg"
        />
      </div>

      <div className="w-full mt-6">
        <div className=" w-[96%] mx-auto pb-10 bg-[#F6F6F6]  ">
          <div>
            {" "}
            <h1 className="text-2xl sm:text-6xl font-bold text-black text-center py-3">
              Baked Delights <span className="text-[#FE5E55]">Gala</span>
            </h1>
          </div>
          <div className=" justify-center items-center mt-4">
            <p className="text-2xl text-[#4F4F4F] text-center px-10">
              Join us for a delicious extravaganza! Our students have <br />{" "}
              worked hard to prepare an array of baked goods to tantalize <br />
              your taste buds
            </p>
            <p className="text-2xl text-[#4F4F4F] pt-10 text-center px-10">
              Annual Delights Gala To support the Junior class's
              <br /> journey to Brazil, come relish our bake sale next
              <br /> Monday after classes!
            </p>

            <p className="text-2xl text-[#1D1D1D] pt-10 text-center px-10">
              Central School Auditorium, 2:30 p.m. - 3:30 p.m.
            </p>
            <div className="w-full flex justify-center ">
              {" "}
              <button className="bg-[#FE5E55] rounded-lg px-2 py-4 cursor-pointer transition-all sm:hover:w-[52%]  hover:w-[83%] hover:py-5 text-sm sm:text-3xl text-white w-[80%] sm:w-[50%] mt-6">
                <p className="text-center">
                  Can't make it to the gala? Support Online!
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
      <StudentUpdate />
      <Footer />
    </div>
  );
}
