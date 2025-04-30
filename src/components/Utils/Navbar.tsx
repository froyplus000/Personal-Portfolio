import ThemeSwitcher from "../ThemeSwitcher.tsx";
import Tooltips from "../Tooltips.tsx";

function Navbar() {
  return (
    <nav className="flex items-center justify-center gap-2 w-screen lg:w-[80dvw] mx-auto sticky top-0 md:py-5 backdrop-blur-lg rounded-full px-10 z-10">
      <div className="navbar w-full ">
        <div className="flex-1 tooltip tooltip-bottom md:tooltip-left tooltip-primary">
          <div className=" tooltip-content duration-500 ">
            <div className="text-[1rem] md:text-xl px-2 font-bold ">Folk</div>
          </div>
          <a
            href="#hero"
            className=" text-[1.2rem] md:text-3xl font-bold hover:text-accent basetransition cursor-default "
          >
            Pattarapol Tantechasa
          </a>
        </div>

        {/* Link */}
        <ul className="">
          <li className="flex items-center justify-center gap-5">
            {/* Switcher */}
            <ThemeSwitcher />
            {/* Link -> btn */}
            <div className="hidden lg:flex items-center justify-center gap-5">
              <Tooltips tooltipContent="To The TOP" name="Home" id="hero" />
              <Tooltips
                tooltipContent="Where I'm up to?"
                name="Activity"
                id="activity"
              />
              <Tooltips
                tooltipContent="All About Me"
                name="About Me"
                id="about"
              />
              <Tooltips name="Projects" id="project" />
              {/* <Tooltips
                tooltipContent="My Socials"
                name="Contact"
                id="contact"
              /> */}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
