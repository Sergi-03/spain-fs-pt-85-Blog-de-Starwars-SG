import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import Card from "../component/card";

export const Home = () => {
	const [characters, setCharacters] = useState([])

	async function getCharacterData() {
			try {
			let response = await fetch("https://rickandmortyapi.com/api/character")
			if (response.ok) console.log(response);
			let data = await response.json()
			console.log(data);
			setCharacters(data.results)
	
	
			} catch (error) {
				console.error("Could not fetch data", error);
				
				
		}
		}
		
	
		useEffect(() => {
			getCharacterData()
		}, [])
	
	return (
    <div>
	<div className="section">
	<h1>Characters</h1>
	</div>
	<div className="container mt-5">
	<div className="d-flex overflow-auto scroll">
	{characters.map((character, index) => (
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

