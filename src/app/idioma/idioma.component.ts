import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
// import {FormControl} from '@angular/forms';

export interface Idioma {
  value: string;
  viewValue: string;
  img:string;
}

@Component({
  selector: 'app-idioma',
  templateUrl: './idioma.component.html',
  styleUrls: ['./idioma.component.css']
})
export class IdiomaComponent implements OnInit {
  // selected = 'option1';
  // export class SelectFormExample {
  // selectedValue: string;
    selected = 'option1';

    idiomas: Idioma[] = [
      {value: 'es', viewValue: '- Español -', img:'../assets/img/iconos-idiomas/mexico.png'},
      {value: 'en', viewValue: '- English -', img:'../assets/img/iconos-idiomas/usa.png'}
    ];
  constructor(private translate: TranslateService) {

    }

    changeLanguage (lang) {
      this.translate.use(lang);
    }

  ngOnInit() {
  }

}
