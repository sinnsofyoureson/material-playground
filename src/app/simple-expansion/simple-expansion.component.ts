import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-expansion',
  templateUrl: './simple-expansion.component.html',
  styleUrls: ['./simple-expansion.component.sass']
})
export class SimpleExpansionComponent implements OnInit {

  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
