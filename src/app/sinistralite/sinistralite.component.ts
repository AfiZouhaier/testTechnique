import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface list{
  Value: string,
  ViewValue:String,
}

@Component({
  selector: 'app-sinistralite',
  templateUrl: './sinistralite.component.html',
  styleUrls: ['./sinistralite.component.css']
})
export class SINISTRALITEComponent {

  constructor(private router:Router){}
  submitForm(){
    this.router.navigate([""]);
  }

  chasseoui=false;
  chassenon=false;

  sinistreList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Sinistre DDE", ViewValue: "Sinistre DDE"},
    {Value: "Sinistre BDG ou BDV", ViewValue: "Sinistre BDG ou BDV"},
    {Value: "Sinistre vol ", ViewValue: "Sinistre vol "},
    {Value: "Sinistre CAT NAT dans les 5 dernieres années ou évènements climatiques", ViewValue: "Sinistre CAT NAT dans les 5 dernieres années ou évènements climatiques"},
    {Value: "Sinistre incendie ", ViewValue: "Sinistre incendie "},
    {Value: "Sinistre RC ", ViewValue: "Sinistre RC "},
    {Value: "Dommage éléctrique", ViewValue: "Dommage éléctrique"},
  ];

  chasse(event: any) {
    this.chasseoui=false;
    this.chassenon=false;
    const value = event.target.value;
    if (value == "Oui") this.chasseoui = true;
      else if(value == "Non") this.chassenon = true;
  }
}
