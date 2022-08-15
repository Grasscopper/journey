import React from "react"
import WeaponCard from "./WeaponCard"

const SupportWeapons = (props) => {
  return (
    <div style={{ padding: 10 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/SupportWeapons" aria-current="page">SUPPORT WEAPONS</a></li>
        </ul>
      </nav>

      <section className="hero" style={{ backgroundColor: "#EFF2F8", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
            <p className="title" style={{ color: "#4a4a4a" }}>Support Weapons</p>
          </div>
      </section>

      <div className="columns is-multiline">
        <WeaponCard
          weaponName="MAGAZINE"
          damageType="SPC"
          ammo="10"
          weight="0.2" />
        <WeaponCard
          weaponName="E.LOCATOR"
          damageType="SPC"
          ammo="3"
          weight="1.0" />
      </div>
    </div>
  )
}

export default SupportWeapons