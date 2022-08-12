import React from "react"
import WeaponCard from "./WeaponCard"

const PrimaryWeapons = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/PrimaryWeapons" aria-current="page">PRIMARY WEAPONS</a></li>
        </ul>
      </nav>
      <div className="columns is-multiline">
        <WeaponCard
          weaponName="AM MRS-4"
          damageType="DMG"
          ammo="30/90"
          weight="6.5" />
        <WeaponCard
          weaponName="AM MRS-71 RIFLE"
          damageType="DMG"
          ammo="10/30"
          weight="9.5" />
      </div>
    </div>
  )
}

export default PrimaryWeapons
