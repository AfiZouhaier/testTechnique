import { Component, OnInit } from '@angular/core';
interface list{
  Value: string,
  ViewValue:string,
}
@Component({
  selector: 'app-nouveau-composant',
  templateUrl: './nouveau-composant.component.html',
  styleUrls: ['./nouveau-composant.component.css']
})
export class NouveauComposantComponent implements OnInit {

  string: boolean;
  list: list[] = [
    {Value:"Choisir un element", ViewValue: "Choisir un element"},
    {Value:"non", ViewValue: "non"},
    {Value:"oui", ViewValue: "oui"},
  ]
  constructor() {
    this.string = false;
  }

  ngOnInit(): void {
  }
}
