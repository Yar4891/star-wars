import {base_url} from "./utils/constants.js";
import {useEffect, useState} from "react";

const AboutMe = () => {
    const [luke, setLuke] = useState()
    useEffect(() => {
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => setLuke({
                name: data.name,
                gender: data.gender,
                skin_color: data.skin_color,
                hair_color: data.hair_color,
                height: data.height,
                eye_color: data.eye_color,
                mass: data.mass,
                birth_year: data.birth_year
            }))
            .catch(() => setLuke('Error loading Luke Skywalker'))
    }, []);
    if (!luke) {
        return <div>Loading...</div>;
    }
    return (
        <div className="far-galaxy">
            <div>Name: {luke.name}</div>
            <div>Gender: {luke.gender}</div>
            <div>Skin color: {luke.skin_color}</div>
            <div>Hair color: {luke.hair_color}</div>
            <div>Height: {luke.height}</div>
            <div>Eye color: {luke.eye_color}</div>
            <div>Mass: {luke.mass}</div>
            <div>Birth year: {luke.birth_year}</div>
        </div>
    );
};

export default AboutMe;
