import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'ghost-loading',
  templateUrl: "ng-ghosts-loading.component.html",
  styleUrls: ["./ng-ghosts-loading.component.css"]

})
export class NgGhostsLoadingComponent implements OnInit {
  @Input('width')
  width:number;

  @Input('delay')
  delay:number;

  @Input('height')
  height:number;


  @Input('circle')
  circle:boolean = false;

  @Input('animation')
  animation:boolean ;

  constructor() { }

  ngOnInit() {
  }

}
