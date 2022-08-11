import React from "react"

const SupportWeapons = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/SupportWeapons" aria-current="page">SUPPORT WEAPONS</a></li>
        </ul>
      </nav>
      <ul>
        <li>MAGAZINE</li>
        <li>E-LOCATOR</li>
      </ul>
    </div>
  )
}

export default SupportWeapons