import Character, { CLAN } from "./Character";

export default class Priest extends Character {
  private static RANGES = {
    life: [45, 66],
    damage: [10, 20],
    stamina: [10, 30],
    defense: [10, 20],
  };

  constructor() {
    super(
      CLAN.PRIEST,
      Character.randomStatValue(Priest.RANGES.life),
      Character.randomStatValue(Priest.RANGES.damage),
      Character.randomStatValue(Priest.RANGES.stamina),
      Character.randomStatValue(Priest.RANGES.defense)
    );

    this.icon = "💊";
  }
}
