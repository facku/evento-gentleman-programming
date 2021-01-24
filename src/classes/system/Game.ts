import CharacterFactory from "./CharacterFactory";

export default class Game {
  constructor(
    private playerOne = CharacterFactory.random(),
    private playerTwo = CharacterFactory.random()
  ) {
    console.log(playerOne, playerTwo);
  }
}
