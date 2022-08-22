import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const SecondaryWeapons = (props) => {
  let selectedSecondaryWeapon = <EmptyWeaponCard />
  if (props.equippedSecondaryWeapon === null) {
    selectedSecondaryWeapon = <EmptyWeaponCard />
  }
  else {
    selectedSecondaryWeapon = <WeaponCard
      setWeapon={props.removeSecondaryWeapon}
      weaponName={props.equippedSecondaryWeapon.weaponName}
      damageType={props.equippedSecondaryWeapon.damageType}
      ammo={props.equippedSecondaryWeapon.ammo}
      weight={props.equippedSecondaryWeapon.weight} />
  }

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
          setWeapon={props.setSecondaryWeapon}
          weaponName="GEIST P3"
          damageType="DMG"
          ammo="15/45"
          weight={1.5} />
        <WeaponCard
          setWeapon={props.setSecondaryWeapon}
          weaponName="WU S. Pistol"
          damageType="ZZZ"
          ammo="7/21"
          weight={1.0} />
        <WeaponCard
          setWeapon={props.setSecondaryWeapon}
          weaponName="WU S333"
          damageType="DMG"
          ammo="6/30"
          weight={1.8} />
        <WeaponCard
          setWeapon={props.setSecondaryWeapon}
          weaponName="AM D114"
          damageType="DMG"
          ammo="10/30"
          weight={1.2} />
        <WeaponCard
          setWeapon={props.setSecondaryWeapon}
          weaponName="URAGAN-5"
          damageType="DMG"
          ammo="5/15"
          weight={2.0} />
        <WeaponCard
          setWeapon={props.setSecondaryWeapon}
          weaponName="MACHT 37"
          damageType="DMG"
          ammo="30/90"
          weight={4.0} />
      </div>
    </div>
  )
}

export default SecondaryWeapons