import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserDetailsService {

  id: number;

  constructor(private api: ApiService) { }


}
