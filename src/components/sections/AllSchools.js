import React, { useState, useEffect } from "react";
import axios from "axios";
import School from "./School";
import { Link } from "react-router-dom";

export default function AllSchools() {
    const [School, AllSchools] = useState([]);

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
                <li key={School.id}> 
                    <Link to={`/School/${School.id}`}>{School.name}</Link> <br />
                </li>
            ))}
        </ul>
        </>
    );
}