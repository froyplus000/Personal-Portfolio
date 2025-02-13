function About() {
  return (
    <section
      id="about"
      className="flex flex-col min-h-screen max-h-content w-[80dvw] mx-auto snap-start items-center 
      justify-center text-3xl font-bold gap-10 cursor-default overflow-y-auto scrollbar-hide pt-30"
    >
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">About Me</h1>
        <ul className="mt-4 px-5 text-[.8rem] ">
          <li>
            🎓 I’m currently studying Bachelor of Computer Science degree with
            Swinburne University of Technology.{" "}
          </li>
          <li>💻 I'm majoring in Software Development.</li>
          <li>
            🚀 I'm learning and pursuing job positions like Full Stack
            Developer, Mobile Developer, or iOS Developer.
          </li>
          <li>
            🎮 I'm also interested in Game Development, which I will spend my
            free time learning about.{" "}
          </li>
        </ul>
      </div>
      <div className="divider"></div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Education</h1>
        <p className="mt-4 px-5 text-lg text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum cumque
          dolores, debitis modi consequatur placeat numquam illum tempore
          dignissimos nam sint. Dolore rerum animi quia libero laboriosam,
          impedit cupiditate ducimus placeat officiis at voluptas sequi
          doloribus tempora quibusdam expedita, corrupti tenetur suscipit
          voluptatem accusamus officia. Beatae cumque, consequatur explicabo
          necessitatibus sapiente temporibus aut officiis distinctio
          perspiciatis quia aspernatur hic voluptates iure nam a dicta neque
          error. Eveniet, id vero minima sunt provident esse pariatur quam fuga,
          reiciendis magnam nisi? Quis culpa officia possimus doloribus quod
          recusandae, aliquam rerum, maxime esse ad laborum alias consectetur
          expedita optio ducimus nam minus sequi.
        </p>
      </div>
      <div className="divider"></div>
    </section>
  );
}

export default About;
