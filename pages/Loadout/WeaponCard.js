import React from "react"
// import { useRouter } from 'next/router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

const WeaponCard = (props) => {
  // const router = useRouter()
  const weapon = {
    weaponName: props.weaponName,
    damageType: props.damageType,
    ammo: props.ammo,
    weight: props.ammo
  }
  const equipPrimaryWeapon = (event) => {
    // event.preventDefault()
    // router.push(weapon)
  }

  let damageTypeBackgroundColor = "#F14667"
  if (props.damageType === "ITEM") {
    damageTypeBackgroundColor = "#E87C42"
  }
  else if (props.damageType !== "DMG"){
    damageTypeBackgroundColor = "#79BCD2"
  }

  return (
    <div className="column is-4" style={{  marginBottom: 10 }}>
     <div className="weapon-card-background" style={{ cursor: "pointer" }} onClick={equipPrimaryWeapon()}>
       <div className="upper-half-weapon-card columns is-mobile is-multiline" style={{ padding: 12, paddingTop: 5, paddingBottom: 5, minHeight: 179 }}>

         <div className="column is-9-mobile is-9" style={{ paddingTop: 15, paddingBottom: 0, backgroundColor: "#FEFEFE", marginTop: 7, marginBottom: 18 }}>
           <p style={{ paddingLeft: 10, fontSize: 18, fontWeight: 700 }}>
              {props.weaponName}
           </p>
         </div>

         <div className="column is-3-mobile is-3" style={{ color: "#63687E", textAlign: "right", paddingTop: 17, paddingRight: 20, backgroundColor: "#FEFEFE", marginTop: 7, marginBottom: 18 }}>
            <span style={{color: "white", backgroundColor: damageTypeBackgroundColor, padding: 3, fontWeight: 700 }}>
              {props.damageType}
            </span>
         </div>

         <div className="column is-half-mobile is-6" style={{ paddingTop: 8 }}>
         <span className="icon-text" style={{ paddingLeft: 10 }}>
             <span>
                 <FontAwesomeIcon icon={faCubes} style={{ color: "black", height: 30, width: 30}} />
             </span>

             <span style={{ marginTop: 5, marginLeft: 5, fontSize: 24 }}>
                 {props.ammo}
             </span>
         </span>
         </div>

         <div className="column is-half-mobile is-6" style={{ textAlign: "right", paddingTop: 8, paddingRight: 20 }}>
            <span className="icon-text">
                <span>
                    <FontAwesomeIcon icon={faWeightHanging} style={{ color: "black", height: 30, width: 30}} />
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

export default WeaponCard