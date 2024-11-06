import PropTypes from "prop-types"; 
const CompleteTask = ({data}) => {
    return (

        <div className="flex flex-col flex-shrink-0 w-[300px] p-5 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
            <div className="flex justify-between items-center">
                <h3 className="bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                {data.category}
                </h3>
                <h4 className="text-sm font-light text-gray-200">{data.date}</h4>
            </div>

            <h2 className="mt-5 text-2xl font-semibold text-white">{data.title}</h2>

            <div className="overflow-y-auto max-h-24 mt-2">
                <p className="text-sm text-gray-100 leading-tight"> {data.description}</p>
            </div>

            <div className="flex justify-between mt-auto space-x-3 pt-4">
                <button className="flex-1 py-2 text-sm font-semibold text-white bg-gradient-to-r from-green-700 to-green-500 rounded-full shadow-lg hover:from-green-800 hover:to-green-600 transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
                    Completed
                </button>
            </div>

        </div>
    )
};

CompleteTask.propTypes = {
    data: PropTypes.shape({
      title: PropTypes.string.isRequired,    
      description: PropTypes.string.isRequired,   
      category: PropTypes.string.isRequired,   
      date: PropTypes.string.isRequired,   
    }).isRequired,
  };
  

export default CompleteTask
