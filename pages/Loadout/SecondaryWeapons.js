import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const SecondaryWeapons = (props) => {
  let selectedSecondaryWeapon = <EmptyWeaponCard />

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
              {selectedSecondaryWeapon}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select a secondary weapon</p>

      <div className="columns is-multiline">
        <WeaponCard
          weaponName="GEIST P3"
          damageType="DMG"
          ammo="15/45"
          weight="1.5" />
        <WeaponCard
          weaponName="WU S. Pistol"
          damageType="ZZZ"
          ammo="7/21"
          weight="1.0" />
      </div>
    </div>
  )
}

export default SecondaryWeapons