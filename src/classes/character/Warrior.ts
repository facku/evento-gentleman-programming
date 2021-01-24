import Character, { CLAN } from "./Character";

export default class Warrior extends Character {
  private static RANGES = {
    life: [90, 120],
    damage: [20, 40],
    stamina: [10, 30],
    defense: [18, 30],
  };

  constructor() {
    super(
      CLAN.WARRIOR,
      Character.randomStatValue(Warrior.RANGES.life),
      Character.randomStatValue(Warrior.RANGES.damage),
      Character.randomStatValue(Warrior.RANGES.stamina),
      Character.randomStatValue(Warrior.RANGES.defense)
    );

    this.icon = "⚔";
  }
}
