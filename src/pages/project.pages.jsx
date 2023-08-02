import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import EXPERIENCE_DATA from "../data/experience.data";

const Project = () => {
  return (
    <div className="flex items-center justify-center min-h-screen mt-32 mb-9">
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-center md:text-3xl">
          Past Project Experince
        </h1>
        <p className="mt-2 text-sm font-medium text-center text-darkPrimary md:text-base">
          Explore the projects i&apos;m worked on so far
        </p>
        <div className="container grid grid-cols-1 gap-16 mx-auto mt-9 md:grid-cols-2">
          {EXPERIENCE_DATA.map((experience, index) => (
            <div
              key={index}
              className="w-full rounded-lg bg-slate-950"
              data-aos="zoom-in"
              data-aos-delay={`${index}00`}
              data-aos-duration="750"
              data-aos-easing="ease-in-out"
              data-aos-once="false"
            >
              <div className="flex flex-col p-6">
                <img
                  src={experience.image}
                  alt={experience.title}
                  className="rounded-lg cursor-pointer hover:opacity-50"
                />
                <h1 className="mt-4 text-xl font-bold">{experience.title}</h1>
                <p className="mt-2 text-sm font-medium min-h-[110px]">
                  {experience.description}
                </p>
                <ul className="flex flex-wrap items-center mt-4">
                  {experience.tags.map((tag, index) => (
                    <li
                      key={index}
                      className="mr-2 text-base font-medium text-darkPrimary"
                    >
                      {tag}
                      {index !== experience.tags.length - 1 && ", "}
                    </li>
                  ))}
                </ul>
                <div className="flex items-end justify-end gap-5 mt-3">
                  <a
                    href={experience.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-xl cursor-pointer"
                      rel="noopener noreferrer"
                    />
                  </a>
                  <a
                    href={experience.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faArrowUpRightFromSquare}
                      className="text-xl cursor-pointer"
                    />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
