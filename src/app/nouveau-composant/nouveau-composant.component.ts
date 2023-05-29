import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nouveau-composant',
  templateUrl: './nouveau-composant.component.html',
  styleUrls: ['./nouveau-composant.component.css']
})
export class NouveauComposantComponent implements OnInit {

  string: boolean;
  constructor() {
    this.string = true;
  }
  ngOnInit(): void {
  }
  
  

}
