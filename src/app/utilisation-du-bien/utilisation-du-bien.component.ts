import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface list{
  Value: string,
  ViewValue:String,
}

@Component({
  selector: 'app-utilisation-du-bien',
  templateUrl: './utilisation-du-bien.component.html',
  styleUrls: ['./utilisation-du-bien.component.css']
})
export class UtilisationDuBienComponent {
  
  constructor(private router:Router){
  }
  ouiNonList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Oui", ViewValue: "Oui"},
    {Value: "Non", ViewValue: "Non"},

  ];
  logementList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Le logement dans son intégralité", ViewValue: "Le logement dans son intégralité"},
    {Value: "partie", ViewValue: "Une partie seulement"},
    {Value: "Réception", ViewValue: "Réception"},
    {Value: "AirBnB", ViewValue: "AirBnB"},
    {Value: "Chambre d'hôtes", ViewValue: "Chambre d'hôtes"},
    {Value: "Autre", ViewValue: "Autre"},
  ]

  naturePerList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Période consécutive", ViewValue: "Période consécutive"},
    {Value: "Période non-consécutive", ViewValue: "Période non-consécutive"},
  ]

  partieList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Sous le même toît", ViewValue: "Sous le même toît"},
    {Value: "Dans un bâtiment disctinct", ViewValue: "Dans un bâtiment disctinct"},
  ]

  activiteList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Maternelle", ViewValue: "Assistante Maternelle"},
    {Value: "Teletravail", ViewValue: "Télétravail"},
    {Value: "Autre", ViewValue: "Autre"},
  ]
  frequenceList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Occasionnellement", ViewValue: "Occasionnellement"},
    {Value: "Fréquemment", ViewValue: "Fréquemment"},
  ]
  typologieList:list[]=[
    {Value: "Choisir un element", ViewValue: "Choisir un element"},
    {Value: "Matériel 1", ViewValue: "Matériel 1"},
    {Value: "Matériel 2", ViewValue: "Matériel 2"},
    {Value: "Autre", ViewValue: "Autre"},
  ]


  bienAss=false;
  bienNonAss=false;
  loueroui=false;
  nonLouer=false;
  partie=false;
  autreLocation = false;
  activiteoui=false;
  activitenon=false;
  Maternelle=false;
  Teletravail=false;
  autreFr=false;
  autreActivite=false;
  accidentsoui=false;
  accidentsnon=false;
  sinistreoui=false;
  sinistrenon=false;
  relogementsinistreoui=false;
  relogementsinistrenon=false;

  submitForm(){
    this.router.navigate([""]);
  }

  bienAssure(event: any) {
    this.bienAss=false;
    this.bienNonAss=false;
    const value = event.target.value;
    if (value == "Oui") this.bienAss = true;
      else if(value == "Non") this.bienNonAss = true;
  }

  louer(event: any) {
    this.loueroui=false;
    this.nonLouer=false;
    const value = event.target.value;
    if (value == "Oui") this.loueroui = true;
      else if(value == "Non") this.nonLouer = true;
  }

  louerpartie(event: any) {
    this.partie=false;
    this.autreLocation = false;
    this.loueroui==true;
    const value = event.target.value;
    if (value == "partie") this.partie = true;
    else if (value == "Autre") this.autreLocation = true;
  }

  activite(event: any) {
    this.activiteoui=false;
    this.activitenon=false;
    const value = event.target.value;
    if (value == "Oui") this.activiteoui = true;
      else if(value == "Non") this.activitenon = true;
  }
  preciserActivite(event: any) {
    this.Maternelle=false;
    this.Teletravail=false;
    this.autreActivite = false;
    const value = event.target.value;
    if (value == "Maternelle") this.Maternelle = true;
      else if(value == "Teletravail") this.Teletravail = true;
        else if(value == "Autre") this.autreActivite = true;
  }
  
  autreFrequence(event: any) {
    this.autreFr=false;
    const value = event.target.value;
    if (value == "Autre") this.autreFr = true;
  }
  accidents(event: any) {
    this.accidentsoui=false;
    this.accidentsnon=false;

    const value = event.target.value;
    if (value === "Oui"){this.accidentsoui = true; console.log("oui");} 
      else if(value === "Non") this.accidentsnon = true;
  }
  

  sinistre(event: any) {
    this.sinistreoui=false;
    this.sinistrenon=false;
    const value = event.target.value;
    if (value == "Oui") this.sinistreoui = true;
      else if(value == "Non") this.sinistrenon = true;
  }

  relogementsinistre(event: any) {
    this.relogementsinistreoui=false;
    this.relogementsinistrenon=false;
    const value = event.target.value;
    if (value == "Oui") this.relogementsinistreoui = true;
      else if(value == "Non") this.relogementsinistrenon = true;
  }
}
