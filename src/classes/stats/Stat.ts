export default abstract class Stat {
  constructor(private _value: number) {}
  get value() {
    return Number(this._value);
  }

  set value(val: number) {
    this._value = Number(val);
  }
}
