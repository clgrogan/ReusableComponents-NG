import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.scss"],
  inputs: ["isFavorite"],
})
export class FavoriteComponent implements OnInit {
  @Input() favoriteSelected: boolean;
  isFavorite: boolean;
  constructor() {
    this.favoriteSelected = false;
    this.isFavorite = false;
    // this.toggleFavoriteSelected();
  }

  ngOnInit(): void {}
  toggleFavoriteSelected = () =>
    (this.favoriteSelected = !this.favoriteSelected);

  toggleIsFavorite = () => (this.isFavorite = !this.isFavorite);
}
