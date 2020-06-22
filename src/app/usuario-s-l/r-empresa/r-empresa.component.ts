import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCroppieComponent } from 'ngx-croppie';
import { CroppieOptions } from 'croppie';
import * as $ from 'jquery';

import { NgForm } from '@angular/forms';

export interface Pais {
  value: string;
  viewValue: string;
}
export interface Sector {
  value: string;
}



@Component({
  selector: 'app-r-empresa',
  templateUrl: './r-empresa.component.html',
  styleUrls: ['./r-empresa.component.css']
})

export class REmpresaComponent implements OnInit {

  empresa:Object={
    nombre_empresa:null,
    r_s:null,
    rfc:null,
    sitio_web:null,
    e_mail:null,
    password:null,
    acepta:false,
    tamano:null,
    fundada:null,
    sector:null,
    ubicacion:null,
    resumen:null
  }

  primer_parte(forma : NgForm ){
    console.log ("Aqui estoy no te hagas wey");
    console.log("ngform",forma);
    console.log("valor", forma.value)
  }

  segunda_parte(forma2 : NgForm ){
    console.log ("formulario posteado");
    console.log("ngform",forma2);
    console.log("valor", forma2.value)
  }

  startDate = new Date(1990, 0, 1);
  // selector
  paises: Pais[] = [
    {value: 'AF', viewValue: 'Afghanistan'},
    {value: 'AL', viewValue: 'Albania'},
    {value: 'DZ', viewValue: 'Algeria'},
    {value: 'AS', viewValue: 'American Samoa'},
    {value: 'AD', viewValue: 'Andorra'},
    {value: 'AG', viewValue: 'Angola'},
    {value: 'AI', viewValue: 'Anguilla'},
    {value: 'AG', viewValue: 'Antigua & Barbuda'},
    {value: 'AR', viewValue: 'Argentina'},
    {value: 'AA', viewValue: 'Armenia'},
    {value: 'AW', viewValue: 'Aruba'},
    {value: 'AU', viewValue: 'Australia'},
    {value: 'AT', viewValue: 'Austria'},
    {value: 'AZ', viewValue: 'Azerbaijan'},
    {value: 'BS', viewValue: 'Bahamas'},
    {value: 'BH', viewValue: 'Bahrain'},
    {value: 'BD', viewValue: 'Bangladesh'},
    {value: 'BB', viewValue: 'Barbados'},
    {value: 'BY', viewValue: 'Belarus'},
    {value: 'BE', viewValue: 'Belgium'},
    {value: 'BZ', viewValue: 'Belize'},
    {value: 'BJ', viewValue: 'Benin'},
    {value: 'BM', viewValue: 'Bermuda'},
    {value: 'BT', viewValue: 'Bhutan'},
    {value: 'BO', viewValue: 'Bolivia'},
    {value: 'BL', viewValue: 'Bonaire'},
    {value: 'BA', viewValue: 'Bosnia & Herzegovina'},
    {value: 'BW', viewValue: 'Botswana'},
    {value: 'BR', viewValue: 'Brazil'},
    {value: 'BC', viewValue: 'British Indian Ocean Ter'},
    {value: 'BN', viewValue: 'Brunei'},
    {value: 'BG', viewValue: 'Bulgaria'},
    {value: 'BF', viewValue: 'Burkina Faso'},
    {value: 'BI', viewValue: 'Burundi'},
    {value: 'KH', viewValue: 'Cambodia'},
    {value: 'CM', viewValue: 'Cameroon'},
    {value: 'CA', viewValue: 'Canada'},
    {value: 'IC', viewValue: 'Canary Islands'},
    {value: 'CV', viewValue: 'Cape Verde'},
    {value: 'KY', viewValue: 'Cayman Islands'},
    {value: 'CF', viewValue: 'Central African Republic'},
    {value: 'TD', viewValue: 'Chad'},
    {value: 'CD', viewValue: 'Channel Islands'},
    {value: 'CL', viewValue: 'Chile'},
    {value: 'CN', viewValue: 'China'},
    {value: 'CI', viewValue: 'Christmas Island'},
    {value: 'CS', viewValue: 'Cocos Island'},
    {value: 'CO', viewValue: 'Colombia'},
    {value: 'CC', viewValue: 'Comoros'},
    {value: 'CG', viewValue: 'Congo'},
    {value: 'CK', viewValue: 'Cook Islands'},
    {value: 'CR', viewValue: 'Costa Rica'},
    {value: 'CT', viewValue: "Cote D'Ivoire"},
    {value: 'HR', viewValue: 'Croatia'},
    {value: 'CU', viewValue: 'Cuba'},
    {value: 'CB', viewValue: 'Curacao'},
    {value: 'CY', viewValue: 'Cyprus'},
    {value: 'CZ', viewValue: 'Czech Republic'},
    {value: 'DK', viewValue: 'Denmark'},
    {value: 'DJ', viewValue: 'Djibouti'},
    {value: 'DM', viewValue: 'Dominica'},
    {value: 'DO', viewValue: 'Dominican Republic'},
    {value: 'TM', viewValue: 'East Timor'},
    {value: 'EC', viewValue: 'Ecuador'},
    {value: 'EG', viewValue: 'Egypt'},
    {value: 'SV', viewValue: 'El Salvador'},
    {value: 'GQ', viewValue: 'Equatorial Guinea'},
    {value: 'ER', viewValue: 'Eritrea'},
    {value: 'EE', viewValue: 'Estonia'},
    {value: 'ET', viewValue: 'Ethiopia'},
    {value: 'FA', viewValue: 'Falkland Islands'},
    {value: 'FO', viewValue: 'Faroe Islands'},
    {value: 'FJ', viewValue: 'Fiji'},
    {value: 'FI', viewValue: 'Finland'},
    {value: 'FR', viewValue: 'France'},
    {value: 'GF', viewValue: 'French Guiana'},
    {value: 'PF', viewValue: 'French Polynesia'},
    {value: 'FS', viewValue: 'French Southern Ter'},
    {value: 'GA', viewValue: 'Gabon'},
    {value: 'GM', viewValue: 'Gambia'},
    {value: 'GE', viewValue: 'Georgia'},
    {value: 'DE', viewValue: 'Germany'},
    {value: 'GH', viewValue: 'Ghana'},
    {value: 'GI', viewValue: 'Gibraltar'},
    {value: 'GB', viewValue: 'Great Britain'},
    {value: 'GR', viewValue: 'Greece'},
    {value: 'GL', viewValue: 'Greenland'},
    {value: 'GD', viewValue: 'Grenada'},
    {value: 'GP', viewValue: 'Guadeloupe'},
    {value: 'GU', viewValue: 'Guam'},
    {value: 'GT', viewValue: 'Guatemala'},
    {value: 'GN', viewValue: 'Guinea'},
    {value: 'GY', viewValue: 'Guyana'},
    {value: 'HT', viewValue: 'Haiti'},
    {value: 'HW', viewValue: 'Hawaii'},
    {value: 'HN', viewValue: 'Honduras'},
    {value: 'HK', viewValue: 'Hong Kong'},
    {value: 'HU', viewValue: 'Hungary'},
    {value: 'IS', viewValue: 'Iceland'},
    {value: 'IN', viewValue: 'India'},
    {value: 'ID', viewValue: 'Indonesia'},
    {value: 'IA', viewValue: 'Iran'},
    {value: 'IQ', viewValue: 'Iraq'},
    {value: 'IR', viewValue: 'Ireland'},
    {value: 'IM', viewValue: 'Isle of Man'},
    {value: 'IL', viewValue: 'Israel'},
    {value: 'IT', viewValue: 'Italy'},
    {value: 'JM', viewValue: 'Jamaica'},
    {value: 'JP', viewValue: 'Japan'},
    {value: 'JO', viewValue: 'Jordan'},
    {value: 'KZ', viewValue: 'Kazakhstan'},
    {value: 'KE', viewValue: 'Kenya'},
    {value: 'KI', viewValue: 'Kiribati'},
    {value: 'NK', viewValue: 'Korea North'},
    {value: 'KS', viewValue: 'Korea South'},
    {value: 'KW', viewValue: 'Kuwait'},
    {value: 'KG', viewValue: 'Kyrgyzstan'},
    {value: 'LA', viewValue: 'Laos'},
    {value: 'LV', viewValue: 'Latvia'},
    {value: 'LB', viewValue: 'Lebanon'},
    {value: 'LS', viewValue: 'Lesotho'},
    {value: 'LR', viewValue: 'Liberia'},
    {value: 'LY', viewValue: 'Libya'},
    {value: 'LI', viewValue: 'Liechtenstein'},
    {value: 'LT', viewValue: 'Lithuania'},
    {value: 'LU', viewValue: 'Luxembourg'},
    {value: 'MO', viewValue: 'Macau'},
    {value: 'MK', viewValue: 'Macedonia'},
    {value: 'MG', viewValue: 'Madagascar'},
    {value: 'MY', viewValue: 'Malaysia'},
    {value: 'MW', viewValue: 'Malawi'},
    {value: 'MV', viewValue: 'Maldives'},
    {value: 'ML', viewValue: 'Mali'},
    {value: 'MT', viewValue: 'Malta'},
    {value: 'MH', viewValue: 'Marshall Islands'},
    {value: 'MQ', viewValue: 'Martinique'},
    {value: 'MR', viewValue: 'Mauritania'},
    {value: 'MU', viewValue: 'Mauritius'},
    {value: 'ME', viewValue: 'Mayotte'},
    {value: 'MX', viewValue: 'Mexico'},
    {value: 'MI', viewValue: 'Midway'},
    {value: 'MD', viewValue: 'Moldova'},
    {value: 'MC', viewValue: 'Monaco'},
    {value: 'MN', viewValue: 'Mongolia'},
    {value: 'MS', viewValue: 'Montserrat'},
    {value: 'MA', viewValue: 'Morocco'},
    {value: 'MZ', viewValue: 'Mozambique'},
    {value: 'MM', viewValue: 'Myanmar'},
    {value: 'NA', viewValue: 'Nambia'},
    {value: 'NU', viewValue: 'Nauru'},
    {value: 'NP', viewValue: 'Nepal'},
    {value: 'AN', viewValue: 'Netherland Antilles'},
    {value: 'NL', viewValue: 'Netherlands (Holland, Europe)'},
    {value: 'NV', viewValue: 'Nevis'},
    {value: 'NC', viewValue: 'New Caledonia'},
    {value: 'NZ', viewValue: 'New Zealand'},
    {value: 'NI', viewValue: 'Nicaragua'},
    {value: 'NE', viewValue: 'Niger'},
    {value: 'NG', viewValue: 'Nigeria'},
    {value: 'NW', viewValue: 'Niue'},
    {value: 'NF', viewValue: 'Norfolk Island'},
    {value: 'NO', viewValue: 'Norway'},
    {value: 'OM', viewValue: 'Oman'},
    {value: 'PK', viewValue: 'Pakistan'},
    {value: 'PW', viewValue: 'Palau Island'},
    {value: 'PS', viewValue: 'Palestine'},
    {value: 'PA', viewValue: 'Panama'},
    {value: 'PG', viewValue: 'Papua New Guinea'},
    {value: 'PY', viewValue: 'Paraguay'},
    {value: 'PE', viewValue: 'Peru'},
    {value: 'PH', viewValue: 'Philippines'},
    {value: 'PO', viewValue: 'Pitcairn Island'},
    {value: 'PL', viewValue: 'Poland'},
    {value: 'PT', viewValue: 'Portugal'},
    {value: 'PR', viewValue: 'Puerto Rico'},
    {value: 'QA', viewValue: 'Qatar'},
    {value: 'ME', viewValue: 'Republic of Montenegro'},
    {value: 'RS', viewValue: 'Republic of Serbia'},
    {value: 'RE', viewValue: 'Reunion'},
    {value: 'RO', viewValue: 'Romania'},
    {value: 'RU', viewValue: 'Russia'},
    {value: 'RW', viewValue: 'Rwanda'},
    {value: 'NT', viewValue: 'St Barthelemy'},
    {value: 'EU', viewValue: 'St Eustatius'},
    {value: 'HE', viewValue: 'St Helena'},
    {value: 'KN', viewValue: 'St Kitts-Nevis'},
    {value: 'LC', viewValue: 'St Lucia'},
    {value: 'MB', viewValue: 'St Maarten'},
    {value: 'PM', viewValue: 'St Pierre & Miquelon'},
    {value: 'VC', viewValue: 'St Vincent & Grenadines'},
    {value: 'SP', viewValue: 'Saipan'},
    {value: 'SO', viewValue: 'Samoa'},
    {value: 'AS', viewValue: 'Samoa American'},
    {value: 'SM', viewValue: 'San Marino'},
    {value: 'ST', viewValue: 'Sao Tome & Principe'},
    {value: 'SA', viewValue: 'Saudi Arabia'},
    {value: 'SN', viewValue: 'Senegal'},
    {value: 'RS', viewValue: 'Serbia'},
    {value: 'SC', viewValue: 'Seychelles'},
    {value: 'SL', viewValue: 'Sierra Leone'},
    {value: 'SG', viewValue: 'Singapore'},
    {value: 'SK', viewValue: 'Slovakia'},
    {value: 'SI', viewValue: 'Slovenia'},
    {value: 'SB', viewValue: 'Solomon Islands'},
    {value: 'OI', viewValue: 'Somalia'},
    {value: 'ZA', viewValue: 'South Africa'},
    {value: 'ES', viewValue: 'Spain'},
    {value: 'LK', viewValue: 'Sri Lanka'},
    {value: 'SD', viewValue: 'Sudan'},
    {value: 'SR', viewValue: 'Suriname'},
    {value: 'SZ', viewValue: 'Swaziland'},
    {value: 'SE', viewValue: 'Sweden'},
    {value: 'CH', viewValue: 'Switzerland'},
    {value: 'SY', viewValue: 'Syria'},
    {value: 'TA', viewValue: 'Tahiti'},
    {value: 'TW', viewValue: 'Taiwan'},
    {value: 'TJ', viewValue: 'Tajikistan'},
    {value: 'TZ', viewValue: 'Tanzania'},
    {value: 'TH', viewValue: 'Thailand'},
    {value: 'TG', viewValue: 'Togo'},
    {value: 'TK', viewValue: 'Tokelau'},
    {value: 'TO', viewValue: 'Tonga'},
    {value: 'TT', viewValue: 'Trinidad & Tobago'},
    {value: 'TN', viewValue: 'Tunisia'},
    {value: 'TR', viewValue: 'Turkey'},
    {value: 'TU', viewValue: 'Turkmenistan'},
    {value: 'TC', viewValue: 'Turks & Caicos Is'},
    {value: 'TV', viewValue: 'Tuvalu'},
    {value: 'UG', viewValue: 'Uganda'},
    {value: 'UA', viewValue: 'Ukraine'},
    {value: 'AE', viewValue: 'United Arab Emirates'},
    {value: 'GB', viewValue: 'United Kingdom'},
    {value: 'US', viewValue: 'United States of America'},
    {value: 'UY', viewValue: 'Uruguay'},
    {value: 'UZ', viewValue: 'Uzbekistan'},
    {value: 'VU', viewValue: 'Vanuatu'},
    {value: 'VS', viewValue: 'Vatican City State'},
    {value: 'VE', viewValue: 'Venezuela'},
    {value: 'VN', viewValue: 'Vietnam'},
    {value: 'VB', viewValue: 'Virgin Islands (Brit)'},
    {value: 'VA', viewValue: 'Virgin Islands (USA)'},
    {value: 'WK', viewValue: 'Wake Island'},
    {value: 'WF', viewValue: 'Wallis & Futana Is'},
    {value: 'YE', viewValue: 'Yemen'},
    {value: 'ZR', viewValue: 'Zaire'},
    {value: 'ZM', viewValue: 'Zambia'},
    {value: 'ZW', viewValue: 'Zimbabwe'}
  ];

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

  // fin dia


  hide = true;

  favoriteSeason: string;
  seasons: string[] = ['Micro (1 a 30 empleados) ', 'Pequeña (31 a 100 empleados)', 'Mediana (101 a 500 empleados)', 'Grande (más de 501)'];

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
    $('#mayusculas').keyup(function() {
              $(this).val($(this).val().toUpperCase());
          });

    // $().val().toUpperCase();

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
