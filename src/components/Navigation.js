import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <>
            <nav className="sidebar bg-light sidebar-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/">Tableau de board</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/List">Liste de contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link active" to="/Add">Nouveau contact</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
};

export default Navigation;