import React from "react";

const style = {
    margin: {
        margin: "20px"
    },
    buttonStyle: {
        boxShadow: "2px 2px 4px #000000",
        margin: "20px"
    }
    }

const SearchBar = ({ placeholder, handleChange }) => {
    return (
        <div style={style.margin}>
            <button style={style.buttonStyle}>Sort First Name</button>
            <input
                className='search'
                type='search'
                placeholder={placeholder}
                onChange={handleChange}
            />
            <button style={style.buttonStyle}>Sort Last Name</button>
        </div>
    )
}

export default SearchBar;