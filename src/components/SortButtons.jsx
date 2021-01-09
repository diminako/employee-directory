import React from "react";

const style = {
    buttonStyle: {
        boxShadow: "2px 2px 4px #000000",
        margin: "20px"
    }
}

const SortButtons = ({ people, sortFirst, sortLast }) => {

const firstNameSort = (a, b) => {
    let sorting = 0;
    if (a.name.first > b.name.first) {
      sorting = 1;
    } else if (a.name.first < b.name.first) {
      sorting = -1;
    }
    return sorting;
  }

const lastNameSort = (a, b) => {
    let sorting = 0;
    if (a.name.last > b.name.last) {
      sorting = 1;
    } else if (a.name.last < b.name.last) {
      sorting = -1;
    }
    return sorting;
  }

    return (
        <div>
            
            <button
                style={style.buttonStyle}
                onClick={()=>sortFirst(people.sort(firstNameSort))}>
                Sort First Name
            </button>
            <span><strong> Sort Alphabetically </strong></span>
            <button
                style={style.buttonStyle}
                onClick={()=>sortLast(people.sort(lastNameSort))}>
                Sort Last Name
            </button>
        </div>
    )
}

export default SortButtons;