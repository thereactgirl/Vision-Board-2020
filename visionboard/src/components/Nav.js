import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {
    return (
        <div className="nav-container">
            <Link to="/" className="nav-item">Vision Board
            </Link>
            <Link to='/addnewvision' className="nav-item">Add New Vision
            </Link>
        </div>
    )
}

export default Nav;