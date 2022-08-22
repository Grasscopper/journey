import React, { useState } from "react"
import PrimaryWeapons from "./Loadout/PrimaryWeapons"
import SecondaryWeapons from "./Loadout/SecondaryWeapons"
import SupportWeapons from "./Loadout/SupportWeapons"
import Items from "./Loadout/Items"
import Equipment from "./Loadout/Equipment"
import Abilities from "./Loadout/Abilities"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faRunning } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

const Loadout = (props) => {
  const names = ["Primary Weapons", "Secondary Weapons", "Support Weapons", "Items", "Equipment", "Abilities"]
  const [menuItems, setMenuItems] = useState([1,0,0,0,0,0])
  let menuCategories = menuItems.map((menuItem, index) => {
    let selectedItem = [0,0,0,0,0,0]
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
    selectedMenu = <Equipment
    equipmentHead={props.G.loadout.equipmentHead}
    setHead={props.moves.setHead}
    removeHead={props.moves.removeHead}
    equipmentBody={props.G.loadout.equipmentBody}
    setBody={props.moves.setBody}
    removeBody={props.moves.removeBody} />
  }
  else if (menuItems[5]) {
    selectedMenu = <Abilities
    equippedAbilities={props.G.loadout.abilities}
    addAbility={props.moves.addAbility}
    removeAbility={props.moves.removeAbility} />
  }

  let movementRank = () => {
    const weight = parseFloat(props.G.loadout.weight).toFixed(1)
    if (weight <= 3.4) {
      return "S"
    }
    else if (weight >= 3.5 && weight <= 6.4) {
      return "A"
    }
    else if (weight >= 6.5 && weight <= 10.4) {
      return "B"
    }
    else if (weight >= 10.5 && weight <= 12.4) {
      return "C"
    }
    else if (weight >= 12.5) {
      return "D"
    }
    return "E"
  }

  let weight = () => {
    return (parseFloat(props.G.loadout.weight).toFixed(1))
  }

  return (
    <div style={{ padding: 20 }}>
      <p className="title" style={{ color: "#4A4A4A"}}>LOADOUT</p>
      <div className="columns is-multiline has-background-light" style={{ cursor: "pointer", margin: 0, marginBottom: 20 }}>
        {menuCategories}
        <div className="column is-4 has-background-white" />
      </div>
      <section className="hero" style={{ backgroundColor: "#1F9CED", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <div className="columns">
                <div className="column is-6">
                  <span className="icon-text">

                    <span>
                    <FontAwesomeIcon icon={faRunning} style={{ color: "white", height: 28, width: 28, marginTop: 4}} />
                    </span>

                    <span style={{ marginLeft: 5, fontSize: 24 }}>
                    <p className="title" style={{ color: "white" }}>{movementRank()}</p>
                    </span>

                  </span>
                </div>

                <div className="column is-6">
                  <span className="icon-text">

                    <span>
                    <FontAwesomeIcon icon={faWeightHanging} style={{ color: "white", height: 28, width: 28, marginTop: 4}} />
                    </span>

                    <span style={{ marginLeft: 5, fontSize: 24 }}>
                    <p className="title" style={{ color: "white" }}>{weight()} KG</p>
                    </span>

                  </span>
                </div>
              </div>
          </div>
      </section>
      {selectedMenu}
    </div>
  )
}

export default Loadout