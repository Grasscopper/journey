import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const AbilityCard = (props) => {
  return (
    <div className="column is-4" style={{  marginBottom: 10 }}>
     <div className="weapon-card-background" style={{ cursor: "pointer" }}>
       <div className="upper-half-weapon-card columns is-mobile is-multiline" style={{ padding: 12, paddingTop: 5, paddingBottom: 5, minHeight: 170 }}>

         <div className="column is-narrow is-6-mobile is-6" style={{ paddingTop: 15, paddingBottom: 0, backgroundColor: "#EFF2F9", marginTop: 7, marginBottom: 6 }}>
           <p style={{ paddingLeft: 10, fontSize: 18, fontWeight: 700 }}>
              {props.abilityName}
           </p>
         </div>

         <div className="column is-narrow is-6-mobile is-6" style={{ color: "#63687E", textAlign: "right", paddingTop: 14, paddingRight: 20, backgroundColor: "#EFF2F9", marginTop: 7, marginBottom: 6 }}>
         <span className="icon-text" style={{ backgroundColor: "white", padding: 3, paddingLeft: 10, paddingRight: 10, borderRadius: "25%/50%" }}>
             <span>
                 <FontAwesomeIcon icon={faStar} style={{ color: "black", height: 20, width: 20}} />
             </span>

             <span style={{ marginTop: 0, marginLeft: 5, fontSize: 18, fontWeight: 700 }}>
                 {props.abilityLevel}
             </span>
         </span>
         </div>

         <div className="column is-12-mobile is-12" style={{ paddingTop: 8 }}>
         <p className="subtitle">{props.abilityDescription}</p>
         </div>

       </div>
     </div>
   </div>
  )
}

export default AbilityCard