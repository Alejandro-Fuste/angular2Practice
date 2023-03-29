import { Component } from "@angular/core";
import { characterType } from "../../types/character";

@Component({
  selector: "app-tabs",
  templateUrl: "./tabs.component.html",
  styleUrls: ["./tabs.component.css"],
})
export class TabsComponent {
  characters: characterType[] = [
    { name: "Luke Skywalker", side: "" },
    { name: "Darth Vader", side: "" },
  ];
  chosenList: string = "all";

  onChoose(side: string) {
    this.chosenList = side;
  }

  getCharacters() {
    if (this.chosenList === "all") {
      return this.characters.slice();
    }
    return this.characters.filter((char) => {
      return char.side === this.chosenList;
    });
  }
}
