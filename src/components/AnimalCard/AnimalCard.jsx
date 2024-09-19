import React, { useContext } from "react";
import "./AnimalCard.css";
import { AnimalContext } from "../../context/AnimalContext";
// import animals from "../../data/animal.json";

export const AnimalCard = () => {
    const {animals, setAnimals} = useContext(AnimalContext);
    return (
        <div>
            <h1>Animals</h1>
            <div className="animal-card-container">
                {animals.map((animal) => {
                    return (
                        <div className="animal-card" key={animal.Id}>
                            <h2 className="animal-name">{animal.Name}</h2>
                            <img className="animal-image" src={animal.ImageUrl} alt={animal.Name} />
                            <h4 className="animal-scientificName">{animal.ScientificName}</h4>
                            <p className="animal-description">{animal.Description}</p>
                            <p className="animal-height">Height: {animal.Height}</p>
                            <p className="animal-weight">Weight: {animal.Weight}</p>
                            <p className="animal-predator">Predator: {animal.Predator}</p>
                            <p className="animal-food">Food: {animal.Food}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};