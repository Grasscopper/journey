import React, { useState } from "react"
import Link from "next/link"
import PrimaryWeapons from "./Loadout/PrimaryWeapons"
import SecondaryWeapons from "./Loadout/SecondaryWeapons"
import SupportWeapons from "./Loadout/SupportWeapons"
import Items from "./Loadout/Items"
import Abilities from "./Loadout/Abilities"


const Loadout = (props) => {
  // const names = ["Primary Weapons", "Secondary Weapons", "Support Weapons", "Items", "Abilities"]
  // const [menuItems, setMenuItems] = useState([1,0,0,0,0])
  // let menuCategories = menuItems.map((menuItem, index) => {
  //   let selectedItem = [0,0,0,0,0]
  //   selectedItem[index] = 1
  //   if (menuItem === 1) {
  //     return (
  //       <div key={index} className="column has-background-primary is-4">
  //         <p>{names[index]}</p>
  //       </div>
  //     )
  //   }
  //   return (
  //     <div key={index} className="column is-4" onClick={() => {setMenuItems(selectedItem)}}>
  //       <p>{names[index]}</p>
  //     </div>
  //   )
  // })

  // let selectedMenu = <PrimaryWeapons />
  // if (menuItems[0]) {
  //   selectedMenu = <PrimaryWeapons />
  // }
  // else if (menuItems[1]) {
  //   selectedMenu = <SecondaryWeapons />
  // }
  // else if (menuItems[2]) {
  //   selectedMenu = <SupportWeapons />
  // }
  // else if (menuItems[3]) {
  //   selectedMenu = <Items />
  // }
  // else if (menuItems[4]) {
  //   selectedMenu = <Abilities />
  // }

  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
      <ul>
        <li><a href="/Loadout">CUSTOMIZE</a></li>
        <li className="is-active"><a href="/Loadout" aria-current="page">LOADOUT</a></li>
      </ul>
      </nav>
      <div className="columns is-multiline has-background-light">
        <Link href="/Loadout/PrimaryWeapons">
          <div className="column is-4" style={{ border: "solid" }}>
            <a>Primary Weapons</a>
          </div>
        </Link>
        <Link href="/Loadout/SecondaryWeapons">
          <div className="column is-4" style={{ border: "solid" }}>
            <a>Secondary Weapons</a>
          </div>
        </Link>
        <Link href="/Loadout/SupportWeapons">
          <div className="column is-4" style={{ border: "solid" }}>
            <a>Support Weapons</a>
          </div>
        </Link>
        <Link href="/Loadout/Items">
          <div className="column is-4" style={{ border: "solid" }}>
            <a>Items</a>
          </div>
        </Link>
        <Link href="/Loadout/Abilities">
          <div className="column is-4" style={{ border: "solid" }}>
            <a>Abilities</a>
          </div>
        </Link>
        <div className="column is-4 has-background-white" />
      </div>
    </div>
  )
}

export default Loadout