import React, { useState, useEffect } from "react";
import axios from "axios";
import School from "./School";
import { Link } from "react-router-dom";

export default function AllSchools() {
    const [allSchools, setAllSchools] = useState([]);

    useEffect(() => {
        async function fetchAllSchools() {
            const { data } = await axios.get("/api/School");
            setAllSchools(data);
        }

        fetchAllSchools();
    }, []);

    return (
        <>
        <h1>All Wizarding Schools</h1>
        <ul id = "main">
            {allSchools.map((oneSchool) => (
                <li key={oneSchool.id}> 
                    <Link to={`/Schools/${oneSchool.id}`}>{oneSchool.name}</Link> <br />
                </li>
            ))}
        </ul>
        </>
    );
}