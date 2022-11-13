import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserAddComponent } from './user-add/user-add.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/users',pathMatch: 'full'
  },
  {
    path: 'users', component: UsersComponent,

  },
  {
    path: 'user-add', component: UserAddComponent,

  },
  {
    path: 'user-edit/:id', component: UserAddComponent,

  },
    {
    path: 'user-detail/:id',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:3000/remoteEntry.js',
        exposedModule: './Module',
      }).then(m => m.RemoteSidenavModule),
  },
  // {
  //   path: 'user-detail/:id',
  //   loadChildren:()=>import('sidenav/Module').then(m=>m.RemoteSidenavModule)
  //  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
