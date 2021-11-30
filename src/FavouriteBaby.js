import React from 'react'

function FavouriteBaby(props) {
    const { id, name, sex } = props.value;
    const { onClick } = props;
    const style = {
        color: sex === "m" ? "blue" : "red",
        border: "2px solid",
        borderRadius: 12,
        margin: "5px",
        padding: "2px",
        minWidth: "60px",
        textAlign: "center"
    }
    return (
        <li onClick={() => onClick(id)}>
            <p style={style}> {name}</p>
        </li>
    )
}

export default FavouriteBaby
