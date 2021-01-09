import React, { Component } from "react";

const Card = ({employee}) => (
            <div>
            <h2>{employee.name.first} {employee.name.last}</h2>
            <img src={employee.picture.large} alt=""/>
            <p>{employee.location.city},  {employee.location.state}</p>
            <p>{employee.email}</p>
            </div>
)

export default Card;
