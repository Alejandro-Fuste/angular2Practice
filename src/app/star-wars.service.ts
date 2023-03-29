import { characterType } from "../types/character";

export class StarWarsService {
  private characters: characterType[] = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];

  getCharacters(chosenList: string) {
    if (chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo: any) {
    const position = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[position].side = charInfo.side;
  }
}
