import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {
  money: string[]=[
    'USD - Dolares Americanos', 'MXN - Pesos Mexicanos', 'CAD - Dolares Canadienses', 'EUR - Euros', 'GBP - Libras', 'YEN - Yen', 'YUAN - Yuan'
  ];
    hide = true;
    
  constructor() { }

  ngOnInit() {
  }

}
