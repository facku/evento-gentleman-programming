import Character, { CLAN } from "./Character";
import Mana from "../stats/Mana";
import MagicDamage from "../stats/MagicDamage";

export default class Wizzard extends Character {
  private static RANGES = {
    life: [45, 66],
    damage: [10, 20],
    stamina: [10, 30],
    defense: [10, 15],
    mana: [30, 40],
    magicDamage: [60, 80], // Magic damage
  };

  private _mana: Mana;
  private _magicDamage: MagicDamage;

  constructor() {
    super(
      CLAN.WIZZARD,
      Character.randomStatValue(Wizzard.RANGES.life),
      Character.randomStatValue(Wizzard.RANGES.damage),
      Character.randomStatValue(Wizzard.RANGES.stamina),
      Character.randomStatValue(Wizzard.RANGES.defense)
    );

    this._mana = new Mana(Character.randomStatValue(Wizzard.RANGES.mana));

    this._magicDamage = new MagicDamage(
      Character.randomStatValue(Wizzard.RANGES.magicDamage)
    );

    this.icon = "🎇";
  }

  get mana(): number {
    return this._mana.value;
  }

  set nama(mana: number) {
    this._mana.value = mana;
  }

  get magicDamage(): number {
    return this._mana.value;
  }

  set magicDamage(value: number) {
    this._mana.value = value;
  }
}
