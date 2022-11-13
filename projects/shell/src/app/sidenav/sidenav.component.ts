import { UserDetailsService } from './../../../../services/user-details.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';
import { ShareUserDataService } from 'projects/share-user-data/src/public-api';

@Component({
  selector: 'sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  id: number;
  name: string;
  email: string;
  showFiller = false;
  constructor(private router: Router,private data:ShareUserDataService) { }
  @ViewChild('drawer') drawer: MatDrawer

  ngOnInit(): void {
  }


  toggle(id: number) {
    this.data.userDetail(id);

    this.drawer.toggle();
    // this.router.navigate(['user-detail', id]);
    // this.router.navigateByUrl(`/user-detail/${id}`);
    // this.api.getById(id).subscribe(res => {
    //   this.id = res.id;
    //   this.name = res.name;
    //   this.email = res.email;
    // })
    
  }


}
