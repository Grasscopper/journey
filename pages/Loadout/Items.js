import React from "react"

const Items = (props) => {
  return (
    <div style={{ padding: 20 }}>
      <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
        <ul>
          <li><a href="/Loadout">CUSTOMIZE</a></li>
          <li><a href="/Loadout">LOADOUT</a></li>
          <li className="is-active"><a href="/Items" aria-current="page">ITEMS</a></li>
        </ul>
      </nav>
      <ul>
        <li>C. BOX (DRST)</li>
      </ul>
    </div>
  )
}

export default Items