import React, { useState } from "react";
import babyNamesData from "./babyNamesData.json";
import Baby from "./Baby";
import SearchBar from './SearchBar';
import FavouriteBaby from "./FavouriteBaby";
import FilterBabies from "./FilterBabies";

const sortBabies = (babies) => {
  // we need to make copy of the array,beacuse it is call by refrence
  //  good approach is not manipulate it directly 

  const clonedBabies = [...babies]
  return clonedBabies.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  })
}

function BabyNames() {

  const [babyNames, setBabyNames] = useState(sortBabies(babyNamesData));
  const [favouriteBabies, setFavouriteBabies] = useState([]);

  const search = (searchphrase) => {
    const searchedName = babyNamesData.filter(baby => {
      return baby.name.toLowerCase().includes(searchphrase)
    })
    setBabyNames(searchedName);
  }

  const handleAddToFavourites = (id) => {
    const filteredBabies = babyNames.filter(baby => {
      if (baby.id === id) {
        setFavouriteBabies([...favouriteBabies, baby])
        return false
      }
      return true
    })
    setBabyNames(filteredBabies);
  }
  const handleRemoveFavourite = (id) => {

    const filtedeFavourites = favouriteBabies.filter(baby => {
      console.log(baby)
      if (baby.id === id) {
        setBabyNames(sortBabies([...babyNames, baby]))
        return false
      }
      return true
    })
    setFavouriteBabies(filtedeFavourites)
  }

  const handleFilterClick = (type) => {
    switch (type) {
      case "Girl":
        const filteredGirls = babyNamesData.filter(baby => {
          return baby.sex === "f"
        })
        setBabyNames(sortBabies(filteredGirls));
        break;
      case "Boy":
        const filteredBoys = babyNamesData.filter(baby => {
          return baby.sex === "m"
        })
        setBabyNames(sortBabies(filteredBoys))
        break
      case "All":
        setBabyNames(sortBabies(babyNamesData))
        break;
        default :
        break;
    }
  }

  return (
    <div className="d-flex flex-column ">
      <div>
        <div className=" d-flex justify-content-center ">
          <div className="d-flex">
            <p >Search: </p>
            <SearchBar onSearch={search} />
          </div>
          <FilterBabies onFilterClick={handleFilterClick} />
        </div>
        <div className="m-3 p-1 d-flex" >
          <p className="">Favourites:</p>
          <ul className="list-unstyled d-flex justify-content-between">
            {favouriteBabies.map((baby, index) => {
              return <FavouriteBaby key={index} value={baby} onClick={handleRemoveFavourite} />
            })}
          </ul>
        </div>
      </div>


      <div>
        <ul className="list-unstyled d-flex flex-wrap justify-content-evenly m-3">
          {babyNames.map((baby, index) => {
            return < Baby key={index} data={baby} onClick={handleAddToFavourites} />
          })}
        </ul>
      </div>

    </div>
  )
}
export default BabyNames;