export const Game = {
  setup: () => (
    {
      loadout: {
        primary: null,
        secondary: null,
        support: [],
        item: null,
        equipmentHead: null,
        equipmentBody: null,
        abilities: [],
        weight: 0.0
      }
    }
  ),
  moves: {
    setPrimaryWeapon: (G, ctx, primary) => {
      if (G.loadout.primary === null) {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + primary.weight
        }
      }
      else {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight - G.loadout.primary.weight
        }
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + primary.weight
        }
      }
      G.loadout.primary = primary
    },
    removePrimaryWeapon: (G, ctx, primary) => {
      G.loadout = {
        ...G.loadout,
        weight: G.loadout.weight - primary.weight
      }
      G.loadout.primary = null
    },
    setSecondaryWeapon: (G, ctx, secondary) => {
      if (G.loadout.secondary === null) {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + secondary.weight
        }
      }
      else {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight - G.loadout.secondary.weight
        }
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + secondary.weight
        }
      }
      G.loadout.secondary = secondary
    },
    removeSecondaryWeapon: (G, ctx, secondary) => {
      G.loadout = {
        ...G.loadout,
        weight: G.loadout.weight - secondary.weight
      }
      G.loadout.secondary = null
    },
    addSupportWeapon: (G, ctx, support) => {
      let isEquipped = G.loadout.support.find(current => current.weaponName === support.weaponName)
      if (isEquipped) { // support weapon already equipped
      }
      else {
        if (G.loadout.support.length < 2) {
          G.loadout = {
            ...G.loadout,
            weight: G.loadout.weight + support.weight
          }
          G.loadout.support = [ ...G.loadout.support, support ]
        }
      }
    },
    removeSupportWeapon: (G, ctx, support) => {
      const result = G.loadout.support.filter(current => current.weaponName != support.weaponName)
      G.loadout = {
        ...G.loadout,
        weight: G.loadout.weight - support.weight
      }
      G.loadout.support = result
    },
    setItem: (G, ctx, item) => {
      if (G.loadout.item === null) {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + item.weight
        }
      }
      else {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight - G.loadout.item.weight
        }
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + item.weight
        }
      }
      G.loadout.item = item
    },
    removeItem: (G, ctx, item) => {
      G.loadout = {
        ...G.loadout,
        weight: G.loadout.weight - item.weight
      }
      G.loadout.item = null
    },
    setHead: (G, ctx, head) => {
      if (G.loadout.equipmentHead === null) {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + head.weight
        }
      }
      else {
        if (G.loadout.equipmentHead.equipmentName !== head.equipmentName) {
          G.loadout = {
            ...G.loadout,
            weight: G.loadout.weight - G.loadout.equipmentHead.weight
          }
          G.loadout = {
            ...G.loadout,
            weight: G.loadout.weight + head.weight
          }
        }
      }
      G.loadout.equipmentHead = head
    },
    removeHead: (G, ctx, head) => {
      G.loadout = {
        ...G.loadout,
        weight: G.loadout.weight - head.weight
      }
      G.loadout.equipmentHead = null
    },
    setBody: (G, ctx, body) => {
      if (G.loadout.equipmentBody === null) {
        G.loadout = {
          ...G.loadout,
          weight: G.loadout.weight + body.weight
        }
      }
      else {
        if (G.loadout.equipmentBody.equipmentName !== body.equipmentName) {
          G.loadout = {
            ...G.loadout,
            weight: G.loadout.weight - G.loadout.equipmentBody.weight
          }
          G.loadout = {
            ...G.loadout,
            weight: G.loadout.weight + body.weight
          }
        }
      }
      G.loadout.equipmentBody = body
    },
    removeBody: (G, ctx, body) => {
      G.loadout = {
        ...G.loadout,
        weight: G.loadout.weight - body.weight
      }
      G.loadout.equipmentBody = null
    },
    addAbility: (G, ctx, ability) => {
      let isEquipped = G.loadout.abilities.find(current => current.abilityName === ability.abilityName)
      if (isEquipped) { // ability already equipped
      }
      else {
        if (G.loadout.abilities.length < 4) {
          G.loadout.abilities = [ ...G.loadout.abilities, ability ]
        }
      }
    },
    removeAbility: (G, ctx, ability) => {
      const result = G.loadout.abilities.filter(current => current.abilityName != ability.abilityName)
      G.loadout.abilities = result
    }
  },
  phases: {
    startingPhase: {
      start: true, //begin in this phase
      // next: 'dailyLife'
    }
  }
}