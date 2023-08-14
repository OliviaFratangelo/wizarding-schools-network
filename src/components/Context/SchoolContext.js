import React, { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";
import School from "../sections/School";
const SchoolContext = createContext();
 
export function SchoolProvider({ children }) {
    const [allSchools, setAllSchools] = useState([]);
    const [singleSchool, setSingleSchool] = useState(null);
    useEffect(() => {
        async function fetchAllSchools() {
            const { data } = await axios.get("/api/School");
            setAllSchools(data);
        }

        fetchAllSchools();
    }, []);

    const updateSchool = (id, updatedData) => {
        setSingleSchool((prevSingleSchool) => ({
          ...prevSingleSchool,
          ...updatedData,
        }));
      };

      const addSchool = (newSchool) => {
        setAllSchools((prevSchools) => [...prevSchools, newSchool]);
      };


    const contextValue = {
        allSchools,
        setAllSchools,
        singleSchool, setSingleSchool,
        addSchool,
        updateSchool,
    };

    return (
        <SchoolContext.Provider value={contextValue}>
            {children}
        </SchoolContext.Provider>
    );
    }

    export function useSchoolContext() {
        return useContext(SchoolContext);
    }