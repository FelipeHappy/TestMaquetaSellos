import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScanselloPage } from './scansello.page';

const routes: Routes = [
  {
    path: '',
    component: ScanselloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScanselloPageRoutingModule {}
