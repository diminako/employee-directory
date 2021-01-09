import React from "react";
import Card from "./Card"

const style = {
    cardlist: {
        width: "85 vw",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
        gridGap: "20px",
        justifyContent: "center"
    }
}

const CardList = ({ people }) => {
    return (
        <div style={style.cardlist}>
            {people.map((employee) => <Card key={employee.id.value} employee={employee} />)}
            {console.log(people)}
        </div>
    )
};

export default CardList;
