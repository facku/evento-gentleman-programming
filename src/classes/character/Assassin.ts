import Character, { CLAN } from "./Character";

export default class Assassin extends Character {
  private static RANGES = {
    life: [45, 66],
    damage: [41, 70],
    stamina: [40, 70],
    defense: [10, 20],
  };

  constructor() {
    super(
      CLAN.ASSASSIN,
      Character.randomStatValue(Assassin.RANGES.life),
      Character.randomStatValue(Assassin.RANGES.damage),
      Character.randomStatValue(Assassin.RANGES.stamina),
      Character.randomStatValue(Assassin.RANGES.defense)
    );

    this.icon = "🗡";
  }
}
