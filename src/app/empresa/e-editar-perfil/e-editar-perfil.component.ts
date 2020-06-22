import { Component, OnInit } from '@angular/core';

export interface Sector {
  value: string;
}

@Component({
  selector: 'app-e-editar-perfil',
  templateUrl: './e-editar-perfil.component.html',
  styleUrls: ['./e-editar-perfil.component.css']
})
export class EEditarPerfilComponent implements OnInit {

  sectores: Sector[] = [
    { value: 'Empresa de contabilidad'},
    { value: 'Publicidad / Relaciones públicas'},
    { value: 'Agricultura / Agricultura / Pesca'},
    { value: 'Aerolíneas / Aviación / Aeroespacial'},
    { value: 'Bebidas alcohólicas'},
    { value: 'Arquitectura / Planificación'},
    { value: 'Arte / Música / Museos'},
    { value: 'Automotriz / Bicicletas'},
    { value: 'BPO / KPO'},
    { value: 'Construcción / Ingeniería / Infraestructura'},
    { value: 'Electrónica de consumo'},
    { value: 'Bienes del cliente'},
    { value: 'Defensa / Militar'},
    { value: 'Marketing / Diseño / Animación'},
    { value: 'Educación'},
    { value: 'Energía'},
    { value: 'Servicios ambientales'},
    { value: 'Servicios de instalaciones'},
    { value: 'Moda / Cosméticos'},
    { value: 'Banca / Servicios financieros / Inversiones'},
    { value: 'Juegos de azar / casinos'},
    { value: 'Salud / Fitness / Deportes'},
    { value: 'Salud / Diagnóstico'},
    { value: 'Hotel / Viajes / Restaurantes'},
    { value: 'Industrial'},
    { value: 'IT / Software / Hardware'},
    { value: 'Seguro'},
    { value: 'El comercio internacional'},
    { value: 'Transporte / Logística / envío'},
    { value: 'Internet / Digital'},
    { value: 'Medios / Periodismo / Publicaciones'},
    { value: 'Ley / Poder Judicial'},
    { value: 'Consultoría de gestión'},
    { value: 'Minería / Metales'},
    { value: 'Sin ánimo de lucro'},
    { value: 'Gas de petróleo'},
    { value: 'Farmacéutico / Biotecnología / Químico'},
    { value: 'Sector público'},
    { value: 'Bienes raíces'},
    { value: 'Al por menor'},
    { value: 'Reclutamiento / Dotación de personal'},
    { value: 'Telecomunicaciones'},
    { value: 'Utilidades'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
