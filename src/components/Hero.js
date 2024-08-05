import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";
import intro from "../assets/intro.png";
export default function Hero() {
  const config = {
    title: "Im FrontEnd Developer",
    social: {
      github: "https://github.com/jebapaulson",
      linkedin: "https://www.linkedin.com/in/jeba-paulson-27bb78143/",
    },
  };
  return (
    <section className="flex flex-col md:flex-row px-5 py-10 bg-primary justify-center">
      <div className="md:w-1/2 flex flex-col">
        <h1 className=" text-white text-6xl font-name-font">
          Hi,
          <br />
          Im <span className="text-black">Jeba Paulson</span>
          <p className="text-2xl">{config.title}</p>
        </h1>
        <div className="flex py-10">
          <a
            className="pr-5 hover:text-white"
            target="_blank"
            href={config.social.linkedin}
          >
            <AiOutlineLinkedin size={40} />
          </a>
          <a
            className="hover:text-white"
            target="_blank"
            href={config.social.github}
          >
            <AiOutlineGithub size={40} />
          </a>
        </div>
      </div>
      <img className="md:w-1/4" alt="" src={intro} />
    </section>
  );
}
