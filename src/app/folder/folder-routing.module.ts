import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';
import {NameSoulComponent} from "./name-soul/name-soul.component";

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'soul',
    component: NameSoulComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
