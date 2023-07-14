import React from "react";
import logo from "../../../images/logo.png";

import "./style.scss";

const Navigation = () => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="app-logo"
                />
            </div>
            <div className="navigation">
                <span className="navigation-item">Skills</span>
                <span className="navigation-item">Portfolio</span>
                <span className="navigation-item">Blogs</span>
                <span className="navigation-item">Articles</span>
            </div>
        </div>
    );
};

export default Navigation;
