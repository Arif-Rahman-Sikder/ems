import { useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import { AuthContext } from '../../context/AuthProvider';

const EmployeeDashboard = ({ changeUser, data }) => {
    const [userData, setUserData] = useContext(AuthContext);
    // Find the latest employee data by id
    const employee = userData?.find(emp => emp.id === data.id) || data;

    const handleTaskUpdate = (updatedTasks) => {
        // Calculate new taskCounts
        const counts = { active: 0, newTask: 0, completed: 0, failed: 0 };
        updatedTasks.forEach(task => {
            if (task.active) counts.active++;
            if (task.newTask) counts.newTask++;
            if (task.completed) counts.completed++;
            if (task.failed) counts.failed++;
        });
        const updatedEmployee = {
            ...employee,
            tasks: updatedTasks,
            taskCounts: counts
        };
        const updatedEmployees = userData.map(emp =>
            emp.id === employee.id ? updatedEmployee : emp
        );
        setUserData(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-emerald-50 via-white to-emerald-50 p-8">
            {/* Card container */}
            <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-2xl p-8 border border-emerald-100">
                {/* Header */}
                <Header changeUser={changeUser} data={employee} />

                {/* Task Summary Numbers */}
                <div className="mt-8">
                    <TaskListNumbers data={employee} />
                </div>

                {/* Task List */}
                <div className="mt-10">
                    <h2 className="text-xl font-bold text-emerald-700 mb-4 border-b border-gray-200 pb-2">
                        Task Overview
                    </h2>
                    <TaskList data={employee} updateTask={handleTaskUpdate} />
                </div>
            </div>
        </div>
    );
};

EmployeeDashboard.propTypes = {
    changeUser: PropTypes.func.isRequired,
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        firstName: PropTypes.string,
        taskCounts: PropTypes.shape({
            active: PropTypes.number,
            newTask: PropTypes.number,
            completed: PropTypes.number,
            failed: PropTypes.number
        }),
        tasks: PropTypes.array
    }).isRequired
};

export default EmployeeDashboard;
