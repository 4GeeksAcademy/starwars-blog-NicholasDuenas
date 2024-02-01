import React from "react";
import { CharacterCard } from "../component/charactercard";
import { StarshipCard } from "../component/starshipcard";
import { PlanetCard } from "../component/planetcard";
import "../../styles/home.css";

export const Home = () => (
	<div className="text-center mt-5">
		<CharacterCard/>
		<StarshipCard/>
		<PlanetCard/>
	</div>
);
