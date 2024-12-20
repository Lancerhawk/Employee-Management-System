import PropTypes from "prop-types";

const FailedTask = ({ data }) => {
  return (
    <div className="flex flex-col flex-shrink-0 w-[300px] p-5 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-700 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
          {data.category}
        </h3>
        <h4 className="text-sm font-light text-gray-200">{data.date}</h4>
      </div>

      <h2 className="mt-5 text-2xl font-semibold text-white">{data.title}</h2>

      <div className="overflow-y-auto max-h-24 mt-2">
        <p className="text-sm text-gray-100 leading-tight">{data.description}</p>
      </div>

      <div className="flex justify-between mt-auto space-x-3 pt-4">
        <button className="flex-1 py-2 text-sm font-semibold text-white bg-gradient-to-r from-yellow-600 to-yellow-400 rounded-full shadow-lg hover:from-yellow-700 hover:to-yellow-500 transform hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
          Failed!
        </button>
      </div>
    </div>
  );
};

FailedTask.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default FailedTask;
