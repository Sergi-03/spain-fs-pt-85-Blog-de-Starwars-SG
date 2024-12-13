import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import Card from "../component/card";

export const Home = () => {
    async function getData() {
		try {
			let response = await fetch("https://www.swapi.tech/api/people/")
			console.log(response);
			if(response.ok) console.log("Could fetch data!");
			let data = await response.json()
			console.log(data);
			
			
			
		} catch (error) {
			console.error("Could not fetch data", error);
			
		}
	}
	useEffect(() => {
		getData()
	}, [])
    
	return (
    <div>
	<div className="section">
	<h1>Characters</h1>
	</div>
	<div className="container mt-5">
	<div className="d-flex overflow-auto scroll">
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/2.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/3.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/4.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/5.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/6.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/7.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/8.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/9.jpg"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/10.jpg"/>
	</div>
	</div>
	</div>
	</div>
);
}
