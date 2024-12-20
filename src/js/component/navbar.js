import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const {store, actions} = useContext(Context)

	return (
		<nav className="navbar mb-3">
			<Link to="/">
			<span className="navbar-brand mb-0 h1"><img src="https://www.freeiconspng.com/uploads/rick-and-morty-black-folder-icon-8.png">
			</img></span>
			</Link>
			<div className="ml-auto">
		    <div className="btn-group dropstart">
            <button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Favorites
            </button>
            <ul className="dropdown-menu">
			{store.favorites.map((item, index) =>
			<li key={index}>
			{item} <img className="delete-icon" onClick={() => actions.removeFavorite(item)} src="https://imgs.search.brave.com/agX_QyzsQboJypclCUeHn2iXtAONjnYzIWJgipkRR7I/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL3JpY2stYW5k/LW1vcnR5LXBuZy1y/aWNrLWFuZC1tb3J0/eS1wbmctYnktbGFs/aW5nbGEtOTUwLnBu/Zw">
			</img>
			</li>
			)}
            </ul>
            </div>
		    </div>
		    </nav>
	);
};
