import { Injectable } from "@angular/core";
import { characterType } from "../types/character";
import { LogService } from "./log.service";

@Injectable()
export class StarWarsService {
  private characters: characterType[] = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];

  private logService: LogService;

  constructor(logSer: LogService) {
    this.logService = logSer;
  }

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
    this.logService.writeLog(
      `Changed side of ${charInfo.name} to new side: ${charInfo.side}`
    );
  }

  addCharacters(name: string, side: string) {
    const newCharacter: characterType = { name, side };
    this.characters.push(newCharacter);
  }
}
