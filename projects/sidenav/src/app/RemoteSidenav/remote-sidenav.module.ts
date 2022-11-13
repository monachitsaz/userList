import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RemoteSidenavRoutingModule } from './remote-sidenav-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RemoteSidenavComponent } from './remote-sidenav.component';


@NgModule({
  declarations: [RemoteSidenavComponent],
  imports: [
    CommonModule,
    RemoteSidenavRoutingModule,
    HttpClientModule
  ],
  exports:[]
})
export class RemoteSidenavModule { }
