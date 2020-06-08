import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from "events";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
  styles: [
    `
      .component-styles {
        font-size: 1.5rem;
      }
      .pad-left-1rem {
        padding-left: 1rem;
      }
    `,
  ],
  inputs: ["isFavorite"],
})
export class FavoriteComponent {
  @Input("favoriteSelected") favoriteSelected: boolean;
  @Output("change") clicky = new EventEmitter();

  isFavorite: boolean;
  constructor() {
    this.favoriteSelected = false;
    this.isFavorite = false;
  }
  toggleFavoriteSelected = () => {
    this.favoriteSelected = !this.favoriteSelected;
    this.clicky.emit("Passing a text value when change is raised");
    this.clicky.emit(["an", "array", "passed", this.favoriteSelected]);
    this.clicky.emit({ newValue: this.favoriteSelected }); //Passing an object
  };

  toggleIsFavorite = () => (this.isFavorite = !this.isFavorite);
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
