import React from "react"

const EmptyAbilityCard = (props) => {
  return (
    <div className="column is-3" style={{  marginBottom: 10 }}>
     <div className="weapon-card-background" style={{ cursor: "pointer" }}>
       <div className="upper-half-weapon-card columns is-mobile is-multiline" style={{ padding: 12, paddingTop: 5, paddingBottom: 5, minHeight: 179 }}>

         <div className="column is-9-mobile is-9" style={{ paddingTop: 15, paddingBottom: 0, backgroundColor: "#FEFEFE", marginTop: 7, marginBottom: 18 }}>
           <p style={{ paddingLeft: 10, fontSize: 18, fontWeight: 700 }}>
              NOT EQUIPPED
           </p>
         </div>

         <div className="column is-3-mobile is-3" style={{ color: "#63687E", textAlign: "right", paddingTop: 17, paddingRight: 20, backgroundColor: "#FEFEFE", marginTop: 7, marginBottom: 18 }}>
         </div>

         <div className="column is-half-mobile is-6" style={{ paddingTop: 8 }}>
         </div>

         <div className="column is-half-mobile is-6" style={{ textAlign: "right", paddingTop: 8, paddingRight: 20 }}>
         </div>

       </div>
     </div>
   </div>
  )
}

export default EmptyAbilityCard