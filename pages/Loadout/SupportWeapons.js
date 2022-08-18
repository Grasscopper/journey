import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const SupportWeapons = (props) => {
  let selectedSupportWeapon = <EmptyWeaponCard />
  if (props.equippedSupportWeapon === null) {
    selectedSupportWeapon = <EmptyWeaponCard />
  }
  else {
    selectedSupportWeapon = <WeaponCard
      setWeapon={props.removeSupportWeapon}
      weaponName={props.equippedSupportWeapon.weaponName}
      damageType={props.equippedSupportWeapon.damageType}
      ammo={props.equippedSupportWeapon.ammo}
      weight={props.equippedSupportWeapon.weight} />
  }

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
              {selectedSupportWeapon}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select support weapons</p>

      <div className="columns is-multiline">
      <WeaponCard
      setWeapon={props.setSupportWeapon}
      weaponName="MAGAZINE"
      damageType="SPC"
      ammo="10"
      weight="0.2" />
      <WeaponCard
      setWeapon={props.setSupportWeapon}
      weaponName="E.LOCATOR"
      damageType="SPC"
      ammo="3"
      weight="1.0" />

      </div>
    </div>
  )
}

export default SupportWeapons



