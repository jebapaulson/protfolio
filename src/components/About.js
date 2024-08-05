import about from "../assets/about.png";
export default function About() {
  const config = {
    content1:
      " Hi, My name is Jeba Paulson. I am a Frontend web Developer. I built beautiful websites using React.js and Tailwind CSS.",
    content2:
      "I am proficient in Frontend skills like React.js, Redux, Redux ToolKit, Axios, Tailwind, CSS, SaSS, CSS3 and many more.",
    content3: "In backend I know Node.js, Express.js.",
  };
  return (
    <section className="flex flex-col md:flex-row bg-secondary px-5" id="about">
      <div className="md:w-1/2 py-5">
        <img alt="" src={about}></img>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <div className="flex flex-col justify-center text-white ">
          <h1 className="text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold">
            About me
          </h1>
          <p className="pb-6">{config.content1}</p>
          <p className="pb-6">{config.content2}</p>
          <p className="pb-6">{config.content3}</p>
        </div>
      </div>
    </section>
  );
}
