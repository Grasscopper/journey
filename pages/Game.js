export const Game = {
  setup: () => (
    {
      loadout: {
        primary: null,
        secondary: null,
        support: null,
        item: null,
        abilities: []
      }
    }
  ),
  moves: {
    setPrimaryWeapon: (G, ctx, primary) => {
      G.loadout.primary = primary
    },
    removePrimaryWeapon: (G, ctx, primary) => {
      G.loadout.primary = null
    },
    setSecondaryWeapon: (G, ctx, secondary) => {
      G.loadout.secondary = secondary
    },
    removeSecondaryWeapon: (G, ctx, secondary) => {
      G.loadout.secondary = null
    },
    setSupportWeapon: (G, ctx, support) => {
      G.loadout.support = support
    },
    removeSupportWeapon: (G, ctx, support) => {
      G.loadout.support = null
    },
    setItem: (G, ctx, item) => {
      G.loadout.item = item
    },
    removeItem: (G, ctx, item) => {
      G.loadout.item = null
    },
    addAbility: (G, ctx, ability) => {
      let isEquipped = G.loadout.abilities.find(current => current.abilityName === ability.abilityName)
      if (isEquipped) { // ability already equipped
      }
      else {
        G.loadout.abilities = [ ...G.loadout.abilities, ability ]
      }
    },
    removeAbility: (G, ctx, ability) => {
      const result = G.loadout.abilities.filter(current => current.abilityName != ability.abilityName)
      G.loadout.abilities = result
    }
    //   team.map((currentCharacter) => {
    //           let trust = currentCharacter.trust
    //           if (character.id === currentCharacter.id) {
    //             trust += 20
    //           }
    //           return (
    //             {
    //               ...currentCharacter,
    //               trust: trust,
    //               hearts: styleHearts(trust)
    //             }
    // }
  },
  phases: {
    startingPhase: {
      start: true, //begin in this phase
      // next: 'dailyLife'
    }
  }
}