
import PropTypes from 'prop-types';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';


const AdminDashboard = ({ changeUser }) => {
    return (
        <div className='h-screen w-full p-7'>
            <Header changeUser={changeUser} />
            <CreateTask />
            <AllTask />
        </div>
    );
};

AdminDashboard.propTypes = {
    changeUser: PropTypes.func,
};

export default AdminDashboard;