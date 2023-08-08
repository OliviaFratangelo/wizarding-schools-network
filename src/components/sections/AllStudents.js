import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from "./Student";
import { Link } from "react-router-dom";

export default function AllStudents() {
    const [Student, AllStudents] = useState([]);

    useEffect(() => {
        async function fetchAllStudents() {
            const { data } = await axios.get("/api/Student");
            setAllStudents(data);
        }

        fetchAllStudents();
    }, []);

    return (
        <>
        <h1>All Students</h1>
        <ul id = "main">
            {allStudents.map((oneStudent) => (
                <li key={Student.id}> 
                    <Link to={`/Student/${Student.id}`}>{Student.firstName}</Link> <br />
                </li>
            ))}
        </ul>
        </>
    );
}