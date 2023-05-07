import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    AboutComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MatCardModule,
    MatIconModule
  ]
})
export class AboutModule { }
