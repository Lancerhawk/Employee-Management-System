import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [asignTo, setAsignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        if (!taskTitle) {
            alert("Task title is required.");
            return;
        }

        const newTask = {
            title: taskTitle,
            description: taskDescription,
            date: taskDate,
            category: category,
            active: false,
            newTask: true,
            completed: false,
            failed: false
        };

        const updatedUserData = userData.map((user) => {
            if (user.firstName === asignTo) {
                return {
                    ...user,
                    tasks: [...user.tasks, newTask],
                    taskNumbers: {
                        ...user.taskNumbers,
                        newTask: user.taskNumbers.newTask + 1
                    }
                };
            }
            return user;
        });

        setUserData(updatedUserData);
        localStorage.setItem('userData', JSON.stringify(updatedUserData));
        // console.log(updatedUserData)

        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setTaskDate('');
        setTaskDescription('');
    };


    return (
        <div>
            <div>
                <form onSubmit={submitHandler} className="flex flex-wrap w-full bg-[#2e2e2eaf] rounded-lg p-6 items-start justify-between space-y-4 md:space-y-0">
                    <div className="w-full md:w-1/2 pr-0 md:pr-4 space-y-6">
                        <div>
                            <h3 className="text-white mb-1">Task Title:</h3>
                            <input
                                value={taskTitle}
                                onChange={(e) => setTaskTitle(e.target.value)}
                                type="text"
                                placeholder="Make a UI design..."
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1">Date:</h3>
                            <input
                                value={taskDate}
                                onChange={(e) => setTaskDate(e.target.value)}
                                type="date"
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1">Assign to:</h3>
                            <input
                                value={asignTo}
                                onChange={(e) => setAsignTo(e.target.value)}
                                type="text"
                                placeholder="Employee Name..."
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>

                        <div>
                            <h3 className="text-white mb-1">Category:</h3>
                            <input
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                type="text"
                                placeholder="Design, Development, etc..."
                                className="w-full px-4 py-2 bg-gray-700 text-white rounded-md outline-none focus:ring-2 focus:ring-indigo-500"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2 space-y-4">
                        <h3 className="text-white mb-1">Description:</h3>
                        <textarea
                            value={taskDescription}
                            onChange={(e) => setTaskDescription(e.target.value)}
                            cols="30" rows="10" placeholder="Enter task description..."
                            className="w-full h-32 px-4 py-2 bg-gray-700 text-white rounded-md outline-none resize-none focus:ring-2 focus:ring-indigo-500"></textarea>

                        <button
                            type="submit"
                            className="w-full md:w-100% px-6 py-2 bg-indigo-600 text-white rounded-md mt-4 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                            Create Task
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateTask;
