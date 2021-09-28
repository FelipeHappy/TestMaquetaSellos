import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NfccontainerPageRoutingModule } from './nfccontainer-routing.module';

import { NfccontainerPage } from './nfccontainer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    
    IonicModule,
    NfccontainerPageRoutingModule
  ],
  declarations: [NfccontainerPage]
})
export class NfccontainerPageModule {}
