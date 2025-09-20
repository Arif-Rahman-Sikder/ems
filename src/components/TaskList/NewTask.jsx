import PropTypes from 'prop-types'

const NewTask = ({data, onStatusChange}) => {
    const handleAccept = () => {
        onStatusChange({
            active: true,
            newTask: false,
            completed: false,
            failed: false
        });
    };
    
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-white shadow-lg rounded-xl border border-gray-200'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 text-sm px-3 py-1 rounded'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button onClick={handleAccept} className='bg-blue-500 rounded font-medium py-1 px-2 text-xs text-white hover:bg-blue-600'>Accept Task</button>
            </div>
        </div>
    )
}

NewTask.propTypes = {
    data: PropTypes.shape({
        category: PropTypes.string.isRequired,
        taskDate: PropTypes.string.isRequired,
        taskTitle: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired
    }).isRequired,
    onStatusChange: PropTypes.func.isRequired
}

export default NewTask