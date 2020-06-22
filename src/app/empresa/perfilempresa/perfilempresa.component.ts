import { Component, OnInit,ViewChild } from '@angular/core';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';

@Component({
  selector: 'app-perfilempresa',
  templateUrl: './perfilempresa.component.html',
  styleUrls: ['./perfilempresa.component.css']
})
export class PerfilempresaComponent implements OnInit {

  @ViewChild('ngxCroppie') ngxCroppie: NgxCroppieComponent;

  widthPx = '250';
  heightPx = '250';
  imageUrl = '';
  currentImage: string;
  croppieImage: string;
  mostrar:boolean=true;

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
      type:"circle",
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
