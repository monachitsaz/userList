import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./RemoteSidenav/remote-sidenav.module').then(m => m.RemoteSidenavModule)
  // },
  {
    path: 'user-detail/:id',
    loadChildren: () => import('./RemoteSidenav/remote-sidenav.module').then(m => m.RemoteSidenavModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
