import "./SearchInput.css";
import { useState, useContext } from "react";
import OpenAI from "openai"; // Ensure you have the correct import for OpenAI
import { AnimalContext } from "../../context/AnimalContext";






export const SearchInput = () => {
    const {animals, setAnimals} = useContext(AnimalContext);
    const [animal, setAnimal] = useState({});
    const [searchValue, setSearchValue] = useState("");
    const [searchTF, setSearchTF] = useState(false);

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSearch = async () => {
        const key = process.env.REACT_APP_OPENAI_API_KEY;

        const openai = new OpenAI({
            apiKey: key, dangerouslyAllowBrowser: true
        });

        try {
            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "system",
                    content: `You are an intelligent assistant that provides detailed information about animals. When given the name of an animal, you should return the following details in JSON: Name: The common name of the animal. Scientific-Name: The scientific name of the animal. Image-URL: URL link to the picture of the animal. Brief-Description: A short description of the animal, including its key characteristics and habitat. Do not include weight, length, height or size information. Weight: The average weight range of the animal in kg. Height: The average height or length of the animal in cm. Predators: The main predators of the animal. Food: The main preys/food of the animal. Give me this information about ${searchValue}.`
                }],
                temperature: 1,
                max_tokens: 256,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0,
            });

            const animalData = JSON.parse(response.choices[0].message.content);
            setAnimal(animalData);
            console.log(animalData);
            console.log(animal);
            setAnimals([...animals, animalData]);
            setSearchTF(true);
        } catch (error) {
            console.error("Error fetching animal information:", error);
        }
    };

    return (
        <>
        <div className="searchContainer">
            <input
                type="text"
                placeholder="Animal Name..."
                className="searchInput"
                onChange={handleChange}
            />
            <button className="searchButton" onClick={handleSearch}>
                Search
            </button>
        </div>

        {searchTF && <div className="search-result">

                <div className="animalInfo">
                    <h2 className="animal-name">{animal.Name}</h2>
                    <img className="animal-image" src={animal.Image-URL} alt={animal.Name} />
                    <h4 className="animal-scientificName">{animal["Scientific-Name"]}</h4>
                    <p className="animal-description">{animal["Brief-Description"]}</p>
                    <p className="animal-weight">Weight: {animal.Weight}</p>
                    <p className="animal-height">Height: {animal.Height}</p>
                    <p className="animal-predator">Predator: {animal.Predators}</p>
                    <button onClick={()=>{setSearchTF(false)}}>Close</button>
                </div>
        </div>}
        
        </>
    );
};