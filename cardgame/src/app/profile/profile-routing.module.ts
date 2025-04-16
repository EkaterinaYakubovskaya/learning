import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { BookCarouselComponent } from './bolt-carousel/bolt-carousel.component';


const routes: Routes = [
  { path: '', component: ProfilePageComponent },
  { path: 'bolt', component: BookCarouselComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
