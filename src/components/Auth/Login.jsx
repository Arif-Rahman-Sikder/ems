import { useState } from 'react'
import PropTypes from 'prop-types'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail("")
    setPassword("")
  }

  return (
    <div className="flex flex-col h-screen w-screen bg-gradient-to-r from-emerald-500 via-emerald-600 to-emerald-700">
      {/* Centered Login Card */}
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-[400px]">
          {/* Bold Header */}
          <h1 className="text-3xl font-extrabold text-center mb-2 text-emerald-700">
            Employee Management System
          </h1>
          <p className="text-center text-gray-500 mb-8">
            Please log in to continue
          </p>

          <form 
            onSubmit={(e) => submitHandler(e)}
            className="flex flex-col gap-4"
          >
            {/* Email Field */}
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="outline-none bg-gray-50 border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300 text-gray-700 font-medium text-base py-3 px-5 rounded-xl placeholder:text-gray-400 transition duration-200"
              type="email"
              placeholder="Enter your email"
            />

            {/* Password Field */}
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="outline-none bg-gray-50 border border-gray-300 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-300 text-gray-700 font-medium text-base py-3 px-5 rounded-xl placeholder:text-gray-400 transition duration-200"
              type="password"
              placeholder="Enter password"
            />

            {/* Credentials Info */}
            <p className="text-xs text-gray-500 mt-[-10px] mb-2 text-center">
              To know the login credentials, go to the GitHub README.
            </p>

            {/* Login Button */}
            <button 
              className="mt-2 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-lg py-3 px-6 w-full rounded-xl shadow-md transition-all duration-200"
            >
              Log in
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 bg-emerald-800 text-center text-white text-sm shadow-inner">
        <p className="mb-1">
          Made by <span className="font-semibold">Arif Rahman Sikder</span>
        </p>
        <p className="text-xs text-gray-300">
          © {new Date().getFullYear()} All Rights Reserved · Full Stack Developer
        </p>
      </footer>
    </div>
  )
}

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired
}

export default Login
