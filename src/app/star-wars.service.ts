import { Injectable } from "@angular/core";
import { characterType } from "../types/character";
import { LogService } from "./log.service";
import { Subject } from "rxjs";

@Injectable()
export class StarWarsService {
  private characters: characterType[] = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];

  private logService: LogService;

  charactersChanged = new Subject<void>();

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
    this.charactersChanged.next();
    this.logService.writeLog(
      `Changed side of ${charInfo.name} to new side: ${charInfo.side}`
    );
  }

  addCharacters(name: string, side: string) {
    const position = this.characters.findIndex((char) => {
      return char.name === name;
    });

    if (position !== -1) return;

    const newCharacter: characterType = { name, side };
    this.characters.push(newCharacter);
  }
}
