import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useStudentContext } from "../Context/StudentContext";

export default function School() {
    const [school, setSchool] = useState(null);
    const { id } = useParams();
    const allStudents = useStudentContext();
    const schoolId = parseInt(id);
    const schoolStudents = allStudents.filter(student => student.SchoolId === schoolId );

    useEffect(() => {
        async function fetchSchoolDetails() {
            const { data } = await axios.get(`/api/School/${id}`);
            setSchool(data);
        }

        fetchSchoolDetails();
    }, [id]);

    if(!school) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{school.name}</h2>
            <p> Address: {school.address} </p>
            <p> About: {school.description} </p>
            <img src = {school.imageURL} />
            <h2>Currently Enrolled Students</h2>
            <ul>
                {schoolStudents.map(student => (
                    <li key={student.id}>{student.firstName}</li>
                ))}
            </ul>
        </div>
    );
}