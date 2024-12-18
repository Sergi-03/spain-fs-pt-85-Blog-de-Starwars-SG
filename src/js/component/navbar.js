import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
			<span className="navbar-brand mb-0 h1"><img src="https://imgs.search.brave.com/FQTe162KM-T0221DKOGyiWKso-TtQbyACju4ASc6mMk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvMy9SaWNr/LUFuZC1Nb3J0eS1Q/TkctQ2xpcGFydC5w/bmc">
			</img></span>
			</Link>
			<div className="ml-auto">
		    <div className="btn-group dropstart">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
            </button>
            <ul className="dropdown-menu">
            </ul>
            </div>
		    </div>
		    </nav>
	);
};
