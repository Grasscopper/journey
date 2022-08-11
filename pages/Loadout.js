import React, { useState } from "react"

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

  return (
    <div className="columns is-multiline" style={{ padding: 20 }}>
    <h1>LOADOUT works on atom?</h1>
    {menuTiles}
    </div>
  )
}

export default Loadout