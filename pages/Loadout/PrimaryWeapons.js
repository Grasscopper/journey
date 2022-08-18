import React from "react"
import WeaponCard from "./WeaponCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const PrimaryWeapons = (props) => {
  let selectedPrimaryWeapon = <EmptyWeaponCard />
  if (props.equippedPrimaryWeapon === null) {
    selectedPrimaryWeapon = <EmptyWeaponCard />
  }
  else {
    selectedPrimaryWeapon = <WeaponCard
      setWeapon={props.removePrimaryWeapon}
      weaponName={props.equippedPrimaryWeapon.weaponName}
      damageType={props.equippedPrimaryWeapon.damageType}
      ammo={props.equippedPrimaryWeapon.ammo}
      weight={props.equippedPrimaryWeapon.weight} />
  }

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
              {selectedPrimaryWeapon}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select a primary weapon</p>

      <div className="columns is-multiline">
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="AM MRS-4"
          damageType="DMG"
          ammo="30/90"
          weight={6.5}/>
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="AM MRS-71 RIFLE"
          damageType="DMG"
          ammo="10/30"
          weight={9.5} />
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="LPG-61"
          damageType="DMG"
          ammo="100/200"
          weight={10.2} />
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="S1000"
          damageType="DMG"
          ammo="8/16"
          weight={5.5} />
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="UN-ARC-NL"
          damageType="STN"
          ammo="20/60"
          weight={7.3} />
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="RENOV-ICKX TP"
          damageType="ZZZ"
          ammo="5/15"
          weight={8.5} />
        <WeaponCard
          setWeapon={props.setPrimaryWeapon}
          weaponName="BULLHORN SG"
          damageType="STN"
          ammo="9/18"
          weight={6.8} />
      </div>
    </div>
  )
}

export default PrimaryWeapons
