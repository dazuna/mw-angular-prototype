import { Component } from '@angular/core';

@Component({
  selector: 'app-estadisticasempresa',
  templateUrl: './estadisticasempresa.component.html',
  styleUrls: ['./estadisticasempresa.component.css']
})
export class EstadisticasempresaComponent {

  // Grafica de lineas

  public lineChartData:Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Realizados'},
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Recibidos'}
  ];
  public lineChartLabels:Array<any> = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'];
  public lineChartOptions:any = {
    responsive: true
  };
  // public lineChartColors:Array<any> = [
  //   { // grey
  //     backgroundColor: 'rgba(148,159,177,0.2)',
  //     borderColor: 'rgba(148,159,177,1)',
  //     pointBackgroundColor: 'rgba(148,159,177,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(148,159,177,0.8)'
  //   },
  //   { // dark grey
  //     backgroundColor: 'rgba(77,83,96,0.2)',
  //     borderColor: 'rgba(77,83,96,1)',
  //     pointBackgroundColor: 'rgba(77,83,96,1)',
  //     pointBorderColor: '#fff',
  //     pointHoverBackgroundColor: '#fff',
  //     pointHoverBorderColor: 'rgba(77,83,96,1)'
  //   }
  // ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
  public randomize():void {
    let _lineChartData:Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }

  // Fin de la grafica de lineas

  // Doughnut
  public doughnutChartLabels:string[] = ['Completo', 'Faltante'];
  public doughnutChartData:number[] = [95, 5];
  public doughnutChartLabels2:string[] = ['Hitch', 'No Hitch'];
  public doughnutChartData2:number[] = [30, 70];
  public doughnutChartLabels3:string[] = ['Ofertas con Hitch', 'Ofertas que faltan de HItch'];
  public doughnutChartData3:number[] = [50, 50];
  public doughnutChartType:string = 'doughnut';

  // // events

  public doughnutChartColors1:Array<any> = [
    { // grey
      backgroundColor: ['#4cd0f0','#c0c0c0']
    }
  ];

  public doughnutChartColors2:Array<any> = [
    { // grey
      backgroundColor: ['#9fd569','#c0c0c0']
    }
  ];

  public doughnutChartColors3:Array<any> = [
    { // grey
      backgroundColor: ['#ac92eb','#c0c0c0']
    }
  ];

  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  // Fin de la grafica de donas

}
