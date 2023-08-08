import React, { useState, useEffect } from "react";
import axios from "axios";
import Student from "./Student";
import { Link } from "react-router-dom";

export default function AllStudents() {
    const [allStudents, setAllStudents] = useState([]);

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
            {allStudents.map((student) => (
                <li key={student.id}> 
                    <Link to={`/Students/${student.id}`}>{student.firstName}</Link> <br />
                </li>
            ))}
        </ul>
        </>
    );
}