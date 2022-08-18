import React, { useState } from "react"
import PrimaryWeapons from "./Loadout/PrimaryWeapons"
import SecondaryWeapons from "./Loadout/SecondaryWeapons"
import SupportWeapons from "./Loadout/SupportWeapons"
import Items from "./Loadout/Items"
import Abilities from "./Loadout/Abilities"

const Loadout = (props) => {
  const names = ["Primary Weapons", "Secondary Weapons", "Support Weapons", "Items", "Abilities"]
  const [menuItems, setMenuItems] = useState([1,0,0,0,0])
  let menuCategories = menuItems.map((menuItem, index) => {
    let selectedItem = [0,0,0,0,0]
    selectedItem[index] = 1
    if (menuItem === 1) {
      return (
        <div key={index} className="column has-background-primary is-4" style={{ border: "solid" }}>
          <p>{names[index]}</p>
        </div>
      )
    }
    return (
      <div key={index} className="loadout-menu-item column is-4" onClick={() => {setMenuItems(selectedItem)}} style={{ border: "solid" }}>
        <p>{names[index]}</p>
      </div>
    )
  })

  let selectedMenu = <PrimaryWeapons
  equippedPrimaryWeapon={props.G.loadout.primary}
  setPrimaryWeapon={props.moves.setPrimaryWeapon}
  removePrimaryWeapon={props.moves.removePrimaryWeapon} />
  if (menuItems[0]) {
    selectedMenu = <PrimaryWeapons
    equippedPrimaryWeapon={props.G.loadout.primary}
    setPrimaryWeapon={props.moves.setPrimaryWeapon}
    removePrimaryWeapon={props.moves.removePrimaryWeapon} />
  }
  else if (menuItems[1]) {
    selectedMenu = <SecondaryWeapons
    equippedSecondaryWeapon={props.G.loadout.secondary}
    setSecondaryWeapon={props.moves.setSecondaryWeapon}
    removeSecondaryWeapon={props.moves.removeSecondaryWeapon} />
  }
  else if (menuItems[2]) {
    selectedMenu = <SupportWeapons
    equippedSupportWeapons={props.G.loadout.support}
    addSupportWeapon={props.moves.addSupportWeapon}
    removeSupportWeapon={props.moves.removeSupportWeapon} />
  }
  else if (menuItems[3]) {
    selectedMenu = <Items
    equippedItem={props.G.loadout.item}
    setItem={props.moves.setItem}
    removeItem={props.moves.removeItem} />
  }
  else if (menuItems[4]) {
    selectedMenu = <Abilities
    equippedAbilities={props.G.loadout.abilities}
    addAbility={props.moves.addAbility}
    removeAbility={props.moves.removeAbility} />
  }

  return (
    <div style={{ padding: 20 }}>
      <p className="title" style={{ color: "#4A4A4A"}}>LOADOUT</p>
      <div className="columns is-multiline has-background-light" style={{ cursor: "pointer", margin: 0, marginBottom: 20 }}>
        {menuCategories}
        <div className="column is-4 has-background-white" />
      </div>
      {selectedMenu}
    </div>
  )
}

export default Loadout