import { Component } from "@angular/core";
import { FavoriteChangedEventArgs } from "./favorite/favorite.component";

// moved the interface to the FavoriteComponent so that all consumers of the event can access
// interface FavoriteChangedEventArgs {
//   newValue: boolean;
// }

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  post = { title: "Title", favoriteSelected: true };

  // Method we are calling when the custom event 'change' is raised.
  // Effectively this is a subscriber or consumer of the event.
  onFavoriteChanged(favoriteSelected: FavoriteChangedEventArgs) {
    console.log(
      "Favorite Changed: onFavoriteChanged() method called!",
      favoriteSelected,
      favoriteSelected.newValue
    );
  }
}
