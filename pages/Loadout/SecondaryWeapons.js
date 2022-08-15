import React from "react"
import WeaponCard from "./WeaponCard"

const SecondaryWeapons = (props) => {
  return (
    <div style={{ padding: 10 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/SecondaryWeapons" aria-current="page">SECONDARY WEAPONS</a></li>
        </ul>
      </nav>

      <section className="hero" style={{ backgroundColor: "#EFF2F8", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
            <p className="title" style={{ color: "#4a4a4a" }}>Secondary Weapons</p>
          </div>
      </section>

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