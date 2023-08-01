import { Outlet, Link } from "react-router-dom";

const Navigation = () => {
  return (
    <>
      <nav className="items-center w-full border-b-2 border-gray-400">
        <div className="flex justify-between items-center container mx-auto min-h-[100px] ">
          <div className="text-2xl text-[#FBBD23]">
            <h1>
              <Link to="/">naufalAddhiya</Link>
            </h1>
          </div>
          <div>
            <ul className="flex items-center justify-between">
              <li className="mx-2 hover:underline">
                <Link to="/about">About Me</Link>
              </li>
              <li className="mx-2">
                <Link to="/project">Project</Link>
              </li>
              <li className="mx-2">
                <Link>Experience</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navigation;
