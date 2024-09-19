import React from "react";
import { useState, createContext } from "react";

export const AnimalContext = createContext();

export const AnimalProvider = ({ children }) => {
    const [animals, setAnimals] = useState([
        {
            "Id": 1,
            "Name": "Lion",
            "ScientificName": "Panthera leo",
            "Height": "3.5 ft",
            "Weight": "420 lbs",
            "Description": "The lion is a large carnivorous mammal of the Felidae family.",
            "ImageUrl": "https://example.com/lion.jpg",
            "Predator": "Human",
            "Food": "Meat"
        },
        {
            "Id": 2,
            "Name": "Elephant",
            "ScientificName": "Loxodonta africana",
            "Height": "10 ft",
            "Weight": "6000 kg",
            "Description": "The elephant is the largest land animal on Earth.",
            "ImageUrl": "https://example.com/elephant.jpg",
            "Predator": "Human",
            "Food": "Plants"
        },
        {
            "Id": 3,
            "Name": "Tiger",
            "ScientificName": "Panthera tigris",
            "Height": "3 ft",
            "Weight": "500 lbs",
            "Description": "The tiger is the largest cat species and a member of the Felidae family.",
            "ImageUrl": "https://example.com/tiger.jpg",
            "Predator": "Human",
            "Food": "Meat"
        },
        {
            "Id": 4,
            "Name": "Giraffe",
            "ScientificName": "Giraffa camelopardalis",
            "Height": "18 ft",
            "Weight": "2600 lbs",
            "Description": "The giraffe is the tallest living terrestrial animal.",
            "ImageUrl": "https://example.com/giraffe.jpg",
            "Predator": "Human",
            "Food": "Leaves"
        },
        {
            "Id": 5,
            "Name": "Penguin",
            "ScientificName": "Spheniscidae",
            "Height": "1 ft",
            "Weight": "20 lbs",
            "Description": "Penguins are a group of flightless birds.",
            "ImageUrl": "https://example.com/penguin.jpg",
            "Predator": "Human",
            "Food": "Fish"
        },
        {
            "Id": 6,
            "Name": "Crocodile",
            "ScientificName": "Crocodylinae",
            "Height": "6 ft",
            "Weight": "1000 lbs",
            "Description": "Crocodiles are large aquatic reptiles.",
            "ImageUrl": "https://example.com/crocodile.jpg",
            "Predator": "Human",
            "Food": "Fish"
        },
        {
            "Id": 7,
            "Name": "Kangaroo",
            "ScientificName": "Macropus",
            "Height": "6 ft",
            "Weight": "200 lbs",
            "Description": "Kangaroos are marsupials that are indigenous to Australia.",
            "ImageUrl": "https://example.com/kangaroo.jpg",
            "Predator": "Human",
            "Food": "Plants"
        },
        {
            "Id": 8,
            "Name": "Gorilla",
            "ScientificName": "Gorilla",
            "Height": "5.6 ft",
            "Weight": "400 lbs",
            "Description": "Gorillas are ground-dwelling, predominantly herbivorous apes.",
            "ImageUrl": "https://example.com/gorilla.jpg",
            "Predator": "Human",
            "Food": "Plants"
        },
        {
            "Id": 9,
            "Name": "Dolphin",
            "ScientificName": "Delphinidae",
            "Height": "10 ft",
            "Weight": "500 lbs",
            "Description": "Dolphins are highly intelligent marine mammals.",
            "ImageUrl": "https://example.com/dolphin.jpg",
            "Predator": "Human",
            "Food": "Fish"
        },
        {
            "Id": 10,
            "Name": "Eagle",
            "ScientificName": "Aquila chrysaetos",
            "Height": "3 ft",
            "Weight": "15 lbs",
            "Description": "Eagles are large birds of prey.",
            "ImageUrl": "https://example.com/eagle.jpg",
            "Predator": "Human",
            "Food": "Small animals"
        },
        {
            "Id": 10,
            "Name": "Eagle",
            "ScientificName": "Aquila chrysaetos",
            "Height": "3 ft",
            "Weight": "15 lbs",
            "Description": "Eagles are large birds of prey.",
            "ImageUrl": "https://example.com/eagle.jpg",
            "Predator": "Human",
            "Food": "Small animals"
        },
        {
            "Id": 10,
            "Name": "Eagle",
            "ScientificName": "Aquila chrysaetos",
            "Height": "3 ft",
            "Weight": "15 lbs",
            "Description": "Eagles are large birds of prey.",
            "ImageUrl": "https://example.com/eagle.jpg",
            "Predator": "Human",
            "Food": "Small animals"
        },
        {
            "Id": 10,
            "Name": "Eagle",
            "ScientificName": "Aquila chrysaetos",
            "Height": "3 ft",
            "Weight": "15 lbs",
            "Description": "Eagles are large birds of prey.",
            "ImageUrl": "https://example.com/eagle.jpg",
            "Predator": "Human",
            "Food": "Small animals"
        }
    
    ]);
    
    return (
        <AnimalContext.Provider value={{ animals, setAnimals }}>
        {children}
        </AnimalContext.Provider>
    );
    }