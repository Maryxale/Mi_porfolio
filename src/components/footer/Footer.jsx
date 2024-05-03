import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-Purple-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-l md:grid-cols-4 gap-4 ">
        <div className="mb-4 md:mb-0 ">
          <span className="text-3xl font-semibold text-fuchsia-800 py-2 uppercase">
            Logo
          </span>
          <p className="text-[16px] my-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus magnam nihil similique, corrupti suscipit cumque
            repellat? Assumenda minus vitae facilis, blanditiis debitis hic
            dignissimos necessitatibus numquam recusandae unde deserunt.
            Dignissimos.
          </p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Servicios
          </h2>
          <ul className="text-[16px] my-4">
            <li className="my-2">Full Stack Developer</li>
            <li className="my-2">E-commerce</li>
            <li className="my-2">web Development</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Contacto
          </h2>
          <p className="text-[16px] my-4">Email: romerobencomo@gmail.com</p>
          <p className="text-[16px] my-4">Tlf: +54 11922509295</p>
        </div>
        <div>
          <h2 className="text-[22px] font-semibold text-fuchsia-800 py-2 uppercase">
            Sigueme
          </h2>
          <div className="flex  space-x-4  ">
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaGithub />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaLinkedinIn />
            </a>
            <a
              className="text-white hover:text-fuchsia-800 transition-all duration-150 ease-in-out"
              href=""
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
