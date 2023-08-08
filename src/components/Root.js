import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./Main";
import School from "./sections/School";
import Student from "./sections/Student";
import AllSchools from "./sections/AllSchools";
import AllStudents from "./sections/AllStudents";
const Root = () => {
  return (
    <div className="navigation">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Schools/:id" element={<School />} />
        <Route path="/Students/:id" element={<Student />}/>
        <Route path="/Schools" element={<AllSchools />} />
        <Route path="/Students" element={<AllStudents />} />
      </Routes>
    </div>
  );
};

export default Root;
