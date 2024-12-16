import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
			<span className="navbar-brand mb-0 h1"><img src="https://imgs.search.brave.com/zPw-_3Vi1IxDHYYUN07az4t_sraA9fbusI9n8ax3eXQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvc3Rhcl93YXJz/X2xvZ28vc3Rhcl93/YXJzX2xvZ29fUE5H/MzQucG5n">
			</img></span>
			</Link>
			<div className="ml-auto">
		    <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
            </button>
            <ul className="dropdown-menu">
            <li>
            </li>
            </ul>
            </div>
		    </div>
		    </nav>
	);
};
