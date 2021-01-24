import Warrior from "../character/Warrior";
import Assassin from "../character/Assassin";
import Wizzard from "../character/Wizzard";
import Priest from "../character/Priest";

export default abstract class CharacterFactory {
  static random(): Warrior | Wizzard | Assassin | Priest {
    // Es lo mismo que Character.randomStatValue()
    const index = Warrior.randomStatValue([0, 3]);

    switch (index) {
      case 1:
        return new Assassin();
      case 2:
        return new Wizzard();
      case 3:
        return new Priest();
      default:
        return new Warrior();
    }
  }
}
