import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then(x => x.ProfileModule)},
  { path: 'game', loadChildren: () => import('./game/game.module').then(x => x.GameModule)},
  { path: '**', redirectTo: 'profile' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
