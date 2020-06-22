import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import * as $ from 'jquery';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

export interface AC {
  name: string;
}

export interface H {
  name: string;
}

@Component({
  selector: 'app-u-editar-perfil',
  templateUrl: './u-editar-perfil.component.html',
  styleUrls: ['./u-editar-perfil.component.css']
})
export class UEditarPerfilComponent implements OnInit {
startDate = new Date(1990, 0, 1);
// arreglo de select
  states: string[] = [
  'Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bonaire', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Indian Ocean Ter', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Canada', 'Canary Islands', 'Cape Verde', 'Cayman Islands', 'Central African Republic', 'Chad', 'Channel Islands', 'Chile', 'China', 'Christmas Island', 'Cocos Island', 'Colombia', 'Comoros', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote DIvoire', 'Croatia', 'Cuba', 'Curacao', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Guiana', 'French Polynesia', 'French Southern Ter', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Great Britain', 'Greece', 'Greenland', 'Grenada', 'Guadeloupe', 'Guam', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Hawaii', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea North', 'Korea South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malaysia', 'Malawi', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Martinique', 'Mauritania', 'Mauritius', 'Mayotte', 'Mexico', 'Midway Islands', 'Moldova', 'Monaco', 'Mongolia', 'Montserrat', 'Morocco', 'Mozambique', 'Myanmar', 'Nambia', 'Nauru', 'Nepal', 'Netherland Antilles', 'Netherlands (Holland,  Europe)', 'Nevis', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Niue', 'Norfolk Island', 'Norway', 'Oman', 'Pakistan', 'Palau Island', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Pitcairn Island', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Republic of Montenegro', 'Republic of Serbia', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'St Barthelemy', 'St Eustatius', 'St Helena', 'St Kitts-Nevis', 'St Lucia', 'St Maarten', 'St Pierre &amp; Miquelon', 'St Vincent &amp; Grenadines', 'Saipan', 'Samoa', 'Samoa American', 'San Marino', 'Sao Tome &amp; Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Tahiti', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tokelau', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos Is', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City State', 'Venezuela', 'Vietnam', 'Virgin Islands (Brit)', 'Virgin Islands (USA)', 'Wake Island', 'Wallis &amp; Futana Is','Yemen', 'Zaire', 'Zambia', 'Zimbabwe'
];
// fin de select


// chips aptitudes y certificaciones
 visible = true;
 selectable = true;
 removable = true;
 addOnBlur = true;

 readonly separatorKeysCodes: number[] = [ENTER, COMMA];
 aptitudescertficaciones: AC[] = [
   {name: 'Ing Sistemas'},
   {name: 'Angulas'},
   {name: 'Css'},
 ];

 add(event: MatChipInputEvent): void {
   const input = event.input;
   const value = event.value;

   // Add our ac
   if ((value || '').trim()) {
     this.aptitudescertficaciones.push({name: value.trim()});
   }

   // Reset the input value
   if (input) {
     input.value = '';
   }
 }

 remove(ac: AC): void {
   const index = this.aptitudescertficaciones.indexOf(ac);

   if (index >= 0) {
     this.aptitudescertficaciones.splice(index, 1);
   }
 }
 //fin de chipList ac

 // chips hobbies

  // visible = true;
  // selectable = true;
  remover = true;
  // addOnBlur2 = true;
  readonly separatorKeysCodes2: number[] = [ENTER, COMMA];

  hobbies: H[] = [
    {name: 'futbol'},
    {name: 'Basquetball'},
    {name: 'Tenis'},
  ];

  anadir(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our ac
    if ((value || '').trim()) {
      this.hobbies.push({name: value.trim()});
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  eliminar(h: H): void {
    const index = this.hobbies.indexOf(h);

    if (index >= 0) {
      this.hobbies.splice(index, 1);
    }
  }
  //fin de chipList

 // slider
formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 100) {
      return Math.round(value / 100) + '%';
    }

    return value;
  }
// fin de slider
constructor() { }

    ngOnInit() {

      // range-field
      $(document).ready(function(){
        $("#idioma").change(function(){
          var newval=$(this).val();
          $("#slidernumberidioma").text(newval+" %");
        });

        $("#softaware").change(function(){
          var newval=$(this).val();
          $("#slidernumbersoftware").text(newval+" %");
        });

        $('#btn').on('click', function() {
            var div_copy = $('#dv').clone();
            div_copy.children().val("");//para quitar el valor
            $('.container_div').append(div_copy);
        });

        $('#btn-experiencia').on('click', function() {
            var div_copy = $('#tabla-experiencia').clone();
            div_copy.children().val("");//para quitar el valor
            $('.contenido-experiencia').append(div_copy);
        });

        $('#btn-software').on('click', function() {
            var div_copy = $('#tabla-software').clone();
            div_copy.children().val("");//para quitar el valor
            $('.contenido-software').append(div_copy);
        });

        $('#btn-idioma').on('click', function() {
            var div_copy = $('#tabla-idioma').clone();
            div_copy.children().val("");//para quitar el valor
            $('.contenido-software').append(div_copy);
        });

        $('#btn-correo').on('click', function() {
            var div_copy = $('#tabla-correo').clone();
            div_copy.children().val("");//para quitar el valor
            $('.contenido-correo').append(div_copy);
        });

      });

    }

}
