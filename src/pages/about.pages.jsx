import "../index.css";
import { skills } from "../data/skills";
import { tools } from "../data/tools";

const About = () => {
  return (
    <div className="container min-h-screen mx-auto mt-20 text-white">
      <div className="flex p-6 rounded-lg bg-slate-950">
        <div className="flex flex-col w-1/2">
          <div className="flex items-center gap-4">
            <h1 className="text-3xl font-bold">About Me</h1>
            <div className="h-[1px] w-[350px] bg-white"></div>
          </div>
          <div className="flex items-center justify-center ">
            <img
              src="../../public/jiro.jpg"
              alt=""
              className="rounded-full h-80 border-[#FBBD23] border-solid border-4"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center w-1/2">
          <p className="mt-4 text-md">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt
            obcaecati recusandae accusamus! Quos dolorum eligendi vitae dolor et
            officiis dolorem eum deserunt provident perspiciatis, culpa,
            assumenda deleniti vero modi hic!
          </p>
          <p className="mt-3 text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla sunt
            iste deleniti fugiat ducimus temporibus quam obcaecati consequatur
            consequuntur! Dolores rerum, non ullam quasi blanditiis autem,
            exercitationem iste tempora ratione eligendi, sint incidunt optio!
            Excepturi, obcaecati. Aliquid quaerat ratione eum.
          </p>
        </div>
      </div>
      <div>
        <h1 className="mt-10 text-3xl font-bold text-center">Skills</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {skills.map((skill, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              data-aos-duration="500"
              data-aos-offset="100"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="flex flex-col items-center px-2 py-4 transition-all hover:-translate-y-2">
                <i className={`${skill.icon} text-6xl`} />
                <p className="mt-3 text-sm font-bold">{skill.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="mt-10 text-3xl font-bold text-center">Tools</h1>
        <div className="flex flex-wrap justify-center gap-10 mt-10">
          {tools.map((tool, index) => (
            <div key={index}>
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={`${index}00`}
                data-aos-duration="500"
                data-aos-offset="100"
                data-aos-easing="ease-in-out"
                data-aos-once="false"
              >
                <div className="flex flex-col items-center px-2 py-4 transition-all hover:-translate-y-2">
                  <i className={`${tool.icon} text-6xl`}></i>
                  <p className="mt-3 text-xl font-bold">{tool.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
