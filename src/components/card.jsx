import React, { Component } from "react";

const style = {
    cardContainer: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#95dada",
        border: "1px solid grey",
        borderRadius: "5px",
        padding: "25px",
        cursor: "pointer",
        // -moz-osx-font-smoothing: "grayscale",
        backfaceVisibility: "hidden",
        transform: "translateZ(0)",
        transition: "transform 0.25s ease-out",
        "&:hover": {
            transform: "scale(1.05)"
        }
    },
    imgStyle: {
        display: "block",
        marginLeft: "auto",
        marginRight: "auto",
        width: "50%"
    }
};

const Card = ({ employee }) => (
    <div style={style.cardContainer}>
        <h2>{employee.name.first} {employee.name.last}</h2>
        <img style={style.imgStyle} src={employee.picture.large} alt="" />
        <p>{employee.location.city},  {employee.location.state}</p>
        <p>{employee.email}</p>
    </div>
)

export default Card;
