import Interest from "./Interest.tsx";
import SectionHeading from "../Utils/SectionHeading.tsx";
// import Footer from "./Footer.tsx";
function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen w-[95dvw] md:w-[80dvw] xl:w-[65dvw] mx-auto items-center 
      justify-center text-3xl font-bold gap-10 cursor-default overflow-y-auto scrollbar-hide pt-24 md:pt-40"
    >
      {/* About Me - Section */}
      <section className="flex flex-col items-center justify-center">
        <SectionHeading title="About Me" />
        <p className="mt-10 px-5 text-xl/9">
          I'm currently studying Bachelor of{" "}
          <span className="text-green-500 font-mono hover:px-4 hover:py-1 hover:bg-accent hover:rounded-full hover:text-accent-content basetransition">{`Computer Science`}</span>
          , majoring in{" "}
          <span className=" text-accent font-third font-bold underline underline-offset-4 decoration-wavy hover:text-2xl basetransition">
            Software Development
          </span>{" "}
          at Swinburne University of Technology,{" "}
          <span className="underline underline-offset-4 decoration-error hover:text-3xl basetransition ">
            Melbourne
          </span>
          , Australia. <br />
        </p>
        {/* Accordion */}
        <section className="join join-vertical p-3 mt-3 lg:w-[55dvw]">
          {/* Professional Purpose */}
          <div className="collapse collapse-arrow join-item border-accent border-2 px-2 pb-3 hover:border-4 basetransition">
            <input type="radio" name="my-accordion" />
            <h2 className="collapse-title text-xl md:text-2xl md:text-center font-primary underline underline-offset-8 decoration-wavy decoration-error text-center">
              Professional Purpose
            </h2>
            <p className="collapse-content text-lg text-center">
              I'm passionate about building software products that solve
              real-world problems and improve people's lives.
            </p>
          </div>
          {/* Background */}
          <div className="collapse collapse-arrow join-item border-accent border-2 shadow-xl px-2 pb-3  hover:border-4 basetransition">
            <input type="radio" name="my-accordion" />
            <h2 className="collapse-title text-xl md:text-2xl font-primary underline underline-offset-8 decoration-wavy decoration-info text-center">
              Background
            </h2>
            <p className="collapse-content text-lg text-center">
              Technology has always fascinated me from playing games and
              exploring new innovations to researching cutting-edge
              developments. <br />
              <br />
              My journey into software development began with a Certificate IV
              in Web Development, which deepened my interest in coding and
              problem-solving. <br />
              <br />
              This motivated me to pursue a Bachelor of Computer Science
              majoring in Software Development at Swinburne University, where
              I'm learning new knowledge and improving my skills to become a
              Software Engineer.
            </p>
          </div>
        </section>
      </section>
      <div className="divider"></div>
      <Interest />
      <div className="divider"></div>
      {/* <div className="divider"></div> */}
      {/* Education Section */}
      {/* <section className="flex flex-col items-center justify-center">
        <SectionHeading title="Education" />
        <div className="p-5 text-xl">
          <div>
            <h2>Bachelor of Computer Science majoring Software Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
              perferendis nostrum animi necessitatibus delectus doloremque
              aspernatur consequuntur vero dignissimos enim a eos eius
              quibusdam, repellendus ratione, maxime inventore deserunt?
            </p>
          </div>
          <div>
            <h2>Certificate IV in Web Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel est
              perferendis nostrum animi necessitatibus delectus doloremque
              aspernatur consequuntur vero dignissimos enim a eos eius
              quibusdam, repellendus ratione, maxime inventore deserunt?
            </p>
          </div>
        </div>
      </section> */}
      {/* <Footer /> */}
    </section>
  );
}

export default About;
