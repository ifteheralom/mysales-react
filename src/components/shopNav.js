import React, { Component } from "react";
import ReactDOM from "react-dom";

import "../styles/custom.css"

class ShopNav extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="/">
                        <img src="/images/icon.png" height="40" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown link
                                </a>
                                <div className="dropdown-menu acc-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <img src="/images/profileimg.png" className="rounded mx-auto d-block acc-img" alt="..." />
                                    <h5 className="acc-text text-center">Ifteher Alom</h5>
                                    
                                    <div className="dropdown-divider"></div>
                                    <h6 className="acc-text text-muted">Bank</h6>
                                    <h6 className="acc-text">CitiBank LTD</h6>
                                    <h6 className="acc-text text-muted">Balance</h6>
                                    <h6 className="acc-text">1000.00 BDT</h6>
                                    
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Logout</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default ShopNav;