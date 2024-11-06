import PropTypes from "prop-types";

const TaskListNumber = ({ data }) => {
    return (
        <div className="grid mt-10 gap-5 sm:grid-cols-2 md:grid-cols-4">
            <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-red-400 to-red-600 opacity-90">
                <h2 className="text-2xl">{data.taskNumbers.newTask}</h2>
                <h3 className="text-xl font-medium">New Tasks</h3>
            </div>
            <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-blue-400 to-blue-600 opacity-90">
                <h2 className="text-2xl">{data.taskNumbers.active}</h2>
                <h3 className="text-xl font-medium">Active Tasks</h3>
            </div>
            <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-green-400 to-green-600 opacity-90">
                <h2 className="text-2xl">{data.taskNumbers.completed}</h2>
                <h3 className="text-xl font-medium">Completed Tasks</h3>
            </div>
            <div className="rounded-xl py-6 px-9 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-90">
                <h2 className="text-2xl">{data.taskNumbers.failed}</h2>
                <h3 className="text-xl font-medium">Failed Tasks</h3>
            </div>
        </div>
    );
};

TaskListNumber.propTypes = {
    data: PropTypes.shape({
        taskNumbers: PropTypes.shape({
            newTask: PropTypes.number.isRequired,
            active: PropTypes.number.isRequired,
            completed: PropTypes.number.isRequired,
            failed: PropTypes.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default TaskListNumber;
