import { Outlet, Link } from "react-router-dom";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <nav className="fixed top-0 w-full border-gray-400 z-[99] shadow-2xl bg-slate-900">
        <div className="flex justify-between items-center container mx-auto min-h-[100px]">
          <div className="text-xl text-darkPrimary md:text-2xl">
            <h1 className="font-bold">
              <Link to="/">naufalAddhiya</Link>
            </h1>
          </div>
          <div
            className={`fixed top-0 right-0 w-3/4 h-full bg-slate-950 z-[99] transition-transform block ease-in-out duration-500 ${
              showMenu
                ? "transform translate-x-0 "
                : "transform translate-x-full"
            }`}
          >
            <div className="float-right mt-5 mr-4 text-2xl">
              <button onClick={handleShowMenu}>X</button>
            </div>
            <ul className="flex flex-col items-center justify-center h-full font-bold gap-14">
              <li className="mx-2 hover:text-darkPrimary ">
                <Link to="/about" onClick={handleShowMenu}>
                  About Me
                </Link>
              </li>
              <li className="mx-2 hover:text-darkPrimary">
                <Link to="/project" onClick={handleShowMenu}>
                  Project
                </Link>
              </li>
              <li className="mx-2 hover:text-darkPrimary">
                <Link to="/experience" onClick={handleShowMenu}>
                  Experience
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="flex items-center justify-between font-bold">
              <li className="hidden mx-2 hover:text-darkPrimary md:block">
                <Link to="/about">About Me</Link>
              </li>
              <li className="hidden mx-2 md:block hover:text-darkPrimary">
                <Link to="/project">Project</Link>
              </li>
              <li className="hidden mx-2 md:block hover:text-darkPrimary">
                <Link to="/experience">Experience</Link>
              </li>
              <li
                className="block mx-2 text-xl md:hidden"
                onClick={handleShowMenu}
              >
                <FontAwesomeIcon icon={faBars} />
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
