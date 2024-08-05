import resume from "../assets/resume.webp";
import resumecpy from "../assets/resumecpy.pdf";
export default function Resume() {
  const config = {
    link: resumecpy,
  };
  return (
    <section
      id="resume"
      className="flex flex-col md:flex-row bg-secondary px-5 py-5"
    >
      <div className="md:w-1/2 py-5 flex justify-end">
        <img alt="" src={resume}></img>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white ">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold">
            Resume
          </h1>
          <p className="pb-6">
            You can view my resume.
            <a className="btn" href={config.link}>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
