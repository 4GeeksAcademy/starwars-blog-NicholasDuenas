import React, { useState, useEffect } from "react";
import { useParams } from "react-router";

export const CharacterDescription = () => {
    const {id} = useParams()
    const [character, setCharacter] = useState([])
    useEffect(()=>{
        async function getCharacter() {
            let response = await fetch("https://swapi.dev/api/people/"+id)
            let data = await response.json()
            setCharacter(data)
        }
        getCharacter()
    }, []) 
    return (
	<div className="text-center mt-5">
        <h1>{character.name}</h1>
        <h3>Eye color: {character.eye_color}</h3>
        <h3>Hair color: {character.hair_color}</h3>
        <h3>Height: {character.height}</h3>
        <h3>Mass: {character.mass}</h3>
	</div>
)};