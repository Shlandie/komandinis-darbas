import React from "react";
import "./Navigation.css";
import { RxExit } from "react-icons/rx";
import { Link } from "react-router-dom";


function Navigation() {
    return (
        <nav className="navbar Nav-container BP38-child0">
            <h2 className="navbar-brand mt-2 F-size-25 Roboto-condensed">LOGO</h2>
            <div className="d-flex justify-content-end nameLogoutContainer">
                <div class="Roboto-condensed F-size-25 Nav-greeting">
                    Sveiki, Vardas!
                </div>
                <Link class="nav-link" to="/LoginPage">
                    <button className="btn Nav-logout">< RxExit /></button>
                </Link>
            </div>
        </nav>
    );
}

export default Navigation;
