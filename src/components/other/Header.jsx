import PropTypes from "prop-types";
import { useState, useEffect } from "react";

const Header = (props) => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!props.data) {
      setUsername("Admin");  
    } else {
      setUsername(props.data.firstName);  
    }
  }, [props.data]);  

  const logoutUser = () => {
    localStorage.setItem("loggedInUser", "");  
    props.changeUser("");  
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-lg md:text-xl font-bold">
        Hello, <br />
        <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-500">
          {username || "User"}  
        </span>
        <span className="text-3xl md:text-4xl">👋</span>
      </h1>

      <button
        className="px-4 md:px-6 py-2 text-white bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg 
        hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out"
        onClick={logoutUser}
      >
        Log Out!
      </button>
    </div>
  );
};

Header.propTypes = {
  data: PropTypes.shape({
    firstName: PropTypes.string.isRequired, 
  }),
  changeUser: PropTypes.func.isRequired,  
};

export default Header;

