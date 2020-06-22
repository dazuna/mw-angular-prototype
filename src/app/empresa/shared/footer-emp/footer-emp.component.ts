import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-emp',
  templateUrl: './footer-emp.component.html',
  styleUrls: ['./footer-emp.component.css']
})
export class FooterEmpComponent implements OnInit {
  anio : number = new Date().getFullYear();
  
  constructor() { }

  ngOnInit() {
  }

}
