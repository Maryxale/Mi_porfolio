import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Purple-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-l md:grid-cols-4 gap-4 ">
        <div className="mb-4 md:mb-0 ">
          <a href="">
            <FaUser />
          </a>
          {/* <p className="text-[16px] my-4">
            Pensamiento creativo,resolucion de problemas, trabajo en equipo,
            autonomia.
          </p> */}
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase create">
            Servicios
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Full Stack Developer</li>
            <li className="my-2">E-commerce</li>
            <li className="my-2">web Development</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase create">
            Contacto
          </h2>
          <p className="text-[16px] my-4">Email: romerobencomo@gmail.com</p>
          <p className="text-[16px] my-4">Tlf: +54 11922509295</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase create">
            Sigueme
          </h2>
          <div className="flex  space-x-4  ">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://github.com/Maryxale"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href="https://www.linkedin.com/in/maria-alejandra-romero-bencomo-44497a123/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
