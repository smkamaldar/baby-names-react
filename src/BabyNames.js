import React, { useState } from "react";
import babyNamesData from "./babyNamesData.json";
import Baby from "./Baby";
import SearchBar from './SearchBar';

function BabyNames() {
  const [babyNames, setBabyNames] = useState(babyNamesData.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  }));


  const search = (searchphrase) => {
    const searchedName = babyNamesData.filter(baby => {
      return baby.name.toLowerCase().includes(searchphrase)
    })
    setBabyNames(searchedName);
  }

  return (
    <div className="d-flex flex-column align-items-center  ">
     <div className=" d-flex justify-content-evenly col-3 ">
     <p className="">Search: </p>
      <SearchBar onSearch={search} />
     </div>
      
      <div>
        <ul className="list-unstyled d-flex flex-wrap justify-content-evenly m-3">
          {babyNames.map((baby, index) => {
            return < Baby key={index} data={baby} />
          })}
        </ul>
      </div>

    </div>
  )
}
export default BabyNames;