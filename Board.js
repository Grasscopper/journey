import React from 'react'
import Loadout from './Loadout'

const Board = (props) => {
  return (
    <Loadout G={props.G} moves={props.moves} ctx={props.ctx} />
  )
}

export default Board