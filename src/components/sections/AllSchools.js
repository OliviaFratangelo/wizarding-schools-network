
import React from "react";
import { Link } from "react-router-dom";
import { useSchoolContext } from "../Context/SchoolContext";
import School from "./School";

export default function AllSchools() {
    const allSchools = useSchoolContext();

    return (
        <>
        <h1>All Wizarding Schools</h1>
        <ul id = "main">
            {allSchools.map((oneSchool) => (
                <li key={oneSchool.id}> 
                    <Link to={`/Wizarding-schools/${oneSchool.id}`}>{oneSchool.name}</Link> <br />
                </li>
            ))}
        </ul>
        </>
    );
}