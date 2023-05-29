import { Component } from '@angular/core';
import { Router } from '@angular/router';

interface list{
  Value: string,
  ViewValue:String,
}

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
    {Value: "Le logement dans son intégralité", ViewValue: "Le logement dans son intégralité"},
    {Value: "partie", ViewValue: "Une partie seulement"},
    {Value: "Réception", ViewValue: "Réception"},
    {Value: "AirBnB", ViewValue: "AirBnB"},
    {Value: "Chambre d'hôtes", ViewValue: "Chambre d'hôtes"},
  ]

  naturePerList:list[]=[
    {Value: "Période consécutive", ViewValue: "Période consécutive"},
    {Value: "Période non-consécutive", ViewValue: "Période non-consécutive"},
  ]

  partieList:list[]=[
    {Value: "Sous le même toît", ViewValue: "Sous le même toît"},
    {Value: "Dans un bâtiment disctinct", ViewValue: "Dans un bâtiment disctinct"},
  ]

  activiteList:list[]=[
    {Value: "Maternelle", ViewValue: "Assistante Maternelle"},
    {Value: "Teletravail", ViewValue: "Télétravail"},
  ]
  frequenceList:list[]=[
    {Value: "Occasionnellement", ViewValue: "Occasionnellement"},
    {Value: "Fréquemment", ViewValue: "Fréquemment"},
  ]
  typologieList:list[]=[
    {Value: "Matériel 1", ViewValue: "Matériel 1"},
    {Value: "Matériel 2", ViewValue: "Matériel 2"},
    {Value: "Autre", ViewValue: "Autre"},

  ]


  bienAss=false;
  bienNonAss=false;
  loueroui=false;
  nonLouer=false;
  partie=false;
  activiteoui=false;
  activitenon=false;
  Maternelle=false;
  Teletravail=false;
  autreFr=false;


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
    const value = event.target.name;
    if (value == "partie") this.partie = true;
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
    const value = event.target.value;
    if (value == "Maternelle") this.Maternelle = true;
      else if(value == "Teletravail") this.Teletravail = true;
  }
  
  autreFrequence(event: any) {
    this.autreFr=false;
    const value = event.target.value;
    if (value == "Autre") this.autreFr = true;
  }


  
}
