import React from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NewSchool() {
    const [schoolName, setSchoolName] = useState("");
    const [location, setLocation] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const { data } = await axios.post("/api/School", {
                schoolName,
                location,
            });

            navigate("/");
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <>
        <form id="school-form" onSubmit={handleSubmit}>
        <label htmlFor="schoolName">Name:</label>
        <input
            name="schoolName"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            /> <br />
        <label htmlFor="location">Location:</label>
        <input
            name="location"
            value={location}
            onChange={(e) => setlocation(e.target.value)}
            />
            <button type="submit">Go</button>
            </form> 
        </>
        );
}