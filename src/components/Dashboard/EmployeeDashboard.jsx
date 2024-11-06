import PropTypes from "prop-types";
import Header from "../other/Header";
import bgVideo3 from "../../assets/BackgroundVideo.mp4";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ changeUser, data }) => {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-[#1C1C1C]">
      
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bgVideo3}
        autoPlay
        loop
        muted
      ></video>

      <div className="relative z-10 w-[95%] bg-black bg-opacity-60 rounded-2xl p-10 flex flex-col space-y-5">
        <Header changeUser={changeUser} data={data} />
        <TaskListNumber data={data} />
        <TaskList data={data} />
      </div>
    </div>
  );
};

EmployeeDashboard.propTypes = {
  changeUser: PropTypes.func,
  data: PropTypes.object,
};

export default EmployeeDashboard;
