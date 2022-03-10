import React from 'react';

const Header = () => {
    return (
        <header className="navbar navbar-dark bg-dark d-flex justify-content-start p-0 shadow">
            <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="index.html">AFPA Calais</a>
            <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse"
                data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <h1 className="text-light h3 ml-5">Application de gestion des contacts</h1>
        </header>
    );
};

export default Header;