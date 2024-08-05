import fleet from "../assets/fleet.jpeg";
import erp from "../assets/erp.png";
export default function Projects() {
  const config = {
    projects: [
      {
        img: fleet,
        description: "Fleet Management System. Website is built using React.js",
      },
      {
        img: erp,
        description:
          "ERP system made up of different modules to manage all areas of your business.",
      },
    ],
  };
  return (
    <section
      className="flex flex-col py-5 px-5 justify-center bg-primary text-white"
      id="projects"
    >
      <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[150px] font-bold">
            Projects
          </h1>
          <p>
            These are some of my best projects. I have built with React,Redux
            and CSS. Check them out.
          </p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row px-10 gap-5">
          {config.projects.map((project) => (
            <div className="relative">
              <img className="h-[200px]" alt="" src={project.img} />
              <div className="project-des">
                <p className="text-center px-5 py-5">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
