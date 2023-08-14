import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useStudentContext } from "../Context/StudentContext";
import { useSchoolContext } from "../Context/SchoolContext";
import { Link } from "react-router-dom";
import UpdateSchool from "../forms/UpdateSchoolForm";

export default function School() {
    const [school, setSchool] = useState(null);
    const { id } = useParams();
    const { allStudents } = useStudentContext();
    const { allSchools, singleSchool, setSingleSchool, updateSchool } = useSchoolContext();
    const schoolId = parseInt(id);
    const schoolStudents = allStudents.filter(student => student.SchoolId === schoolId );

    useEffect(() => {
        async function fetchSchoolDetails() {
            const { data } = await axios.get(`/api/School/${id}`);
            setSingleSchool(data);
            console.log(data);
        }

        fetchSchoolDetails();
    }, [id]);

    /* async function handleUpdateSchool(updatedSchoolData) {
        try {
            const { data } = axios.put(`api/School/${id}`, updatedSchoolData);
            setSchool(data);
        } catch (err) {
            console.error(err);
        }
    } */

 
    if(!singleSchool) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h2>{singleSchool.name}</h2>
            <p> Location: {singleSchool.location} </p>
            <p> About: {singleSchool.description} </p>
            <img src = {singleSchool.imageURL} />
            <h2>Currently Enrolled Students</h2>
            <ul>
                {schoolStudents.map(student => (
                    <Link to={`/Students/${student.id}`}><li key={student.id}>{student.firstName}</li></Link>
                ))}
            </ul>
            <div>
                <h2>Update School</h2>
                <UpdateSchool />
            </div>
        </div>
    );
}