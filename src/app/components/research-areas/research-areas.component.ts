import { Component, OnInit } from '@angular/core';
import { ResearchArea } from 'src/app/interfaces/research-areas';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-research-areas',
  templateUrl: './research-areas.component.html',
  styleUrls: ['./research-areas.component.scss']
})
export class ResearchAreasComponent implements OnInit {

  researchAreas: ResearchArea[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getResearchAreas();
    AOS.init();
  }

  getResearchAreas() {
    this.loading = true;
    this.database.getResearchAreas().subscribe(researchAreas => {
      this.researchAreas = researchAreas;
    })
  }

}
