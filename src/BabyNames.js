import React from "react";
import babyNamesData from "./babyNamesData.json";
import Baby from "./Baby";

function BabyNames() {
  babyNamesData.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
  return (
    <div className="">
      <ul className="list-unstyled d-flex flex-wrap justify-content-evenly">
        {babyNamesData.map((baby, index) => {
          return < Baby key={index} data={baby} />
        })}
      </ul>
    </div>
  )
}
export default BabyNames;