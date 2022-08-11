import React from "react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faHeart } from '@fortawesome/free-solid-svg-icons'
// <FontAwesomeIcon icon={faHeart} style={{ color: "red"}} />

const PrimaryWeapons = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/PrimaryWeapons" aria-current="page">PRIMARY WEAPONS</a></li>
        </ul>
      </nav>
        <ul>
          <li>AM MRS-4</li>
          <li>AM MRS-71 RIFLE</li>
        </ul>
    </div>
  )
}

export default PrimaryWeapons