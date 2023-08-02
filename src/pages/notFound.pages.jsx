import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center mt-64">
      <div className="flex flex-col">
        <p className="font-bold text-center text-white text-8xl">404</p>
        <p className="mt-3 text-2xl font-medium text-center text-white">
          Not Found Page
        </p>
        <button
          className="p-2 mt-3 text-xl bg-darkPrimary rounded-2xl"
          onClick={() => {
            navigate("/");
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
