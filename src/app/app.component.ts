import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Fuste-Angular-Practice";
  rootName = "Alejandro Fuste";

  onNameChanged(newName: string) {
    this.rootName = newName;
  }
}
