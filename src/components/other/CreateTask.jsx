import { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext)

    const [taskTitle, setTaskTitle] = useState('')
    const [taskDescription, setTaskDescription] = useState('')
    const [taskDate, setTaskDate] = useState('')
    const [asignTo, setAsignTo] = useState('')
    const [category, setCategory] = useState('')

    // removed unused newTask state

    const submitHandler = (e) => {
        e.preventDefault();
        const task = { taskTitle, taskDescription, taskDate, category, active: false, newTask: true, failed: false, completed: false };
        // Create a new array to avoid mutating state directly
        const updatedEmployees = userData.map(emp => {
            if (asignTo === emp.firstName) {
                return {
                    ...emp,
                    tasks: [...emp.tasks, task],
                    taskCounts: {
                        ...emp.taskCounts,
                        newTask: (emp.taskCounts.newTask || 0) + 1
                    }
                };
            }
            return emp;
        });
        setUserData(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        setTaskTitle('');
        setCategory('');
        setAsignTo('');
        setTaskDate('');
        setTaskDescription('');
    }

    return (
        <div className='p-5 bg-white shadow-lg border border-blue-100 mt-5 rounded-lg'>
            <form onSubmit={(e) => {
                submitHandler(e)
            }}
                className='flex flex-wrap w-full items-start justify-between'
            >
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-blue-700 mb-0.5'>Task Title</h3>
                        <input
                            value={taskTitle}
                            onChange={(e) => {
                                setTaskTitle(e.target.value)
                            }}
                            required
                            className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-white border border-blue-200 mb-4 focus:border-blue-500' 
                            type="text" 
                            placeholder='Make a UI design'
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-blue-700 mb-0.5'>Date</h3>
                        <input
                            value={taskDate}
                            onChange={(e) => {
                                setTaskDate(e.target.value)
                            }}
                            required
                            className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-white border border-blue-200 mb-4 focus:border-blue-500' 
                            type="date" 
                        />
                    </div>
                    <div>
                        <h3 className='text-sm text-blue-700 mb-0.5'>Assign to</h3>
                        <select
                            value={asignTo}
                            onChange={(e) => {
                                setAsignTo(e.target.value)
                            }}
                            required
                            className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-white border border-blue-200 mb-4 focus:border-blue-500'
                        >
                            <option value="">Select Employee</option>
                            {userData && userData.map(emp => (
                                <option key={emp.id} value={emp.firstName}>
                                    {emp.firstName}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <h3 className='text-sm text-blue-700 mb-0.5'>Category</h3>
                        <select
                            value={category}
                            onChange={(e) => {
                                setCategory(e.target.value)
                            }}
                            required
                            className='text-sm py-2 px-3 w-4/5 rounded outline-none bg-white border border-blue-200 mb-4 focus:border-blue-500'
                        >
                            <option value="">Select Category</option>
                            <option value="Design">Design</option>
                            <option value="Development">Development</option>
                            <option value="Testing">Testing</option>
                            <option value="DevOps">DevOps</option>
                            <option value="Documentation">Documentation</option>
                        </select>
                    </div>
                </div>

                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-blue-700 mb-0.5'>Description</h3>
                    <textarea 
                        value={taskDescription}
                        onChange={(e) => {
                            setTaskDescription(e.target.value)
                        }} 
                        required
                        className='w-full h-44 text-sm py-2 px-3 rounded outline-none bg-white border border-blue-200 focus:border-blue-500' 
                        placeholder='Enter task description'
                    ></textarea>
                    <button className='bg-blue-600 text-white py-3 hover:bg-blue-700 px-5 rounded text-sm mt-4 w-full transition duration-200'>
                        Create Task
                    </button>
                </div>
            </form>
        </div>
    )
}

export default CreateTask