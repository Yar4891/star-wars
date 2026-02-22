import {useEffect, useState} from "react";
import {base_url} from "./utils/constants.js";

const month = 30 * 24 * 60 * 60 * 1000;

const Contact = () => {
    const [planets, setPlanets] = useState(() => {
        const saved = localStorage.getItem('planets');

        if (!saved) return null;

        const parsed = JSON.parse(saved);

        if (Date.now() - parsed.timestamp > month) {
            localStorage.removeItem('planets');
            return null;
        }

        return parsed.data;
    });

    useEffect(() => {
        if (planets !== null) return;
        fetch(`${base_url}/v1/planets`)
            .then(res => res.json())
            .then(data => {
                const listPlanets = data.map(item => item.name);
                setPlanets(listPlanets);

                localStorage.setItem('planets', JSON.stringify({
                    data: listPlanets,
                    timestamp: Date.now()
                }));
            })
            .catch(() => setPlanets('Error loading planets'))
    }, [planets]);
    if (!planets) {
        return <div>Loading...</div>;
    }
    if (typeof planets === 'string') {
        return <div>{planets}</div>
    }

    return (
        <div className="container">
            <form>

                <label htmlFor="fname">First Name</label>
                <input type="text" id="fname" name="firstname" placeholder="Your first name.."/>

                <label htmlFor="lname">Last Name</label>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                <label htmlFor="planet">Planet</label>
                <select id="planet" name="planet">
                    {planets.map((planet, index) => (
                        <option key={index} value={planet}>
                            {planet}
                        </option>
                    ))}
                </select>

                <label htmlFor="subject">Subject</label>
                <textarea
                    id="subject"
                    name="subject"
                    placeholder="Write something.."
                    style={{height: "100px"}}/>

                <input type="submit" value="Submit"/>

            </form>
        </div>
    );
};

export default Contact;