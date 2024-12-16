import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { useState, useEffect } from "react";
import Card from "../component/card";

export const Home = () => {
    async function getData() {
		try {
			let response = await fetch("https://www.swapi.tech/api/planets/")
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
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/1.jpg"
	title="Luke Skywalker"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/2.jpg"
	title="C-3P0"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/3.jpg"
	title="R2-D2"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/4.jpg"
	title="Darth Vader"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/5.jpg"
	title="Leia Organa"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/6.jpg"
	title="Owen Lars"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/7.jpg"
	title="Beru Whitesun lars"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/8.jpg"
	title="R5-D4"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/9.jpg"
	title="Biggs Darklighter"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://starwars-visualguide.com/assets/img/characters/10.jpg"
	title="Obi-Wan Kenobi"/>
	</div>
	</div>
	</div>
	<div className="section-2">
	<h1>Planets</h1>
	</div>
	<div className="container planets">
	<div className="d-flex overflow-auto scroll">
	<div className="col-md-3 col-12">
	<Card imgUrl="https://imgs.search.brave.com/4FKzcJ4RRGmWhwd32eYYbE8KZHAmDRRoFNsIoSc3TUg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82ZC9UYXRvb2lu/ZV8lMjhmaWN0aW9u/YWxfZGVzZXJ0X3Bs/YW5ldCUyOS5qcGcv/NTEycHgtVGF0b29p/bmVfJTI4ZmljdGlv/bmFsX2Rlc2VydF9w/bGFuZXQlMjkuanBn"
	title="Tatooine"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://imgs.search.brave.com/9WFVmG8NE2SOQmLV5jvfjVtyGR4JcGuaMwv0tdTY0Jc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/Ni82MC9BbGRlcmFh/bjI1MHBweC5QTkcv/NTEycHgtQWxkZXJh/YW4yNTBwcHguUE5H"
	title="Alderaan"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://imgs.search.brave.com/yVFdgUpfQts61e5CgyAum9TYqbJnoVcJ9nyyA-Gz2mw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3N0/YXJ3YXJzL2ltYWdl/cy9mL2YwL1lhdmlu/NF9URUEucG5nL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzIw/MD9jYj0yMDIwMDUx/NTIwMjQwMg.jpeg"
	title="Yavin IV"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://static.wikia.nocookie.net/starwars/images/1/1d/Hoth_SWCT.png/revision/latest?cb=20160630022322"
	title="Hoth"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://imgs.search.brave.com/Wxm6GkErtP6H3U36LwcLTWNai3ItyRbBg_BUd8d8Bj0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvZW4vdGh1bWIv/MS8xYy9EYWdvYmFo/LmpwZy81MTJweC1E/YWdvYmFoLmpwZw"
	title="Dagobah"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://static.wikia.nocookie.net/starwars/images/1/11/Bespin-SWCT.png/revision/latest?cb=20181010054421"
	title="Bespin"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://imgs.search.brave.com/p2YlH9c4NtLP6zGRkI8IguS-iMmkJqJMjTc6p5uajsw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2lraWEubm9j/b29raWUubmV0L3N0/YXJ3YXJzL2ltYWdl/cy9lL2U1L0VuZG9y/LVNXQ1QucG5nL3Jl/dmlzaW9uL2xhdGVz/dC9zY2FsZS10by13/aWR0aC1kb3duLzIw/MD9jYj0yMDI0MDEy/NzIyMDY0Ng"
	title="Endor"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://imgs.search.brave.com/sZAkiLulwwaveT_pXz6T1htD9TasSK1hzlzO735XF9E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lYXcu/aGVhdmVuZ2FtZXMu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy9z/aXRlcy8yMy8yMDIy/LzEwL3BsYW5ldF9u/YWJvby5wbmc"
	title="Naboo"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://static.wikia.nocookie.net/starwars/images/a/a6/Coruscant-SWJS.jpg/revision/latest?cb=20240324185443"
	title="Coruscant"/>
	</div>
	<div className="col-md-3 col-12">
	<Card imgUrl="https://static.wikia.nocookie.net/starwars/images/5/52/Kamino-DB.png/revision/latest?cb=20150920190527"
	title="Kamino"/>
	</div>
	</div>
	</div>
	</div>
);
}
