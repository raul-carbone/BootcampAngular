import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {

  estilo:string = "enable"

  corFundo:string = ""
  corDaFonte:string = ""

  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true

 
  constructor() { }

  adicionarLista(){
    this.lista.push(this.item)
  }

  ngOnInit(): void {
  }

  trocar(){
    if(this.estilo === "disable"){
      this.estilo = "enable"
      this.corFundo = "black"
      this.corDaFonte = "white"
    }else{
      this.estilo = "disable"
      this.corFundo = "red"
      this.corDaFonte = "white"
    }
  }

}
