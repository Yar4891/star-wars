import {base_url} from "./utils/constants.js";
import {useEffect, useState} from "react";

const month = 30*24*60*60*1000;

const AboutMe = () => {
    const [luke, setLuke] = useState(() => {

        const saved = localStorage.getItem('aboutMe');
        if (!saved)
        return null;
        const parsed = JSON.parse(saved);
        if ((Date.now() - parsed.timestamp) > month){
            localStorage.removeItem('aboutMe');
            return null;
        }
        return parsed.data
    })

    useEffect(() => {
        if (luke) return;
        fetch(`${base_url}/v1/peoples/1`)
            .then(res => res.json())
            .then(data => {
                const newData = ({
                    name: data.name,
                    gender: data.gender,
                    skin_color: data.skin_color,
                    hair_color: data.hair_color,
                    height: data.height,
                    eye_color: data.eye_color,
                    mass: data.mass,
                    birth_year: data.birth_year
                });
                setLuke(newData);
                localStorage.setItem('aboutMe',  JSON.stringify({
                    data: newData,
                    timestamp: Date.now()
                }))
            })
            .catch(() => setLuke('Error loading Luke Skywalker'))
    }, [luke]);
    if (!luke) {
        return <div>Loading...</div>;
    }
    if (typeof luke === 'string') {
        return <div>{luke}</div>
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
