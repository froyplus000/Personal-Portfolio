import SectionHeading from "../Utils/SectionHeading.tsx";
function Interest() {
  return (
    <section
      className="flex flex-col items-center justify-center w-full h-fit md:h-[40dvh] gap-3 mb-2 md:mt-3 tooltip tooltip-error"
      data-tip="Want to Learn"
    >
      <SectionHeading title="Interests & Goals" />

      <div className="flex flex-col md:flex-row items-center justify-center w-full h-fit md:h-[40dvh] gap-3 mt-3 md:mt-5">
        {/* Full Stack dev */}
        <div className="border-1 border-primary h-full w-full rounded-3xl flex flex-col p-4 items-center justify-center basetransition hover:bg-primary hover:border-4 hover:border-accent hover:text-primary-content">
          <h1 className="text-2xl">Full Stack Development</h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <p className="badge badge-sm badge-accent">ReactJS</p>
            <p className="badge badge-sm badge-accent">BackEnd</p>
            <p className="badge badge-sm badge-accent">Database</p>
            <p className="badge badge-sm badge-accent">AWS</p>
          </div>
          <ol className="list-disc text-lg p-4 pl-7">
            <li className="mt-1">Front-End & Back-End Development in dept</li>
            <li className="mt-1">
              Authorisation and Authentication in Back-End (OAuth + JWT)
            </li>
            <li className="mt-1">Deployment to AWS Cloud Services</li>
          </ol>
        </div>
        {/* Mobile Dev */}
        <div className="border-1 border-primary h-full w-full rounded-3xl flex flex-col p-4 items-center justify-center md:justify-start basetransition hover:bg-primary hover:border-4 hover:border-accent hover:text-primary-content">
          <h1 className="text-2xl">Mobile Development</h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <p className="badge badge-sm badge-accent">React Native</p>
            <p className="badge badge-sm badge-accent">Flutter</p>
          </div>
          <ol className="list-disc text-lg p-4 pl-7">
            <li className="mt-1">
              Cross-Plaform Mobile application development
            </li>
            <li className="mt-1">Deployment to AppStore and PlayStore</li>
          </ol>
        </div>
        {/* Game Dev */}
        <div className="border-1 border-primary h-full w-full rounded-3xl flex flex-col p-4 items-center justify-center md:justify-start basetransition hover:bg-primary hover:border-4 hover:border-accent hover:text-primary-content">
          <h1 className="text-2xl">Game Development</h1>
          <div className="mt-3 flex justify-center items-center gap-2">
            <p className="badge badge-sm badge-accent">GoDot</p>
            <p className="badge badge-sm badge-accent">GScript</p>
            <p className="badge badge-sm badge-accent">Indie</p>
          </div>
          <ol className="list-disc text-lg p-4 pl-7">
            <li className="mt-1">Indie Game Development</li>
            <li className="mt-1">3D Art or PixelArt</li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Interest;
