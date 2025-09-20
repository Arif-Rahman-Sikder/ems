import PropTypes from 'prop-types'

const Header = ({ changeUser, data }) => {
  const username = data ? data.firstName : 'Admin'

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    changeUser('')
    // window.location.reload()
  }

  
  return (
    <div className='flex items-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>{username} 👋</span></h1>
        <button onClick={logOutUser} className='bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm'>Log Out</button>
    </div>
  )
}

Header.propTypes = {
    changeUser: PropTypes.func.isRequired,
    data: PropTypes.shape({
        firstName: PropTypes.string
    })
}

export default Header