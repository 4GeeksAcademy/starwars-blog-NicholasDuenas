import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const StarshipCard = () => {
    const [ships, setShips] = useState([])
    useEffect(()=>{
        async function getShips() {
            let response = await fetch("https://swapi.dev/api/starships")
            let data = await response.json()
            setShips(data.results)
        }
        getShips()
    }, [])
    return (<div className="d-flex col-10 overflow-auto mx-auto mt-5">
        {ships?.map((item, index)=>(
            <div className="card" style={{minWidth:"18rem"}} key={index}>
            <img src="https://pm1.aminoapps.com/6030/ff502e05b60126ee3549ef2848cf54b863b75f98_hq.jpg" className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <Link to={"/StarshipDescription/"+(index+1)} className="btn btn-primary">Learn More</Link>
            </div>
          </div>
        ))}
    </div>)
}