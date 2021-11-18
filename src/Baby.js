import React from "react";
import boyIcon from "./images/boyIcon.png";
import girlIcon from "./images/girlIcon.png";

function Baby(props) {
    const { name, sex } = props.data;
    const wrapperStyle = {
        width: 200,
        border: "4px solid lightGray",
        borderRadius: 12,
        borderRight: 0,
        borderLeftColor: sex === "m" ? "blue" : "red"
    }
    const imgStyle = {
        height: 80
    }

    return (
        <li className="d-flex m-1 align-items-center justify-content-between"
            style={wrapperStyle}>

            <p className="p-1">{name}</p>
            <img style={imgStyle} className="" alt="boy" src={sex === "m" ? boyIcon : girlIcon}></img>

        </li>
    )
}
export default Baby;