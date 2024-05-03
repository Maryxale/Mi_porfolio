import countries from "../../assets/Countries.png";
import deliveloz from "../../assets/Deliveloz.png";

const Projects = () => {
  return (
    <div
      id="Projects"
      className="p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-right"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        Proyectos
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-l justify-around gap-20 ">
        <div className="flex flex-col items-center gap-3">
          <img
            data-aos="fade-up"
            height={350}
            width={250}
            className=" text-[26px] flex items-center justify-center  font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
            src={countries}
            alt=""
          />
          <a
            href="https://www.youtube.com/watch?v=UPJD5IC9LCA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-4 uppercase relative overflow-hidden">
              Ver
            </button>
          </a>
        </div>

        <div className="flex flex-col items-center gap-3">
          <img
            data-aos="fade-down"
            height={350}
            width={250}
            className=" text-[26px] flex items-center justify-center  font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
            src={deliveloz}
            alt=""
          />
          <a
            href="	https://deliveloz.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-2 px-4 uppercase relative overflow-hidden">
              Ver
            </button>
          </a>
        </div>
        {/* <img
          data-aos="fade-up"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src=""
          alt=""
        /> */}
      </div>
    </div>
  );
};

export default Projects;
