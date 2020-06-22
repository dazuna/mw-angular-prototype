import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visualizar-oferta',
  templateUrl: './visualizar-oferta.component.html',
  styleUrls: ['./visualizar-oferta.component.css']
})
export class VisualizarOfertaComponent implements OnInit {

  isDisabled: boolean;

  disabletextArea(){
    this.isDisabled = !this.isDisabled;
  }

  ngOnInit() {
    this.isDisabled = true;

  }

}
