import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
// import { EventEmitter } from "events";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
  inputs: ["isFavorite"],
})
export class FavoriteComponent implements OnInit {
  @Input("favoriteSelected") favoriteSelected: boolean;
  @Output() change = new EventEmitter();

  isFavorite: boolean;
  constructor() {
    this.favoriteSelected = false;
    this.isFavorite = false;
  }

  ngOnInit(): void {}
  toggleFavoriteSelected = () => {
    this.favoriteSelected = !this.favoriteSelected;
    this.change.emit("Passing a text value when change is raised");
    this.change.emit(["an", "array", "passed", this.favoriteSelected]);
    this.change.emit({ newValue: this.favoriteSelected }); //Passing an object
  };

  toggleIsFavorite = () => (this.isFavorite = !this.isFavorite);
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
}
