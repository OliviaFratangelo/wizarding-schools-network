import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useStudentContext } from "../Context/StudentContext";
import { useSchoolContext } from "../Context/SchoolContext";
import { Link } from "react-router-dom";

export default function Student() {
    const [student, setStudent] = useState(null);
    const { id } = useParams();
    const studentId = parseInt(id);
    const allStudents = useStudentContext();
    const schoolContext = useSchoolContext();
    const thisStudent = allStudents.find(student => student.id === studentId);
    const studentSchool = schoolContext.find(school => school.id === thisStudent.SchoolId);
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
            <p> Enrolled in <Link to={`/Wizarding-schools/${studentSchool.id}`}>{studentSchool.name}</Link></p>
            <img src = {student.imageURL} />
        </div>
    );
}