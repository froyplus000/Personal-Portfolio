import { Typewriter } from "react-simple-typewriter";
import Portrait from "./Portrait.tsx";
import { FaGithub, FaLinkedin } from "../../constants/Icon.tsx";
function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col h-screen w-[80dvw] mx-auto items-center justify-center text-3xl font-bold gap-10 cursor-default"
    >
      <Portrait />
      <div className="flex flex-col items-start justify-center px-3">
        <h1 className="text-2xl md:text-3xl font-bold text-left transition-all">
          Hello, I'm{" "}
          <span className="text-accent hover:text-4xl transition-all duration-500">
            <Typewriter
              words={[
                // "Folk 👋🏻",
                "a Computer Science Student.",
                "looking for Internship.",
                "pursuing Software Engineer. 💻",
                "pursuing Full-Stack Developer. 🧑🏻‍💻",
                "pursuing Mobile Developer. 📱",
              ]}
              cursorStyle="|"
              loop={0} // Infinite loop
              cursor
              typeSpeed={30}
              deleteSpeed={20}
              delaySpeed={1700}
            />
          </span>
        </h1>
        <p className="text-xl md:text-3xl mt-5">
          I want to building{" "}
          <span className="text-accent font-primary hover:text-4xl transition-all duration-500 font-bold underline underline-offset-4 decoration-wavy decoration-error">
            world-class
          </span>{" "}
          software to
          <span className="text-accent font-secondary hover:text-5xl transition-all duration-500  decoration-error ">
            {" "}
            improve
          </span>{" "}
          lives. 🚀
        </p>

        <div className="w-full text-center mt-4 md:mt-5 flex gap-3 md:items-center">
          <a
            className="btn btn-sm md:btn-md btn-primary hover:btn-accent basetransition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/froyplus000"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            className="btn btn-sm md:btn-md btn-primary hover:btn-accent basetransition"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pattarapol-tantechasa-6275a1121/"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            className="btn btn-sm md:btn-md btn-primary hover:btn-accent basetransition"
            download
            href="/pattarapol-tantechasa-resume.pdf"
          >
            <span className="text-xl">Download my Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
