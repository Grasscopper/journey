export const Game = {
  setup: () => (
    {
      loadout: {
        primary: {},
        secondary: {},
        support: [],
        items: [],
        abilities: []
      }
    }
  ),
  moves: {
    setPrimary: (G, ctx, primary) => {
      G.loadout.primary = primary  
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