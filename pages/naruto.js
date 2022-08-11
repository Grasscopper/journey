import React from "react"
import Link from 'next/link'

function Naruto() {
  return (
    <ul>
      <li>
        <Link href="/post/byleth">
          <p>Go to pages/post/[params].js</p>
        </Link>
      </li>
    </ul>
  )
}

export default Naruto