import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function School() {
    const [school, setSchool] = useState(null);
    const { id } = useParams();

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
        </div>
    );
}