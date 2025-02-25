import Navbar from "./components/Utils/Navbar.tsx";
import Hero from "./components/Hero/Hero.tsx";
import Activity from "./components/Activity/Activity.tsx";
import About from "./components/About/About.tsx";
import Projects from "./components/Projects/Projects.tsx";
// import Footer from "./components/Utils/Footer.tsx";
function App() {
  return (
    <section className=" h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-hidden">
      <Navbar />
      <Hero />
      <Activity />
      <About />
      <Projects />
      {/* <Footer /> */}
    </section>
  );
}

export default App;
