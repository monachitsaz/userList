import { SidenavComponent } from '../sidenav/sidenav.component';
import { User } from './../user-model/user-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'projects/shell/src/environments/environment';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/api.service';


@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent implements OnInit {

  @ViewChild('drawer') drawer:SidenavComponent;
  users: User[] = []
  displayedColumns: string[] = ['id', 'name', 'detail', 'edit', 'delete'];
  baseUrl: string = environment.apiUrl;

  constructor(private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.getList();
 
  }


  getList() {
    this.api.getList("User").subscribe((response: User[]) => {
      this.users = response
    })
  }

  editRow(id): void {
    this.route.navigate([`/user-edit/${id}`]);
  }

  deleteRow(id) {
    if (confirm("are you sure?")) {
        this.api.delete(id).subscribe(res=> { 
        })
        alert('The user has been deleted successfully');
        this.getList();

    }
  }
}

