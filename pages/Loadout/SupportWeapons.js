import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const SupportWeapons = (props) => {
  let selectedSupportWeapons = <>
  <EmptyWeaponCard />
  <EmptyWeaponCard />
  </>

  if (props.equippedSupportWeapons.length === 0) {
    selectedSupportWeapons = <>
    <EmptyWeaponCard />
    <EmptyWeaponCard />
    </>
  }
  else {
    let supportTiles = props.equippedSupportWeapons.map((support, index) => {
      return (
        <WeaponCard
        key={index}
        setWeapon={props.removeSupportWeapon}
        weaponName={support.weaponName}
        damageType={support.damageType}
        ammo={support.ammo}
        weight={support.weight}  />
      )
    })
    if (props.equippedSupportWeapons.length === 1) {
      selectedSupportWeapons = <>
      {supportTiles}
      <EmptyWeaponCard />
      </>
    }
    else if (props.equippedSupportWeapons.length === 2) {
      selectedSupportWeapons = supportTiles
    }
  }

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
              {selectedSupportWeapons}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select support weapons</p>

      <div className="columns is-multiline">
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="MAGAZINE"
      damageType="SPC"
      ammo="10"
      weight="0.2" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="SMOKE GRENADE"
      damageType="SMK"
      ammo="3"
      weight="1.0" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="STUN GRENADE"
      damageType="STN"
      ammo="3"
      weight="1.0" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="E.LOCATOR"
      damageType="SPC"
      ammo="3"
      weight="1.0" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="DECOY"
      damageType="SPC"
      ammo="2"
      weight="2.0" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="HAND GRENADE"
      damageType="DMG"
      ammo="3"
      weight="1.0" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="PETROL BOMB"
      damageType="DMG"
      ammo="3"
      weight="1.0" />
      <WeaponCard
      setWeapon={props.addSupportWeapon}
      weaponName="PLUSHY SNARE"
      damageType="SPC"
      ammo="2"
      weight="1.0" />      
      </div>
    </div>
  )
}

export default SupportWeapons



