import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import School from "../sections/School";
const SchoolContext = createContext();
 
export function SchoolProvider({ children }) {
    
    const [allSchools, setAllSchools] = useState([]);

    useEffect(() => {
        async function fetchAllSchools() {
            const { data } = await axios.get("/api/School");
            setAllSchools(data);
        }

        fetchAllSchools();
    }, []);

    return (
        <SchoolContext.Provider value={allSchools}>
            {children}
        </SchoolContext.Provider>
    );
    }

    export function useSchoolContext() {
        return useContext(SchoolContext);
    }