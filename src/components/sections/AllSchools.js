
import React from "react";
import { Link } from "react-router-dom";
import { useSchoolContext } from "../Context/SchoolContext";
import School from "./School";
import NewSchool from "../forms/NewSchoolForm";

export default function AllSchools() {
    const allSchools = useSchoolContext();

const handleAddSchool = (newSchool) => {
    setSchools((prevSchools) => [...prevSchools, newSchool]);
};

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
        <h2>Add Another Wizarding School</h2>
        <NewSchool onAddSchool={handleAddSchool}/>
        </>
    );
}