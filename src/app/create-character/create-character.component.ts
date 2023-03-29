import { Component } from "@angular/core";
import { availableSidesType } from "../../types/character";

@Component({
  selector: "app-create-character",
  templateUrl: "./create-character.component.html",
  styleUrls: ["./create-character.component.css"],
})
export class CreateCharacterComponent {
  availableSides: availableSidesType[] = [
    { display: "None", value: "" },
    { display: "Light", value: "light" },
    { display: "Dark", value: "dark" },
  ];

  onSubmit(submittedForm: any) {
    console.log(submittedForm);
  }
}
