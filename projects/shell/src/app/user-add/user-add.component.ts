import { ApiService } from '../../../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './../user-model/user-model';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})

export class UserAddComponent implements OnInit {

  formGroup: FormGroup;
  user: User;
  id: number = 0;

  constructor(private activateRoute: ActivatedRoute,
    private api: ApiService, private route: Router) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(param => {

      if (param['id']) {
        this.id = +param['id'];
        this.loadForm();
      }
      else {
        this.id = 0;
      }

    })

    this.formGroup = new FormGroup({
      id: new FormControl(0),
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.maxLength(128)])
    })
  }


  loadForm() {
    this.api.getById(this.id).subscribe({
      next: (res: User) => {
        this.formGroup.controls['id'].setValue(this.id);
        this.formGroup.controls['name'].setValue(res.name);
        this.formGroup.controls['email'].setValue(res.email)
      },
      error: (err: ErrorEvent) => { alert(err) }
    })
  }

  update(data): Observable<any> {
    return this.api.update(data);
  }

  submitForm() {
    if (this.formGroup.valid) {
      let infoData = this.formGroup.value;
      infoData.id = this.id;
      if (this.id == 0 ) {
        this.api.create(infoData).subscribe({
          next: (res) => {
            alert(res);
            this.formGroup.reset()
          },
          error: (err: ErrorEvent) => { alert(err.message) }
        })
      }
      else {
        this.update(infoData).subscribe({
          next: (res) => {
            alert(res);
            this.route.navigate(['/users']);
          },
          error: (err: ErrorEvent) => { alert(err.message); }
        })
      }
    }
    else {
      alert("Fill out the form carefully")
    }
  }

  cancel() {
    this.formGroup.reset();
  }

}
