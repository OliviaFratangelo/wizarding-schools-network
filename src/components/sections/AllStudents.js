import React from "react";
import { Link } from "react-router-dom";
import { useStudentContext } from "../Context/StudentContext";
import Student from "./Student";
import NewStudent from "../forms/NewStudentForm";

export default function AllStudents() {
    const allStudents = useStudentContext();

const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
};

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
         <h2>Add Another Student</h2>
        <NewStudent onAddStudent={handleAddStudent}/>
        </>
    );
}