import React from "react"
import AbilityCard from "./AbilityCard"

const Abilities = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/Abilities" aria-current="page">ABILITIES</a></li>
        </ul>
      </nav>

      <section className="hero" style={{ backgroundColor: "#EFF2F8", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
            <p className="title" style={{ color: "#4a4a4a" }}>Abilities</p>
          </div>
      </section>

      <div className="columns is-multiline">
        <AbilityCard
          abilityName="TACTICAL+"
          abilityDescription="Increased ammo for Support Weapons."
          abilityLevel="1" />
        <AbilityCard
          abilityName="SNIPER+"
          abilityDescription="Reduced sway and recoil when firing."
          abilityLevel="1" />
        <AbilityCard
          abilityName="INTEL+"
          abilityDescription="Faster enemy marking."
          abilityLevel="1" />
        <AbilityCard
          abilityName="ANTI-MARKING+"
          abilityDescription="The duration of the marker placed on the player decreases."
          abilityLevel="1" />
      </div>
    </div>
  )
}

export default Abilities