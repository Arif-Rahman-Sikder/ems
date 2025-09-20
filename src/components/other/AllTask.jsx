import { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  return (
    <div className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-2xl shadow-lg mt-6 border border-emerald-100">
      
      {/* Table Header */}
      <div className="bg-emerald-600 text-white mb-4 py-3 px-6 flex justify-between rounded-xl shadow">
        <h2 className="text-lg font-semibold w-1/5">Employee Name</h2>
        <h3 className="text-lg font-semibold w-1/5 text-center">New Task</h3>
        <h5 className="text-lg font-semibold w-1/5 text-center">Active</h5>
        <h5 className="text-lg font-semibold w-1/5 text-center">Completed</h5>
        <h5 className="text-lg font-semibold w-1/5 text-center">Failed</h5>
      </div>

      {/* Table Rows */}
      <div className="space-y-4">
        {userData.map(function (elem, idx) {
          return (
            <div
              key={idx}
              className="bg-white border border-emerald-200 rounded-xl p-5 shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex justify-between items-center">
                <h2 className="text-base font-medium w-1/5 text-gray-800">
                  {elem.firstName}
                </h2>
                <h3 className="text-base font-semibold w-1/5 text-center text-blue-600">
                  {elem.taskCounts.newTask}
                </h3>
                <h5 className="text-base font-semibold w-1/5 text-center text-yellow-500">
                  {elem.taskCounts.active}
                </h5>
                <h5 className="text-base font-semibold w-1/5 text-center text-green-600">
                  {elem.taskCounts.completed}
                </h5>
                <h5 className="text-base font-semibold w-1/5 text-center text-red-600">
                  {elem.taskCounts.failed}
                </h5>
              </div>

              {/* Show task names and status */}
              <div className="mt-3 flex flex-wrap gap-2">
                {elem.tasks && elem.tasks.length > 0 ? (
                  elem.tasks.map((task, tIdx) => (
                    <span
                      key={tIdx}
                      className={`px-3 py-1 rounded-full text-xs font-semibold shadow-sm transition duration-200 ${
                        task.completed
                          ? 'bg-green-100 text-green-700 border border-green-200'
                          : task.failed
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : task.active
                          ? 'bg-yellow-100 text-yellow-700 border border-yellow-200'
                          : 'bg-blue-100 text-blue-700 border border-blue-200'
                      }`}
                    >
                      {task.taskTitle}{' '}
                      ({task.completed
                        ? 'Completed'
                        : task.failed
                        ? 'Failed'
                        : task.active
                        ? 'Accepted'
                        : 'New'})
                    </span>
                  ))
                ) : (
                  <span className="text-gray-400 text-xs italic">
                    No tasks
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
