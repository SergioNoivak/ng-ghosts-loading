import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ghost-container',
  templateUrl: './ghost-container.component.html',
  styleUrls: ['./ghost-container.component.css'],

})
export class GhostContainerComponent implements OnInit {

  @Input('width')
  width:number;

  @Input('delay')
  delay:number;

  @Input('height')
  height:number;


  @Input('circle')
  circle:boolean =false;





  constructor() {



  }

  ngOnInit() {


  }

}
