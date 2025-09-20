import PropTypes from 'prop-types'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-100 border border-blue-200'>
            <h2 className='text-3xl font-bold text-blue-700'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-blue-600'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-100 border border-blue-200'>
            <h2 className='text-3xl font-bold text-blue-700'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-blue-600'>Completed Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-100 border border-blue-200'>
            <h2 className='text-3xl font-bold text-blue-700'>{data.taskCounts.active}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-blue-600'>Accepted Task</h3>
        </div>
        <div className='rounded-xl w-[45%] py-6 px-9 bg-blue-100 border border-blue-200'>
            <h2 className='text-3xl font-bold text-blue-700'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl mt-0.5 font-medium text-blue-600'>Failed Task</h3>
        </div>
    </div>
  )
}

TaskListNumbers.propTypes = {
    data: PropTypes.shape({
        taskCounts: PropTypes.shape({
            active: PropTypes.number.isRequired,
            newTask: PropTypes.number.isRequired,
            completed: PropTypes.number.isRequired,
            failed: PropTypes.number.isRequired
        }).isRequired
    }).isRequired
}

export default TaskListNumbers