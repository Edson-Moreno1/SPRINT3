import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ListGridComponent } from './components/list-grid/list-grid.component';
import { HomeComponent } from "./pages/home/home.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CardComponent } from "./components/card/card.component";
import { CardsContainerComponent } from "./components/cards-container/cards-container.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavBarComponent, ListGridComponent, HomeComponent, FooterComponent, CardComponent, CardsContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SPRINT3';
}
