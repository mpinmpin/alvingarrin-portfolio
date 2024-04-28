import Link from 'next/link';
import React from 'react';
import ThemeToggler from './ThemeToggler';

const Navbar = () => {

    return ( 
        <nav className="navbar">
            <div className="page-title">
                <Link href="/"><h1>alvingarrin</h1></Link>
            </div>           
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
        </nav>
     );
}
 
export default Navbar;