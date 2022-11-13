import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteSidenavComponent } from './remote-sidenav.component';

const routes: Routes = [  {
  path:'',component:RemoteSidenavComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteSidenavRoutingModule { }
