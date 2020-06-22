import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';
import * as $ from 'jquery';


import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-r-usuario',
  templateUrl: './r-usuario.component.html',
  styleUrls: ['./r-usuario.component.css']
})

export class RUsuarioComponent implements OnInit {

  usuario:Object={
    nombre:null,
    apellido:null,
    correo:null,
    password:null,
    acepta:false,
    fecha:null,
    telefono:null,
    ubicacion:null,
  }

  guardar(forma : NgForm ){
    console.log ("formulario posteado");
    console.log("ngform",forma);
    console.log("valor", forma.value)
  }

  parte2(forma2 : NgForm ){
    console.log ("formulario posteado2");
    console.log("ngform",forma2);
    console.log("valor", forma2.value)
  }

  // inicio de calendario
  startDate = new Date(1988, 0, 1);


  hide = true;

  title = 'Editar usuario';
  @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;

  widthPx = '250';
  heightPx = '250';
  imageUrl = '';
  currentImage: string;
  croppieImage: string;
  mostrar = true;

  public get imageToDisplay() {
    if (this.currentImage) { return this.currentImage; }
    if (this.imageUrl) { return this.imageUrl; }
    return `http://placehold.it/${this.widthPx}x${this.heightPx}`;
  }

  public get croppieOptions(): CroppieOptions {
    const opts: CroppieOptions = {};
    opts.viewport = {
      width: parseInt(this.widthPx, 10),
      height: parseInt(this.heightPx, 10),
      type: 'circle' ,
    };

    opts.boundary = {
      width: parseInt(this.widthPx, 10),
      height: parseInt(this.heightPx, 10)
    };
    opts.enforceBoundary = true;
    return opts;
  }

  ngOnInit() {
    this.currentImage = this.imageUrl;
    this.croppieImage = this.imageUrl;


        $(document).on('click','#btnContinuarRegistro',function(){
          $("#home-tab").removeClass('active');
          $("#home").removeClass('show');
          $("#home").removeClass('active');

          $("#profile-tab").addClass('active');
          $("#profile").addClass('show');
          $("#profile").addClass('active');
        });


          $(document).on('click','#btnContinuarDatosPersonales',function(){
            $("#profile-tab").removeClass('active');
            $("#profile").removeClass('show');
            $("#profile").removeClass('active');

            $("#contact-tab").addClass('active');
            $("#contact").addClass('show');
            $("#contact").addClass('active');
          });



    }



  ngOnChanges(changes: any) {
    if (this.croppieImage) { return; }
    if (!changes.imageUrl) { return; }
    if (!changes.imageUrl.previousValue && changes.imageUrl.currentValue) {
      this.croppieImage = changes.imageUrl.currentValue;
      }
    }



  // document.getElementById(id).style.display='block';

  // modalOpened() {
  //   if (this.croppieImage) {
  //     console.log('binding image to croppie');
  //     this.ngxCroppie.bind();
  //   }
  // }

  newImageResultFromCroppie(img: string) {
    this.croppieImage = img;
  }

  saveImageFromCroppie() {

    this.currentImage = this.croppieImage;
    // mostrar=false;
    alert(this.croppieImage);
    //programar la subida de la imagen al servidor
    this.mostrar=false;
  }

  cancelCroppieEdit() {
    this.mostrar=false;
    this.croppieImage = this.currentImage;
  }

  imageUploadEvent(evt: any) {
    this.mostrar=true;
    if (!evt.target) { return; }
    if (!evt.target.files) { return; }
    if (evt.target.files.length !== 1) { return; }
    const file = evt.target.files[0];
    if (file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/jpg') { return; }
    const fr = new FileReader();
    fr.onloadend = (loadEvent) => {
      this.croppieImage = fr.result;
    };
    fr.readAsDataURL(file);
  }




  constructor() { }




}
