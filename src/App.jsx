import Login from "./components/Auth/Login";
import { useContext, useEffect, useState } from "react";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [userData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser);
      setUser(userData.role);
      setLoggedInUserData(userData.data);
    }
  }, [userData]);

  const handleLogin = (email, password) => {
    if (email === "admin@me.com" && password === "123") {
      const user = { role: "admin" };
      setUser(user.role);
      setLoggedInUserData(user);
      localStorage.setItem("loggedInUser", JSON.stringify(user));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && e.password === password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <>
      {!user ? (<Login handleLogin={handleLogin} />) : user === "admin" ? (<AdminDashboard changeUser={setUser} />) : user === "employee" ? (<EmployeeDashboard changeUser={setUser} data={loggedInUserData} />) : null}
    </>
  );
};

export default App;
