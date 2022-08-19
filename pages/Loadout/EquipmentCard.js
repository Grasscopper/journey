import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

const EquipmentCard = (props) => {
  const equipment = {
    type: props.type,
    equipmentName: props.equipmentName,
    equipmentDescription: props.equipmentDescription,
    weight: props.weight
  }

  const equipEquipment = (event) => {
    props.setEquipment(equipment)
  }

  return (
    <div className="column is-6" style={{  marginBottom: 10 }}>
     <div className="weapon-card-background" style={{ cursor: "pointer" }} onClick={equipEquipment}>
       <div className="upper-half-weapon-card columns is-mobile is-multiline" style={{ padding: 12, paddingTop: 5, paddingBottom: 5, minHeight: 179 }}>

         <div className="column is-9-mobile is-9" style={{ paddingTop: 15, paddingBottom: 0, backgroundColor: "#FEFEFE", marginTop: 7, marginBottom: 18 }}>
           <p style={{ paddingLeft: 10, fontSize: 18, fontWeight: 700 }}>
              {props.equipmentName}
           </p>
         </div>

         <div className="column is-3-mobile is-3" style={{ color: "#63687E", textAlign: "right", paddingTop: 17, paddingRight: 20, backgroundColor: "#FEFEFE", marginTop: 7, marginBottom: 18 }}>
            <span style={{color: "white", backgroundColor: "#E87C42", padding: 3, fontWeight: 700 }}>
              {props.type}
            </span>
         </div>

         <div className="column is-half-mobile is-6">
            <p>{props.equipmentDescription}</p>
         </div>

         <div className="column is-half-mobile is-6" style={{ textAlign: "right", paddingTop: 8, paddingRight: 20 }}>
            <span className="icon-text">
                <span>
                    <FontAwesomeIcon icon={faWeightHanging} style={{ color: "black", height: 28, width: 28}} />
                </span>

                <span style={{ marginTop: 5, marginLeft: 5, fontSize: 24 }}>
                    {props.weight}
                </span>
            </span>
         </div>
       </div>
     </div>
   </div>
  )
}

export default EquipmentCard