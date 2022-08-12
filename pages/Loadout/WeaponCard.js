import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

// <FontAwesomeIcon icon={faCubes} style={{ color: "#F1EBFD", height: 30, width: 30 }} />

const WeaponCard = (props) => {
  return (
    <div className="column is-3" style={{  marginBottom: 20 }}>
     <div className="weapon-card-background" style={{ cursor: "pointer" }}>
       <div className="columns is-mobile is-multiline" style={{ padding: 10, paddingTop: 5, paddingBottom: 5, minHeight: 139 }}>

         <div className="column is-7-mobile is-7" style={{ paddingTop: 15, paddingBottom: 0 }}>
           <p style={{ paddingLeft: 10, fontSize: 24, fontWeight: 700, color: "#63687E" }}>
           WU S.PISTOL
           </p>
         </div>

         <div className="column is-5-mobile is-5" style={{ color: "#63687E", textAlign: "right", paddingTop: 21, paddingRight: 20 }}>
          <span style={{color: "black", backgroundColor: "#FA7787", padding: 3 }}>DMG</span>
         </div>

         <div className="column is-half-mobile is-6" style={{ paddingTop: 0 }}>
           <p style={{ paddingLeft: 10, fontSize: 32, fontWeight: 700, color: "#63687E" }}>
           7/21
           </p>
         </div>

         <div className="column is-half-mobile is-6" style={{ textAlign: "right", paddingTop: 13, paddingRight: 20 }}>



            <span className="icon-text">
            <span>
                        <FontAwesomeIcon icon={faWeightHanging} style={{ color: "black", height: 30, width: 30}} />
            </span>

            <span>
            1.0 KG
            </span>
          </span>


         </div>

       </div>
     </div>
   </div>
  )
}

export default WeaponCard