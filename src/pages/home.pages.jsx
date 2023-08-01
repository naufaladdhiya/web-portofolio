import Profile from "../assets/jiro.jpg";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="flex items-center justify-center mt-24 md:min-h-screen xl:min-h-min">
      <div className="flex flex-col gap-20 md:flex-row">
        <div className="flex flex-col justify-center" data-aos="fade-right">
          <p className="font-medium text-darkPrimary text-md">
            Hello World I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-bold">Naufal Addhiya</h1>
          <TypeAnimation
            sequence={["Web Developer", 1000, "Frontend Developer"]}
            wrapper="span"
            speed={39}
            style={{
              fontSize: "16px",
              display: "inline-block",
              marginTop: "0.5rem",
              fontWeight: "medium",
            }}
            repeat={Infinity}
          />
          <p className="mt-2 text-sm font-medium">
            Welcome to My Personal Website &#x1F44B;
          </p>
        </div>
        <div
          className="flex items-center justify-center w-[300px]"
          data-aos="fade-left"
        >
          <img
            src={Profile}
            alt="profile"
            className="border-4 border-solid rounded-full h-80 border-darkPrimary mb-14"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
