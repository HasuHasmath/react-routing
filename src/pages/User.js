import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
const{id} = useParams()
  return (
    <>
      <h2>User Profile</h2>
      <p>USER ID IS <b>{id}</b></p>
      
    </>
  )
}
