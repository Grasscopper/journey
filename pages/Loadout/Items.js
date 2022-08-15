import React from "react"
import WeaponCard from "./WeaponCard"

const Items = (props) => {
  return (
    <div style={{ padding: 10 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/Items" aria-current="page">ITEMS</a></li>
        </ul>
      </nav>

      <section className="hero" style={{ backgroundColor: "#EFF2F8", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
            <p className="title" style={{ color: "#4a4a4a" }}>Items</p>
          </div>
      </section>

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