import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ofertas-guardadas',
  templateUrl: './ofertas-guardadas.component.html',
  styleUrls: ['./ofertas-guardadas.component.css']
})
export class OfertasGuardadasComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
       $("#myModal").modal();
    });
  }

}
