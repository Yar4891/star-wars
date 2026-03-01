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
        <form
            className="max-w-xl mx-auto bg-white p-8 rounded-xl shadow-md space-y-6"
            onSubmit={e => e.preventDefault()}>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                </label>
                <input
                    type="text"
                    name="firstname"
                    placeholder="Your name.."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                </label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Your last name.."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition"/>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Planet
                </label>
                <select
                    name="planet"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                 focus:outline-none focus:ring-2 focus:ring-blue-500
                 focus:border-blue-500 transition">
                    {planets.map((planet, index) => (
                        <option key={index} value={planet}>
                            {planet}
                        </option>
                    ))}
                </select>
            </div>
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                </label>
                <textarea
                    name="subject"
                    placeholder="Write something.."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg
                 resize-y focus:outline-none focus:ring-2
                 focus:ring-blue-500 focus:border-blue-500 transition"/>
            </div>
            <button className="bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white
            text-center" type="submit">Submit
            </button>
        </form>
    );
};

export default Contact;