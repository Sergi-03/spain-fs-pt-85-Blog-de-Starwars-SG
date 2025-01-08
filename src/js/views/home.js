import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import Card from "../component/card";
import { Context } from "../store/appContext";

export const Home = () => {
	
	const {store, actions} = useContext(Context)
	
	useEffect(() => {
	actions.getCharacterData()
	},[])
	
	return (
    <div>
	<div className="section">
	<h1>Characters</h1>
	</div>
	<div className="container mt-5">
	<div className="d-flex overflow-auto scroll">
	{store.characters.map((character, index) => (
	<div key={index} className="col-md-3 col-12">
	<Card imgUrl={character.image}
	title={character.name}
	id={character.id}/>
	</div>
	))}
	</div>
	</div>
	</div>
);
}

