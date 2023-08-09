import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import Student from "../sections/Student";
const StudentContext = createContext();

export function StudentProvider({ children }) {
    const [allStudents, setAllStudents] = useState([]);

    useEffect(() => {
        async function fetchAllStudents() {
            const { data } = await axios.get("/api/Student");
            setAllStudents(data);
        }

        fetchAllStudents();
    }, []);

    return (
        <StudentContext.Provider value = {allStudents}>
            {children}
        </StudentContext.Provider>
        );
}

export function useStudentContext() {
    return useContext(StudentContext);
}