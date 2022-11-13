import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ShareUserDataService {

  

  private privateId

  public get id(): number {
    // DELEGATION!
    return this.privateId;
  }
  constructor() { }

   
  
  public userDetail(id:number): void {
    // Authentication for **honest** users TM. (c) Manfred Steyer
    this.privateId = id;

  }
  
 

}
