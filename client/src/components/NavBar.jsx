import React from 'react'

const NavBar = () => {
  return (
    <div>
          <nav className="bg-gray-800">
  <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
    <div className="relative flex items-center justify-between h-16">
      <div className="flex items-center px-2 lg:px-0">
        <div className="flex-shrink-0">
          <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Logo" />
        </div>
        <div className="hidden lg:block lg:ml-6">
          <div className="flex space-x-4">
            <a href="#" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Buffets</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Rooms</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Feedback</a>

            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact us</a>
          </div>
        </div>
      </div>
      <div className="hidden lg:block">
  <div className="flex items-center">
  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      <i className="fas fa-shopping-cart"></i>
    </a>
    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      <i className="fas fa-sign-in-alt"></i>
    </a>
    <a href="#" className="ml-4 text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      <i className="fas fa-user-plus"></i>
    </a>
  </div>
</div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default NavBar