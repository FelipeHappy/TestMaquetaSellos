import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NfccontainerPage } from './nfccontainer.page';

const routes: Routes = [
  {
    path: '',
    component: NfccontainerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NfccontainerPageRoutingModule {}
