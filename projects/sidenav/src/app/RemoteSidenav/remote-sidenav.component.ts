import { Component, OnInit } from '@angular/core';
import { ApiService } from 'projects/services/api.service';
import { ShareUserDataService } from 'projects/share-user-data/src/public-api';

@Component({
  selector: 'remote-sidenav',
  templateUrl: './remote-sidenav.component.html',
  styleUrls: ['./remote-sidenav.component.css']
})
export class RemoteSidenavComponent implements OnInit {

  id:number
  name: string;
  email: string;
  constructor(service: ShareUserDataService,private api:ApiService) {
    console.log(service)
    this.id=service.id;
    this.getUserDetails(service.id);
   }


  ngOnInit(): void {
    
  //  this.id= this.data.getId();
  //  debugger
   
   console.log(this.id,this.name,this.email)
  }

  getUserDetails(id) {
      this.api.getById(id).subscribe(res => {
      this.id = res.id;
      this.name = res.name;
      this.email = res.email;
    })
  }


}
