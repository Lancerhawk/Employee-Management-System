import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { getLocalStorage, setLocalStorage } from "../utils/localstorage";
// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    // localStorage.clear();

    const [userData, setUserData] = useState(null)

    useEffect(() =>{
        setLocalStorage();
        const {employees} = getLocalStorage()
        setUserData(employees)
    }, [])



  return (
    <div>
      <AuthContext.Provider value={[userData,setUserData]}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
