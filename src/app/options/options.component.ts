import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface list{
  Value: string,
  ViewValue:String,
}

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  constructor(private router:Router){
  }

  ouiNonList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Oui", ViewValue: "Oui"},
    {Value: "Non", ViewValue: "Non"},
  ];



  chasseoui=false;
  chassenon=false;
  accueilliroui=false;
  accueillirnon=false;
  scolaireoui=false;
  scolairenon=false;






  submitForm(){
    this.router.navigate([""]);
  }
  chasse(event: any) {
    this.chasseoui=false;
    this.chassenon=false;
    const value = event.target.value;
    if (value == "Oui") this.chasseoui = true;
      else if(value == "Non") this.chassenon = true;
  }

  accueillir(event: any) {
    this.accueilliroui=false;
    this.accueillirnon=false;
    const value = event.target.value;
    if (value == "Oui") this.accueilliroui = true;
      else if(value == "Non") this.accueillirnon = true;
  }

  scolaire(event: any) {
    this.scolaireoui=false;
    this.scolairenon=false;
    const value = event.target.value;
    if (value == "Oui") this.scolaireoui = true;
      else if(value == "Non") this.scolairenon = true;
  }

}
