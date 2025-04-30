import React from 'react'

const Navbar = () => {
  return (
    <div className='Nav' class="bg-cyan-400 p-4 w-full flex flex-row">
        <p className="logo w-full text-2xl font-bold">PSYZANE</p>
        <div className="tabs flex flex-row mr-8 gap-8 text-sm m-auto font-medium">
            <a className="nav_btn1 data-focus:bg-gray-100 data-focus:outline-hidden">one</a>
            <a className="nav_btn2 data-focus:bg-gray-100">two</a>
            <a className="nav_btn3 data-focus:bg-gray-100">three</a>
            <a className="nav_btn4 data-focus:bg-gray-100">four</a>
            <a className="nav_btn5 data-focus:bg-gray-100">five</a>
        </div>
    </div>
  )
}

export default Navbar