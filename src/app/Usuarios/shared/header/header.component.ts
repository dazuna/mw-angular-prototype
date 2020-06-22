import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $("#btnuser").on("click",function(){
         if( $(".sticky-top-2").css("top")=="128px")
         {
              $(".sticky-top-2").css("top", "84px");
         }
         else{
              $(".sticky-top-2").css("top", "128px");
         }

        });
      });


  }

}
