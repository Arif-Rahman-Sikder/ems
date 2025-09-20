import PropTypes from 'prop-types'

const CompleteTask = ({ data, onRemove }) => {
    const handleRemove = () => {
        if (onRemove) onRemove();
    };
    return (
        <div className='flex-shrink-0 h-full w-[300px] p-5 bg-blue-100 border border-blue-200 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 text-sm px-3 py-1 rounded text-white'>{data.category}</h3>
                <h4 className='text-sm'>{data.taskDate}</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>{data.taskTitle}</h2>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-6'>
                <button onClick={handleRemove} className='w-full bg-green-600 rounded font-medium py-1 px-2 text-xs text-white hover:bg-green-700'>Remove Task</button>
            </div>
        </div>
    )
}

CompleteTask.propTypes = {
    data: PropTypes.shape({
        category: PropTypes.string.isRequired,
        taskDate: PropTypes.string.isRequired,
        taskTitle: PropTypes.string.isRequired,
        taskDescription: PropTypes.string.isRequired
    }).isRequired,
    onRemove: PropTypes.func
}

export default CompleteTask