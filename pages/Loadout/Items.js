import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const Items = (props) => {
  let selectedItem = <EmptyWeaponCard />

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

      <p className="title" style={{ color: "#4A4A4A"}}>Select a primary weapon</p>

      <div className="columns is-multiline">
      <WeaponCard
      weaponName="C. BOX (DRST)"
      damageType="ITEM"
      ammo="2"
      weight="0.5" />


      </div>
    </div>
  )
}

export default Items
