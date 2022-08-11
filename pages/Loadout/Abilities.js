import React from "react"

const Abilities = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/Abilities" aria-current="page">ABILITIES</a></li>
        </ul>
      </nav>
      <ul>
        <li>TACTICAL 1</li>
        <li>SNIPER 1</li>
        <li>INTEL 1</li>
        <li>ANTI-MARKING 1</li>
      </ul>
    </div>
  )
}

export default Abilities