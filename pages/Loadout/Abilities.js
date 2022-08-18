import React from "react"
import AbilityCard from "./AbilityCard"
import EmptyAbilityCard from "./EmptyAbilityCard"

const Abilities = (props) => {
  let selectedAbility = <>
  <EmptyAbilityCard />
  <EmptyAbilityCard />
  <EmptyAbilityCard />
  <EmptyAbilityCard />
  </>

  if (props.equippedAbilities.length === 0) {
    selectedAbility = <>
    <EmptyAbilityCard />
    <EmptyAbilityCard />
    <EmptyAbilityCard />
    <EmptyAbilityCard />
    </>
  }
  else {
    let abilityTiles = props.equippedAbilities.map((ability, index) => {
      return (
        <AbilityCard
        key={index}
        abilityAction={props.removeAbility}
        abilityName={ability.abilityName}
        abilityDescription={ability.abilityDescription}
        abilityLevel={ability.abilityLevel} />
      )
    })
    if (props.equippedAbilities.length === 1) {
      selectedAbility = <>
      {abilityTiles}
      <EmptyAbilityCard />
      <EmptyAbilityCard />
      <EmptyAbilityCard />
      </>
    }
    else if (props.equippedAbilities.length === 2) {
      selectedAbility = <>
      {abilityTiles}
      <EmptyAbilityCard />
      <EmptyAbilityCard />
      </>
    }
    else if (props.equippedAbilities.length === 3) {
      selectedAbility = <>
      {abilityTiles}
      <EmptyAbilityCard />
      </>
    }
    else if (props.equippedAbilities.length === 4) {
      selectedAbility = abilityTiles
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
              {selectedAbility}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select abilities</p>

      <div className="columns is-multiline">
        <AbilityCard
        abilityAction={props.addAbility}
        abilityName="TACTICAL+"
        abilityDescription="Increased ammo for Support Weapons."
        abilityLevel="1" />
        <AbilityCard
        abilityAction={props.addAbility}
        abilityName="SNIPER+"
        abilityDescription="Reduced sway and recoil when firing."
        abilityLevel="1" />
        <AbilityCard
        abilityAction={props.addAbility}
        abilityName="INTEL+"
        abilityDescription="Faster enemy marking."
        abilityLevel="1" />
        <AbilityCard
        abilityAction={props.addAbility}
        abilityName="ANTI-MARKING+"
        abilityDescription="The duration of the marker placed on the player decreases."
        abilityLevel="1" />
      </div>
    </div>
  )
}

export default Abilities




