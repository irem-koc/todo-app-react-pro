import React from "react";
import { Link } from "react-router-dom";
import "./Signinup.css";
const Signinup = () => {
    return (
        <div className="signin">
            <h2>Username</h2>
            <input type="text" className="input-username" />

            <Link to="/main">
                <button className="button-continue">Continue</button>
            </Link>
        </div>
    );
};

export default Signinup;
