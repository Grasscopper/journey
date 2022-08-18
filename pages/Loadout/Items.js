import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const Items = (props) => {
  let selectedItem = <EmptyWeaponCard />
  if (props.equippedItem === null) {
    selectedItem = <EmptyWeaponCard />
  }
  else {
    selectedItem = <WeaponCard
      setWeapon={props.removeItem}
      weaponName={props.equippedItem.weaponName}
      damageType={props.equippedItem.damageType}
      ammo={props.equippedItem.ammo}
      weight={props.equippedItem.weight} />
  }

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
              {selectedItem}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select an item</p>

      <div className="columns is-multiline">
      <WeaponCard
      setWeapon={props.setItem}
      weaponName="C. BOX (DRST)"
      damageType="ITEM"
      ammo="2"
      weight="0.5" />
      </div>
    </div>
  )
}

export default Items
