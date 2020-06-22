import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-preguntasfrecuentes',
  templateUrl: './preguntasfrecuentes.component.html',
  styleUrls: ['./preguntasfrecuentes.component.css']
})
export class PreguntasfrecuentesComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).on('click','#ocultar',function(){
      $('.collapse').each(function(){
        if ($(this).hasClass('show')) {
            $(this).removeClass('show');
        }
      });
    });


    $(document).on('click','#mostrar',function(){
      $('.collapse').each(function(){
        if (!$(this).hasClass('show')) {
            $(this).addClass('show');
        }
      });
    });

  }
}
