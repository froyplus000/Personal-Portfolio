import Navbar from "./components/Navbar.tsx";
import Hero from "./components/Hero.tsx";
import Activity from "./components/Activity.tsx";
function App() {
  return (
    <section className=" h-screen w-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth overflow-hidden">
      <Navbar />
      <Hero />
      <Activity />
    </section>
  );
}

export default App;
