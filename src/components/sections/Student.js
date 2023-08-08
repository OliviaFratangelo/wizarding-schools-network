import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function Student() {
    const [student, setStudent] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchStudentDetails() {
            const { data } = await axios.get(`/api/Student/${id}`);
            setStudent(data);
        }

        fetchStudentDetails();
    }, [id]);

    if(!student) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{student.firstName}</h2>
            <p> Email: {student.email} </p>
            <p> GPA: {student.gpa} </p>
            <img src = {student.imageURL} />
        </div>
    );
}