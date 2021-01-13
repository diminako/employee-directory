import React from "react";
import Card from "./Card"

const style = {
    pad: {
        padding: "5px"
    }
}

const CardList = ({ people }) => {
    return (
        <div
        // style={style.cardlist}
        >
            <table className="table table-success table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Pic</th>
                        <th scope="col">Email</th>
                    </tr>
                </thead>
                <tbody>
                    {people.map((employee) => <tr ><Card key={employee.id.value} employee={employee} /></tr>)}
                </tbody>

            </table>

        </div>
    )
};

export default CardList;
