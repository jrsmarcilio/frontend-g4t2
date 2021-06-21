import React from "react";
import { Redirect } from "react-router-dom";

// import { Container } from './styles';

function Logout() {
  localStorage.clear();

  return <Redirect to="/" />;
}

export default Logout;
