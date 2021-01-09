import React from "react";
import Card from "./Card"

const CardList = ({ people }) => {
    return (
        <>
            {people.map((employee) => <Card key={people.id} employee={employee} />)}
            {/* {console.log(people)} */}
        </>
    )
};

export default CardList;
