
import React from 'react';
import boyIcon from "./images/boyIcon.png";
import girlIcon from "./images/girlIcon.png";

function FilterBabies(props) {
    const { onFilterClick } = props
    return (
        <div className="d-flex  align-items-start">
            <img style={{ height: 53 }} alt="girl" src={girlIcon} className="ms-2 me-2" onClick={() => onFilterClick("Girl")} />
            <img style={{ height: 53 }} alt="boy" src={boyIcon} className="me-2 " onClick={() => onFilterClick("Boy")} />
            <div style={{ boxShadow: "5px 10px 8px #888888" }}>
                <img style={{ height: 40 }} alt="both" src={girlIcon} className="" onClick={() => onFilterClick("All")} />
                <img style={{ height: 40 }} alt="both" src={boyIcon} className="" onClick={() => onFilterClick("All")} />
            </div>
        </div>
    )
}

export default FilterBabies
