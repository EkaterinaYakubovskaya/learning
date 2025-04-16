import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfilePageComponent } from './profile-page/profile-page.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookCarouselComponent } from './bolt-carousel/bolt-carousel.component';

@NgModule({
  declarations: [ProfilePageComponent, BookCarouselComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: []
})
export class ProfileModule { }
