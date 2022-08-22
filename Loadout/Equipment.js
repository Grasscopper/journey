import React from "react"
import EquipmentCard from "./EquipmentCard"
import EmptyEquipmentCard from "./EmptyEquipmentCard"

const Equipment = (props) => {
  let selectedHead = <EmptyEquipmentCard
  slot="NO HEAD GEAR"
  type="HEAD" />
  if (props.equipmentHead === null) {
    selectedHead = <EmptyEquipmentCard
    slot="NO HEAD GEAR"
    type="HEAD" />
  }
  else {
    selectedHead = <EquipmentCard
      type={props.equipmentHead.type}
      setEquipment={props.removeHead}
      equipmentName={props.equipmentHead.equipmentName}
      equipmentDescription={props.equipmentHead.equipmentDescription}
      weight={props.equipmentHead.weight} />
  }

  let selectedBody = <EmptyEquipmentCard
  slot="NO BODY GEAR"
  type="BODY" />
  if (props.equipmentBody === null) {
    selectedBody = <EmptyEquipmentCard
    slot="NO BODY GEAR"
    type="BODY"/>
  }
  else {
    selectedBody = <EquipmentCard
      type={props.equipmentBody.type}
      setEquipment={props.removeBody}
      equipmentName={props.equipmentBody.equipmentName}
      equipmentDescription={props.equipmentBody.equipmentDescription}
      weight={props.equipmentBody.weight} />
  }

  return (
    <div>
      <section className="hero" style={{ backgroundColor: "#03D1B2", marginBottom: 30, border: "solid" }}>
          <div className="hero-body">
              <p className="title" style={{ color: "white" }}>
              EQUIPPED
              </p>
              <div className="columns is-multiline">
                {selectedHead}
                {selectedBody}
              </div>
          </div>
      </section>

      <p className="title" style={{ color: "#4A4A4A"}}>Select equipment</p>

      <div className="columns is-multiline">
        <EquipmentCard
          type="HEAD"
          setEquipment={props.setHead}
          equipmentName="Gas Mask"
          equipmentDescription="Nullify the effects of sleep grenades."
          weight={0.9} />
        <EquipmentCard
          type="HEAD"
          setEquipment={props.setHead}
          equipmentName="Head Plate"
          equipmentDescription="Nullify damage against a single headshot."
          weight={0.9} />
        <EquipmentCard
          type="HEAD"
          setEquipment={props.setHead}
          equipmentName="Scarf and Goggles"
          equipmentDescription="Increase visibility during sandstorms."
          weight={0.9} />
        <EquipmentCard
          type="BODY"
          setEquipment={props.setBody}
          equipmentName="Battle Dress"
          equipmentDescription="Increase defense against bullets."
          weight={4} />
        <EquipmentCard
          type="BODY"
          setEquipment={props.setBody}
          equipmentName="Sneaking Suit"
          equipmentDescription="Decrease footstep noises."
          weight={3.4} />
        <EquipmentCard
          type="BODY"
          setEquipment={props.setBody}
          equipmentName="OctoCamo"
          equipmentDescription="Increase your camo index in all environments."
          weight={3.4} />
      </div>
    </div>
  )
}

export default Equipment