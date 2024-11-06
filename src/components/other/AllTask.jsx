import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);

  return (
    <div
      id="alltask"
      className="bg-[#2e2e2eaf] p-6 mt-5 rounded-lg max-w-screen-lg mx-auto"
    >
      <div className="bg-red-400 mb-2 py-2 px-4 grid grid-cols-5 gap-4 rounded text-center">
        <h2 className="text-lg font-medium">Names</h2>
        <h3 className="text-lg font-medium">New Tasks</h3>
        <h5 className="text-lg font-medium">Active Tasks</h5>
        <h5 className="text-lg font-medium">Completed</h5>
        <h5 className="text-lg font-medium">Failed</h5>
      </div>

      <div className="h-[80%] overflow-auto space-y-2">
        {userData.map((elem) => (
          <div
            key={elem.id}
            className="border-2 border-emerald-500 py-2 px-4 grid grid-cols-5 gap-4 rounded-lg bg-gray-800"
          >
            <h2 className="text-lg font-medium text-white text-center">
              {elem.firstName}
            </h2>
            <h3 className="text-lg font-medium text-blue-500 text-center">
              {elem.taskNumbers.newTask}
            </h3>
            <h5 className="text-lg font-medium text-yellow-400 text-center">
              {elem.taskNumbers.active}
            </h5>
            <h5 className="text-lg font-medium text-green-600 text-center">
              {elem.taskNumbers.completed}
            </h5>
            <h5 className="text-lg font-medium text-red-600 text-center">
              {elem.taskNumbers.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
