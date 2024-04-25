import { Link } from "react-scroll";

const Nav = () => {
  const content = (
    <>
      <div className="">
        <ul>
          <Link>
            <li>Home</li>
          </Link>
          <Link>
            <li>About</li>
          </Link>
          <Link>
            <li>Service</li>
          </Link>
          <Link>
            <li>Projects</li>
          </Link>
          <Link>
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </>
  );
  return <nav></nav>;
};

export default Nav;
