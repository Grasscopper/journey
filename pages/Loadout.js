import React, { useState } from "react"
import PrimaryWeapons from "./Loadout/PrimaryWeapons"
import SecondaryWeapons from "./Loadout/SecondaryWeapons"
import SupportWeapons from "./Loadout/SupportWeapons"
import Items from "./Loadout/Items"
import Abilities from "./Loadout/Abilities"


const Loadout = (props) => {
  const names = ["Primary Weapons", "Secondary Weapons", "Support Weapons", "Items", "Abilities"]
  const [menuItems, setMenuItems] = useState([1,0,0,0,0])
  let menuTiles = menuItems.map((menuItem, index) => {
    let selectedItem = [0,0,0,0,0]
    selectedItem[index] = 1
    if (menuItem === 1) {
      return (
        <div key={index} className="column has-background-primary is-4">
          <p>{names[index]}</p>
        </div>
      )
    }
    return (
      <div key={index} className="column is-4" onClick={() => {setMenuItems(selectedItem)}}>
        <p>{names[index]}</p>
      </div>
    )
  })

  let selectedMenu = <PrimaryWeapons />
  if (menuItems[0]) {
    selectedMenu = <PrimaryWeapons />
  }
  else if (menuItems[1]) {
    selectedMenu = <SecondaryWeapons />
  }
  else if (menuItems[2]) {
    selectedMenu = <SupportWeapons />
  }
  else if (menuItems[3]) {
    selectedMenu = <Items />
  }
  else if (menuItems[4]) {
    selectedMenu = <Abilities />
  }

  return (
    <>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">
            Scout
          </p>
          <p class="subtitle">
            Level 4
          </p>
        </div>
      </section>
      <div className="columns is-multiline" style={{ padding: 20 }}>
      {menuTiles}
      <div className="column is-4" />
      {selectedMenu}
      </div>
    </>
  )
}

export default Loadout