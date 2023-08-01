import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <div className="flex items-center justify-center mt-24">
      <div className="flex gap-20">
        <div className="flex flex-col justify-center">
          <p className="text-[#FBBD23] font-medium text-md">
            Hello World I&apos;m
          </p>
          <h1 className="mt-2 text-4xl font-bold">Naufal Addhiya</h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Web Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Frontend Developer",
            ]}
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
        <div className="flex items-center justify-center ">
          <img
            src="../../public/jiro.jpg"
            alt=""
            className="rounded-full h-80 border-[#FBBD23] border-solid border-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
