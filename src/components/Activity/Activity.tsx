import Unit from "./Unit.tsx";
import { FaGithub } from "../../constants/Icon.tsx";
import { NodeLogo, ReactLogo, TypeScriptLogo } from "../../constants/Logo.tsx";
import Study from "../../assets/study.gif";
function Activity() {
  return (
    <section
      id="activity"
      className="flex overflow-y-scroll h-screen w-screen snap-start items-center justify-center text-3xl font-bold px-4 py-10"
    >
      <div className=" h-[80dvh] md:h-[70dvh] w-[95dvw] md:w-[70dvw] lg:w-[65dvw] grid grid-cols-6 grid-rows-8 md:grid-cols-6 md:grid-rows-10 xl:grid-cols-8 xl:grid-rows-10 gap-4 ">
        {/* Current Study */}
        <div className="col-span-6 row-span-4 md:col-span-6 md:row-span-5 xl:col-span-5 xl:row-span-7 bentoCard border-2 border-success flex justify-center items-center ">
          <section className="flex flex-col justify-center items-center h-full">
            <span className="indicator-item badge badge-sm md:badge-lg badge-success animate-pulse">
              Current Study
            </span>
            <div className="mt-3 text-center">
              <h2 className="text-[.9rem] md:text-2xl">
                Bachelor of Computer Science
              </h2>
              <p className="text-[.85rem] md:text-xl mt-1">
                Software Development
              </p>
              {/* List of UNIT */}
              <div className="md:flex flex-col items-center justify-center">
                <Unit
                  name="Data Structures and Patterns"
                  badgeColor="badge-error"
                  borderColor="border-error"
                  number="1"
                />
                <Unit
                  name="Software Architecture and Design"
                  badgeColor="badge-accent"
                  borderColor="border-accent"
                  number="2"
                />
                <Unit
                  name="Interface Design and Development"
                  badgeColor="badge-success"
                  borderColor="border-success"
                  number="3"
                />
                <Unit
                  name="Network Security and Resilience"
                  badgeColor="badge-info"
                  borderColor="border-info"
                  number="4"
                />
              </div>
            </div>
          </section>
        </div>
        {/* Current Project */}
        <div className="col-span-4 row-span-2 md:col-span-4 md:row-span-3 xl:col-span-3 xl:row-span-4 bentoCard border-2 border-accent">
          <section className="flex flex-col items-center justify-center h-full">
            <span className="badge badge-accent badge-sm md:badge-md animate-pulse">
              Current Project
            </span>
            <div className="flex flex-col items-center justify-between gap-2 mt-3 ">
              <h1 className=" text-[.8rem] md:text-2xl ">
                Terminal Hacking Game
              </h1>
              <span className="badge badge-xs md:badge-lg badge-success">
                Inspired By Fallout 4
              </span>{" "}
              <a
                href="https://github.com/froyplus000/Terminal-Hacking-Game"
                className="btn btn-xs md:btn-md md:mt-3 btn-primary md:text-xl text-[.7rem] flex gap-1"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </section>
        </div>
        {/* Learning */}
        <div className="col-span-2 row-span-4 md:col-span-2 md:row-span-3 xl:col-span-3 bentoCard border-2 border-info ">
          <section className="flex flex-col items-center justify-center h-full">
            <span className="badge badge-sm md:badge-md badge-info animate-pulse">
              Learning
            </span>
            <img
              src={ReactLogo}
              alt="React JS logo"
              className="w-15 mt-3 rounded-full"
            />
            <img
              src={NodeLogo}
              alt="Node JS logo"
              className="w-15 mt-2 bg-neutral-200 px-2 rounded-xl"
            />
          </section>
        </div>
        {/* Practicing */}
        <div className="col-span-2 row-span-2 md:col-span-2 xl:col-span-3 xl:row-span-3 bentoCard border-2 border-warning">
          <section className="flex flex-col items-center justify-center h-full">
            <span className="badge badge-sm md:badge-md badge-warning animate-pulse">
              Practicing
            </span>
            <img
              src={TypeScriptLogo}
              alt="TypeScript logo"
              className="w-15 mt-2 rounded-xl "
            />
          </section>
        </div>
        {/* Current MOOD */}
        <div className="col-span-2 row-span-2 md:col-span-4 xl:col-span-5 xl:row-span-3 bentoImg ">
          <section className="flex flex-col items-center justify-center h-full w-full indicator">
            <span className="indicator-item badge badge-error badge-sm md:badge-lg animate-pulse indicator-center md:indicator-end">
              Current Mood
            </span>
            <img
              src={Study}
              alt="Current MOOD"
              className="w-full h-full object-cover rounded-2xl ring-2 ring-primary shadow-xl"
            />
          </section>
        </div>
      </div>
    </section>
  );
}

export default Activity;
