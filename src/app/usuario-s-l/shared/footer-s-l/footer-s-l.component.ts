import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-footer-s-l',
  templateUrl: './footer-s-l.component.html',
  styleUrls: ['./footer-s-l.component.css']
})
export class FooterSLComponent implements OnInit {
  anio : number = new Date ().getFullYear();

  constructor(){
    
  }
  ngOnInit() {
  }

}
