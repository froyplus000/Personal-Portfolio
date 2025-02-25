import SectionHeading from "../Utils/SectionHeading";
import ProjectCard from "./ProjectCard";

// Import Project Image Array
import {
  PropertyLensImages,
  LunatiaImages,
} from "../../constants/ProjectImages";

function Projects() {
  return (
    <section
      id="project"
      className="flex flex-col overflow-y-auto scrollbar-hide min-h-screen w-screen snap-start items-center justify-center
       text-3xl font-bold px-4 py-10 mb-6"
    >
      <div className=" mt-[10dvh]">
        <SectionHeading title="Projects" />
      </div>
      {/* Carousel */}
      <section className="carousel w-[90dvw] md:w-[75dvw] mt-6 border-2 border-accent rounded-4xl min-h-fit ">
        {/* PropertyLens */}
        <ProjectCard
          id="PropertyLens"
          title="PropertyLens"
          description={`
          PropertyLens is a group project I worked on with my friends as part of our Bachelor's degree. It is a full-stack website that integrates a simple AI model to assist users in researching house purchases.
          The website was built using React.js for the front end and FastAPI for the back end. To enhance user experience, we integrated an AI model that provides valuable insights through a regression model for house price prediction and a classification model to categorize houses.
          Additionally, we used Chart.js to visualize prediction data, making it easier for users to interpret the AI-generated insights.
          `}
          imageArray={PropertyLensImages}
          badge={["Full-Stack Website", "AI Integration", "Back-End Developer"]}
          myPart="
            In this project, I worked as a Back-End Developer, responsible for building a RESTful API using FastAPI. I ensured the API was well-documented and tested using Postman.
            To improve collaboration, I encouraged the team to use GitHub for version control, making the development process more structured and manageable.
            One of my key contributions was integrating our team's AI model into the backend, allowing the front end to access it for house price and category predictions. I developed the necessary API endpoints to facilitate this integration.
            Beyond my backend responsibilities, I also assisted with front-end development, specifically on the form validation and submission process for the Prediction page. This form enables users to interact with the AI model and retrieve prediction results.
            Additionally, I worked on data visualization, implementing interactive line and bar charts using Chart.js, allowing users to explore data more intuitively.
          "
          skills={[
            "ReactJS",
            "FastAPI",
            "Python",
            "ChartJS",
            "Postman API",
            "GitHub",
          ]}
          repoLink="https://github.com/froyplus000/PropertyLens"
        />
        {/* Lunatia */}
        <ProjectCard
          id="Lunatia"
          title="Lunatia"
          description={`
          The Lunatia Project is a console-based RPG developed in C# as part of my Object-Oriented Programming (OOP) coursework for my Bachelor’s degree, where I achieved a Distinction grade. This project extends the existing Swin-Adventure text-based RPG, incorporating advanced OOP concepts, design patterns, and unit testing using NUnit.
          The primary objective of the project was to demonstrate a deep understanding of software design principles, including the application of creational and structural design patterns, while ensuring code reliability through comprehensive unit testing.
          `}
          imageArray={LunatiaImages}
          badge={[
            "Object-Oriented Prigramming",
            "Unit Testing",
            "Console Based RPG Game",
          ]}
          myPart="
          In the Lunatia Project, I was responsible for designing an extension gameplay mechanics, including the crafting and gathering systems. 
          During the planning and design phase, I utilized UML and sequence diagrams to map out system interactions and ensure a structured approach.
          I conducted research on design patterns and successfully applied the Facade, Singleton, and Factory patterns to the project. 
          Additionally, I implemented unit tests to validate each iteration, ensuring that all tests passed as development progressed.
          For data management, I integrated external file reading, using JSON for item and object creation and text files for story-related content. 
          Throughout the development process, I leveraged GitHub for version control, enabling efficient progress tracking and file management.
          "
          skills={[
            "C#",
            "Object-Oriented Programming",
            "Unit Testing",
            "Design Patterns",
            "UML and Sequence Diagram",
            "GitHub",
          ]}
          repoLink="https://github.com/froyplus000/Lunatia-Project"
        />
      </section>
      {/* Pagination */}
      <section className="flex w-full justify-center gap-2 py-2 mt-4">
        <a
          href="#PropertyLens"
          className="btn btn-primary hover:btn-accent btn-sm md:btn-md basetransition"
        >
          1. PropertyLens
        </a>
        <a
          href="#Lunatia"
          className="btn btn-primary hover:btn-accent btn-sm md:btn-md basetransition"
        >
          2. Lunatia Project
        </a>
      </section>
      <div className="divider"></div>
    </section>
  );
}

export default Projects;
