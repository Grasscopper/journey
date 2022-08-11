import React from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'

const PrimaryWeapons = (props) => {
  return (
    <div className="content">
      <FontAwesomeIcon icon={faHeart} style={{ color: "red"}} />
      <ul>
        <li>AM MRS-4</li>
        <li>AM MRS-71 RIFLE</li>
      </ul>
    </div>
  )
}

export default PrimaryWeapons