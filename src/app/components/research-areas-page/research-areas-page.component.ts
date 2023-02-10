import { Component, OnInit } from '@angular/core';
import { ResearchArea } from 'src/app/interfaces/research-areas';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-research-areas-page',
  templateUrl: './research-areas-page.component.html',
  styleUrls: ['./research-areas-page.component.scss']
})
export class ResearchAreasPageComponent implements OnInit {

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
