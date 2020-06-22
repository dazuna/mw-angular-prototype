import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


/** Error when invalid control is dirty, touched, or submitted. */

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {

  tabla:Object={
    correo:null,
    password:null,
  }

  guardar(accion : NgForm ){
    console.log ("esto es un prueba");
    console.log("ngform", accion);
    console.log("valor", accion.value)
  }

  public number: number = 10000000;
  hide = true;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

  constructor(){
  }

  ngOnInit() {
    // VIDEO
    var videoNormal = $('.video-normal');
    if (screen.width < 650) {
      videoNormal.prop("muted", true);
      videoNormal.prop("preload", 'auto');
      videoNormal.prop("controls", true);
      videoNormal.trigger('pause');

    } else {
      videoNormal.prop("loop", true);
      videoNormal.prop("muted", true);
      videoNormal.prop("preload", 'auto');
      videoNormal.prop("controls", true);
      videoNormal.trigger('play');
    }
    // $("#video1").modalVideo();
    $( "#msn" ).click(function() {
      $( "#telefono" ).slideToggle();
    });

    $( "#btn-mail" ).click(function() {
      $( "#mail" ).slideToggle();
    });

  }

}
