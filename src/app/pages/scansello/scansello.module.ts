import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScanselloPageRoutingModule } from './scansello-routing.module';

import { ScanselloPage } from './scansello.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScanselloPageRoutingModule
  ],
  declarations: [ScanselloPage]
})
export class ScanselloPageModule {}
