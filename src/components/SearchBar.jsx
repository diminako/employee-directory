import React from "react";

const style = {
    margin: {
        margin: "20px"
    },
    buttonStyle: {
        boxShadow: "2px 2px 4px #000000",
        margin: "20px"
    },
    inputStyle: {
        border: "2px solid black",
        height: "1.5rem",
        boxShadow: "2px 2px 4px #000000"
    }
}

const SearchBar = ({ placeholder, handleChange, people, data }) => {

    const sortByFirst = people.sort( (a,b) => a.name.first - b.name.first);

    return (
        <div style={style.margin}>
            <button
                style={style.buttonStyle}
                onClick={()=> data({ people: sortByFirst })}>
                Sort First Name
                </button>
            <input
                style={style.inputStyle}
                className='search'
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
            <button
                style={style.buttonStyle}>
                Sort Last Name
            </button>
        </div>
    )
}

export default SearchBar;