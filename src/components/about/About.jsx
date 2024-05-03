import img from "../../assets/img_profile.jpg";
import pdf from "../../assets/Maria Alejandra Romero.pdf";

const About = () => {
  return (
    <div
      id="About"
      className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg:text-start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center"
    >
      <img
        data-aos="fade-down"
        src={img}
        width={290}
        height={290}
        className="rounded border-2 p-1 border-fuchsia-500 img_glow"
        alt=""
      />
      <div className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
        <h1
          data-aos="fade-right"
          className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase"
        >
          Sobre mi
        </h1>
        <p data-aos="fade-left">
          Full Stack Developer con background en ciencias sociales (Sociología)
          que me ayudaron a obtener habilidades como: trabajar en equipo,
          analizar datos de forma masiva, resolución de problemas, entre otros.
          Conocimientos en metodologías ágiles, GIT, estructura de datos,
          algoritmos, frameworks CSS,Github, Sequelize. Experiencia en
          desarrollo de Front-End y Back End, Postgresql con tecnologías como:
          React, Redux, Vite, NodeJs, Express, entre otras. Autodidacta,
          dedicación, adaptabilidad, Empatía.
        </p>
        <div className="flex mt-8 gap-2">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <a href={pdf} target="_blank" rel="noopener noreferrer">
                <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden">
                  CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
