import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { storeFeatureGameDetailRoutes } from "./lib.routes";
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    RouterModule.forChild(storeFeatureGameDetailRoutes)
  ],
  declarations: [GameDetailComponent]
})
export class StoreFeatureGameDetailModule {}
