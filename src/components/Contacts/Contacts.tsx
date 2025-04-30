import SectionHeading from "../Utils/SectionHeading";
function Contacts() {
  return (
    <section
      id="contact"
      className="flex flex-col h-screen w-[80dvw] mx-auto snap-start items-center justify-center text-3xl font-bold gap-10 cursor-default"
    >
      <SectionHeading title="Contacts" />
      <div className=" p-5 border-2 rounded-4xl w-[90dvw] md:w-fit">
        <div className="flex flex-col text-lg md:text-2xl">
          <p>
            Email:{" "}
            <a
              href=""
              className="basetransition text-accent hover:text-success"
            >
              pattarapol_tan@hotmail.com
            </a>
          </p>
        </div>
      </div>
      <div className="flex flex-wrap">
        <a href="" className="btn btn-primary">
          LinkedIn
        </a>
        <a href="" className="btn btn-primary">
          Github
        </a>
        <a href="" className="btn btn-primary">
          Hashnode
        </a>
        <a href="" className="btn btn-primary">
          Medium
        </a>
        <a href="" className="btn btn-primary">
          Resume
        </a>
      </div>
    </section>
  );
}

export default Contacts;
