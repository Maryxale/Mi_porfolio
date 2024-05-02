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
      <div className="grid lg:grid-cols-4 md:grid-cols2 grid-cols-l justify-around gap-20 ">
        <img
          data-aos="fade-up"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src=""
          alt=""
        />
        <img
          data-aos="fade-down"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src=""
          alt=""
        />
        <img
          data-aos="fade-up"
          height={350}
          width={250}
          className="text-[26px] flex items-center justify-center font-semibold text-fuchsia-800 rounded-3xl p-1 border-2 border-fuchsia-800 b_glow"
          src=""
          alt=""
        />
      </div>
    </div>
  );
};

export default Projects;
