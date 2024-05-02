import Nav from "./components/nav/Nav";
import Banner from "./components/banner/Banner";
import About from "./components/about/About";
import Service from "./components/service/Service";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="bg-Purple-900">
      <Nav />
      <Banner />
      <About />
      <Service />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
