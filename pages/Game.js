export const Game = {
  setup: () => (
    {
      loadout: {
        primary: null,
        secondary: null,
        support: [],
        items: [],
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