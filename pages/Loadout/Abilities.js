import React from "react"
import AbilityCard from "./AbilityCard"
import EmptyWeaponCard from "./EmptyWeaponCard"

const Abilities = (props) => {
  let selectedAbility = <EmptyWeaponCard />

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
              {selectedAbility}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select a primary weapon</p>

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




