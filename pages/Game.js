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
    }
    // nextDay: (G, ctx) => {
    //   G.time = 3
    //   G.day++
    // },
    // trainAtGym: (G, ctx) => {
    //   if (G.time > 0) {
    //     G.player = {
    //       ...G.player,
    //       attack: G.player.attack + 1
    //     }
    //     // G.player.attack++;
    //     G.time--;
    //   }
    // }
  },
  phases: {
    startingPhase: {
      start: true, //begin in this phase
      // next: 'dailyLife'
    }
  }
}