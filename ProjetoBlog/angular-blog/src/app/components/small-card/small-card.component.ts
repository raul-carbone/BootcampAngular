import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  constructor() { }
  @Input()
  photoCover:string = ""

  @Input()
  cardTitle:string = ""

  @Input()
  Id:string = ""
  
  ngOnInit(): void {
  }

}
