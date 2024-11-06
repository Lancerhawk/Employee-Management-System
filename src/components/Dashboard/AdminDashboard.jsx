
import PropTypes from "prop-types";
import Header from "../other/Header";
import bgVideo3 from "../../assets/BackgroundVideo.mp4";
import CreateTask from "../other/CreateTask";
import AllTask from "../other/AllTask";

const AdminDashboard = (props) => {

    
    return (
        <div className="relative flex items-center justify-center min-h-screen bg-[#1C1C1C]">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={bgVideo3}
                autoPlay
                loop
                muted 
            ></video>

            <div className="relative z-10 w-[95%] max-w-4xl bg-black bg-opacity-60 rounded-2xl p-8 md:p-10 flex flex-col space-y-6">
                <Header changeUser={props.changeUser}/>
                <CreateTask/>
                <AllTask/>
            </div>
        </div>
    );
};

AdminDashboard.propTypes = {
    changeUser: PropTypes.func, 
};

export default AdminDashboard;
