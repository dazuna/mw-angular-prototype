import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-ayuda-usuario',
  templateUrl: './ayuda-usuario.component.html',
  styleUrls: ['./ayuda-usuario.component.css']
})
export class AyudaUsuarioComponent implements OnInit {

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
