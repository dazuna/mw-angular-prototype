import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { FormControl, Validators } from '@angular/forms';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  permisos:string;
  color: string;
  correo:string;
}

// export interface administrador {
//   id: string;
//   name: string;
// }
//
// export interface miembros {
//   id: string;
//   name: string;
// }



// const ADMI: string[] =[''];

/** Constants used to fill up our data base. */
const COLORS: string[] = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];

const NAMES: string[] = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

const PERMISOS: string[] = ['Root', 'Administrador', 'Usuario'];

const CORREO: string[] = ['adrian_w600@hotmail.com', 'pedro@gmail.com', 'pancho@gmail.com', 'panfilo@gmail.com'];

@Component({
  selector: 'app-configuacion-empresa',
  templateUrl: './configuracion-empresa.component.html',
  styleUrls: ['./configuracion-empresa.component.css']
})

export class ConfiguracionEmpresaComponent implements OnInit {
  hide = true;

  fecha : number = new Date().getFullYear();

  emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);

    controlusuario = new FormControl('', [
        Validators.required,
        Validators.email,
      ]);


  displayedColumns: string[] = ['id', 'progress', 'permisos', 'color'];

  displayedColumns2: string[] = ['id', 'correo'];

  miembros: string[] = ['id', 'correo'];


  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  const permisos =  PERMISOS[Math.round(Math.random() * (PERMISOS.length - 1))];

  const correo =  CORREO[Math.round(Math.random() * (CORREO.length - 1))];

  return {
    id: id.toString(),

    name: name,

    correo: correo,

    progress: Math.round(Math.random() * 100).toString(),

    permisos: permisos,

    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };



}
