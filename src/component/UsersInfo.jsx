import React from "react";
import { Link } from "react-router-dom";

const UsersInfo = ({ name, email, gen, deleteUser, id }) => {
  const handleDelete = () => {
    deleteUser(id);
  };

  return (
    <div>
      <h2>Name: {name} </h2>
      <h3>Email: {email}</h3>
      <h4>Gen:{gen}</h4>
      <button onClick={handleDelete}>Remove</button>
      <Link to={`edit/${id}`}>editForm</Link>

      <hr></hr>
    </div>
  );
};

export default UsersInfo;
