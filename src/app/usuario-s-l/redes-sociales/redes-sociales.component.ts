import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/filter';
import * as $ from 'jquery';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css']
})
export class RedesSocialesComponent implements OnInit {

  // descripcionEmail = "Compartir la infografía del Centro de Ayuda";
  href:string = "";

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $('#div-redes').click(function(){
        $('#div-redes').toggleClass('rs-cerrar');
        $('span').toggleClass('icono-movil');
        $('#ver-esconder').toggleClass('ver-iconos');
        $('#bloquear').toggleClass('bloquear');
      });
    });
  }

ruta():string {
   let r = window.location.href;
   return r;
   }
}
