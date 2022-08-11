import React from "react"

const SecondaryWeapons = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/SecondaryWeapons" aria-current="page">SECONDARY WEAPONS</a></li>
        </ul>
      </nav>
      <ul>
        <li>GEIST P3</li>
        <li>WU S. Pistol</li>
      </ul>
    </div>
  )
}

export default SecondaryWeapons