import { FaGithub, FaLinkedin } from "../../constants/Icon.tsx";
function Footer() {
  return (
    <footer className="footer w-[100dvw] flex bg-primary text-primary-content items-center justify-center py-3 px-6 cursor-default">
      <div className="items-center flex">
        <p className="text-lg">Made by Pattarapol Tantechasa | </p>

        <div className="text-center flex gap-3 md:items-center">
          <a
            className="basetransition p-1 bg-primary-content text-primary rounded-xl  hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/froyplus000"
          >
            <FaGithub className="text-xl" />
          </a>
          <a
            className="basetransition p-1 bg-primary-content text-primary rounded-xl  hover:text-accent"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/pattarapol-tantechasa-6275a1121/"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            className="basetransition p-1 bg-primary-content text-primary rounded-3xl px-2 hover:text-accent"
            download
            href="/pattarapol-tantechasa-resume.pdf"
          >
            <span className="text-md font-thrid font-bold">Resume</span>
          </a>
        </div>
      </div>
      {/* <aside className="flex justify-items-center">
        <a href="" className="badge badge-primary">
          <FaGithub />
        </a>
        <a href="" className="badge badge-primary">
          <FaLinkedin />
        </a>
      </aside> */}
    </footer>
  );
}

export default Footer;
