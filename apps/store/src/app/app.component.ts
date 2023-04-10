import { MatCardModule } from '@angular/material/card';
import { Component } from '@angular/core';
import { getAllGames } from '../fake-api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StoreUiSharedModule } from "@bg-hoard/store/ui-shared";

@Component({
  selector: 'bg-hoard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ MatCardModule, RouterModule, CommonModule, StoreUiSharedModule ]
})
export class AppComponent {
  title = 'Board Game Hoard';
  games = getAllGames();
}
