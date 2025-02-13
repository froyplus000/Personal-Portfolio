import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Activity from "./components/Activity.tsx";
import About from "./components/About.tsx";
function App() {
  return (
    <section className=" h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-hidden">
      <Navbar />
      <Hero />
      <Activity />
      {/* <About /> */}
      {/* <Activity /> */}
    </section>
  );
}

export default App;
