import Link from 'next/link';
import React from 'react';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {

    const showSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'flex';
      };
      
    const hideSidebar = () => {
        const sidebar = document.querySelector('.sidebar');
        sidebar.style.display = 'none';
      };

    return ( 
        <nav>
            <ul className="navbar">
            <div className="page-title">
                <Link href="/"><h1>alvingarrin</h1></Link>
            </div>           
            <div className="links">
                <div className="dropdown hideOnMobile">
                    <button className="dropbtn">Simple Apps
                    </button>
                    <div className="dropdown-content">
                        <Link href="/weatherapp">Weather App</Link>
                        <Link href="/calculator">Calculator</Link>
                        <Link href="/bmicalculator">BMI Calculator</Link>
                        {/* <Link href="/counter">Simple Counter</Link> */}
                    </div>
                </div>
                <div className="dropdown hideOnMobile">
                    <button className="dropbtn">Blogs
                    </button>
                    <div className="dropdown-content">
                        <Link href="/blogs">Blogs Page</Link>
                        <Link href="/create">Create New Blog</Link>
                    </div>
                </div>
                <div className="dropdown  hideOnMobile">
                    <Link href="/about">About</Link>
                </div>
                <div className="dropdown">
                    {/* <ThemeToggler /> */}
                </div>
                <button className='sidebar-show' onclick={showSidebar}>show sidebar
                </button>   
            </div>
            </ul>

            <ul className="sidebar">
                <button className='sidebar-hide' onclick={hideSidebar}>close sidebar
                </button>         
            <div className="links">
                <div className="dropdown">
                    <button className="dropbtn">Simple Apps
                    </button>
                    <div className="dropdown-content">
                        <Link href="/weatherapp">Weather App</Link>
                        <Link href="/calculator">Calculator</Link>
                        <Link href="/bmicalculator">BMI Calculator</Link>
                        {/* <Link href="/counter">Simple Counter</Link> */}
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">Blogs
                    </button>
                    <div className="dropdown-content">
                        <Link href="/blogs">Blogs Page</Link>
                        <Link href="/create">Create New Blog</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <Link href="/about">About</Link>
                </div>
                <div className="dropdown">
                    {/* <ThemeToggler /> */}
                </div>
            </div>
            </ul>
        </nav>
        
     );
}
 
export default Navbar;