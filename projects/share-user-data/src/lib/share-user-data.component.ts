import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-shareUserData',
  template: `
    <p>
      {{id}}
    </p>
  `,
  styles: [
  ]
})
export class ShareUserDataComponent implements OnInit {
  id:number
  constructor() { }

  ngOnInit(): void {
  }


}
