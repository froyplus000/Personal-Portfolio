import { useState } from "react";
import { FaGithub } from "../../constants/Icon.tsx";

interface ProjectCardProps {
  id: string;
  title?: string;
  description?: string;
  extendClass?: string;
  imageArray: Array<string>;
  badge: Array<string>;
  myPart: string;
  skills: Array<string>;
  repoLink: string;
}

function ProjectCard({
  id,
  title,
  description,
  extendClass,
  imageArray,
  badge,
  myPart,
  skills,
  repoLink,
}: ProjectCardProps) {
  // UseState
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === imageArray.length - 1 ? 0 : prevIndex + 1) // If the prevIndex (Current image) is last one, go to first else next image
    );
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex === 0 ? imageArray.length - 1 : prevIndex - 1) // If prevIndex (Current image) is first one, got to last else previous image
    );
  };

  return (
    <div
      id={id}
      className={`card bg-base-100 w-full carousel-item  ${extendClass}`}
    >
      {/* Images Carousel for Card */}
      <figure className="px-2 py-4">
        <div className="carousel w-full h-[200px] md:h-full rounded-2xl">
          <div className="carousel-item relative w-full">
            <img
              src={imageArray[currentIndex]}
              className="w-full xl:w-[70%] mx-auto rounded-md basetransition"
            />
            {/* Navigation Buttons */}
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <button
                onClick={prevSlide}
                className="btn btn-md md:btn-lg btn-circle border-2 bg-transparent backdrop-blur-xs border-accent text-accent xl:hover:bg-accent xl:hover:text-accent-content hover:scale-120 basetransition"
              >
                ❮
              </button>
              <button
                onClick={nextSlide}
                className="btn btn-md md:btn-lg btn-circle border-2 bg-transparent backdrop-blur-xs border-accent text-accent xl:hover:bg-accent xl:hover:text-accent-content hover:scale-120 basetransition"
              >
                ❯
              </button>
            </div>
          </div>
        </div>
      </figure>

      {/* Details or Content */}
      <div className="card-body cursor-default">
        {/* Heading */}
        <h2
          className="card-title flex-wrap font-secondary text-4xl md:text-5xl xl:hover:text-6xl mb-4 basetransition 
        underline underline-offset-12 decoration-primary decoration-dotted xl:hover:decoration-accent xl:hover:text-accent "
        >
          {title}
        </h2>
        <div className="flex flex-wrap gap-2">
          {badge.map((badge, index) => (
            <div
              key={index}
              className={`basetransition badge badge-sm md:hover:badge-lg md:badge-md badge-${
                (index === 0 && "accent") ||
                (index === 1 && "success") ||
                (index === 2 && "info") ||
                (index === 3 && "error") ||
                (index === 4 && "warning")
              }`}
            >
              {badge}
            </div>
          ))}
        </div>
        <p className=" text-lg my-4">{description}</p>

        {/* My Part */}
        <h3 className=" text-[1.45rem] md:text-4xl md:mt-4 underline underline-offset-10 decoration-wavy decoration-accent font-primary basetransition xl:hover:decoration-accent xl:hover:text-accent xl:hover:text-5xl xl:hover:underline-offset-15">
          My Part in the project:
        </h3>
        <p className=" text-lg my-4">{myPart}</p>

        {/* Tools and Skills */}
        <h3 className=" text-2xl md:text-4xl mb-4 md:mt-4 underline underline-offset-10 decoration-wavy decoration-success font-primary basetransition xl:hover:decoration-success xl:hover:text-success xl:hover:text-5xl xl:hover:underline-offset-15">
          Tools and Skills:
        </h3>
        <ul className=" list-disc">
          {skills.map((skill, index) => (
            <li key={index} className="ml-6 pl-2 text-lg">
              {skill}
            </li>
          ))}
        </ul>
        {/* Github Repor Button */}
        <div className="card-actions">
          <a
            href={repoLink}
            className="btn btn-accent btn-md w-full md:w-[60%] xl:hover:w-[45%] mx-auto mt-5 hover:btn-success md:btn-lg basetransition"
          >
            <FaGithub />
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
