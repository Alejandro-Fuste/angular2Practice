import { Component } from "@angular/core";
import { availableSidesType } from "../../types/character";
import { StarWarsService } from "../star-wars.service";

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

  swService: StarWarsService;

  constructor(swService: StarWarsService) {
    this.swService = swService;
  }

  onSubmit(submittedForm: any) {
    const { name, side } = submittedForm.form.value;
    const { invalid } = submittedForm;

    if (invalid) return;

    this.swService.addCharacters(name, side);

    console.dir(submittedForm);
  }
}
