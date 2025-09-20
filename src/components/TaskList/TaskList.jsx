import PropTypes from 'prop-types'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data, updateTask }) => {
    const handleTaskUpdate = (taskId, newStatus) => {
        let updatedTasks = data.tasks.map((task, index) => {
            if (index === taskId) {
                return {
                    ...task,
                    ...newStatus
                };
            }
            return task;
        });
        // If completed, remove from list after marking as completed
        if (newStatus.completed) {
            updatedTasks = updatedTasks.filter((_, i) => i !== taskId);
        }
        updateTask(updatedTasks);
    };

    return (
        <div id='tasklist' className='h-[50%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-1 mt-16'>
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} onStatusChange={(newStatus) => handleTaskUpdate(idx, newStatus)} />
                }
                if (elem.newTask) {
                    return <NewTask key={idx} data={elem} onStatusChange={(newStatus) => handleTaskUpdate(idx, newStatus)} />
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} onRemove={() => {
                        // Remove the completed task from the list
                        const updatedTasks = data.tasks.filter((_, i) => i !== idx);
                        updateTask(updatedTasks);
                    }} />
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />
                }
                return null;
            })}
        </div>
    )
}

TaskList.propTypes = {
    data: PropTypes.shape({
        tasks: PropTypes.arrayOf(PropTypes.shape({
            active: PropTypes.bool,
            newTask: PropTypes.bool,
            completed: PropTypes.bool,
            failed: PropTypes.bool,
            taskTitle: PropTypes.string,
            taskDescription: PropTypes.string,
            taskDate: PropTypes.string,
            category: PropTypes.string
        })).isRequired
    }).isRequired,
    updateTask: PropTypes.func.isRequired
}

export default TaskList