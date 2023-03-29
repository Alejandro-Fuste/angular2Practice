import { Component, EventEmitter, Input, Output } from "@angular/core";
import { characterType } from "../../types/character";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent {
  @Input() characters: characterType[] = [];
  @Output() sideAssigned = new EventEmitter<{ name: string; side: string }>();

  onSideAssigned(charInfo: any) {
    this.sideAssigned.emit(charInfo);
  }
}
