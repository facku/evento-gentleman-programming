import { name as Faker } from "faker";

import Damage from "../stats/Damage";
import Life from "../stats/Life";
import Stamina from "../stats/Stamina";
import Defense from "../stats/Defense";

export const enum CLAN {
  WARRIOR = "Warrior",
  ASSASSIN = "Assassin",
  WIZZARD = "Wizzard",
  PRIEST = "Priest",
}

export default abstract class Character {
  private _clan: CLAN;
  private _name: string;
  private _life: Life;
  private _damage: Damage;
  private _stamina: Stamina;
  private _defense: Defense;
  private _icon: string;

  static randomStatValue(range: number[]): number {
    const [MIN, MAX] = range;
    return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
  }

  constructor(
    clan: CLAN,
    life: number,
    damage: number,
    stamina: number,
    defense: number
  ) {
    this._clan = clan;
    this._name = Faker.findName();
    this._life = new Life(life);
    this._damage = new Damage(damage);
    this._stamina = new Stamina(stamina);
    this._defense = new Defense(defense);
    this._icon = "";
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get life(): number {
    return this._life.value;
  }

  set life(value: number) {
    this._life.value = value;
  }

  get damage(): number {
    return this._damage.value;
  }

  set damage(value: number) {
    this._damage.value = value;
  }

  get stamina(): number {
    return this._stamina.value;
  }

  set stamina(value: number) {
    this._stamina.value = value;
  }

  get icon(): string {
    return this._icon;
  }

  set icon(icon: string) {
    this._icon = icon;
  }

  get defense(): number {
    return this._defense.value;
  }

  set defense(defense: number) {
    this._defense.value = defense;
  }

  get clan(): string {
    return this._clan;
  }
}
