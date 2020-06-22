import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-header-emp',
  templateUrl: './header-emp.component.html',
  styleUrls: ['./header-emp.component.css']
})
export class HeaderEmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#menu").on("click",function(){
         if( $(".sticky-top-2").css("top")=="128px")
         {
              $(".sticky-top-2").css("top", "80px");
         }
         else{
              $(".sticky-top-2").css("top", "128px");
         }
        });
      });
  }

}
