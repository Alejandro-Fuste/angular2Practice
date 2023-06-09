import { Component, Input, OnDestroy } from "@angular/core";
import { characterType } from "../../types/character";
import { ActivatedRoute } from "@angular/router";
import { StarWarsService } from "../star-wars.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"],
})
export class ListComponent implements OnDestroy {
  @Input() characters: characterType[] = [];
  activatedRoute: ActivatedRoute;
  swService: StarWarsService;
  loadedSide = "all";
  subscription!: Subscription;

  constructor(activatedRoute: ActivatedRoute, swService: StarWarsService) {
    this.activatedRoute = activatedRoute;
    this.swService = swService;
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.characters = this.swService.getCharacters(params["side"]);
      this.loadedSide = params["side"];
    });

    this.subscription = this.swService.charactersChanged.subscribe(() => {
      this.characters = this.swService.getCharacters(this.loadedSide);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
