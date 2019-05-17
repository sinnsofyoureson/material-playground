import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-sidenav2',
  templateUrl: './sidenav2.component.html',
  styleUrls: ['./sidenav2.component.sass']
})
export class Sidenav2Component implements OnInit {

  mode = new FormControl('over');
  
  constructor() { }

  ngOnInit() {
  }

}
