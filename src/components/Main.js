import React from "react";
import { Link } from "react-router-dom";
/* 
    This is you entry point for your routes
*/
const Main = () => {
  return (
    <div>
      <h1>Welcome to the Wizarding Schools Network!</h1>
      <Link to ="/Schools">View All Wizarding Schools</Link>
      <br />
      <Link to="/Students">View All Students</Link>
    </div>
   );
  };

export default Main;
