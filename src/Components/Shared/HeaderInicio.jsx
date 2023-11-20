import React from "react";
import "./Headerestilos.css";

 const Box = () => {
    return (
        <header className="header">
        <div className="logo-section">
            <img className="logo-image" alt="Vector" src="vector.svg" />
            <div className="logo-text">Animes Online.</div>
        </div>
        <nav className="navigation">
            <div className="nav-item">Inicio</div>
            <div className="nav-item">Lista animes</div>
            <div className="nav-item">Categorias</div>
        </nav>
        <div className="search-section">
            <input type="text" className="search-input" placeholder="Buscar" />
            <img className="search-icon" alt="Search Icon" src="image.svg" />
        </div>
        <div className="auth-section">
            <button className="login-button">Iniciar sesión</button>
            <button className="register-button">Registrarse</button>
        </div>
    </header>
    );
};


export default Box;
