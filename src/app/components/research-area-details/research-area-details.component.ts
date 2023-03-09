import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';
import { ResearchArea } from 'src/app/interfaces/research-areas';

@Component({
  selector: 'app-research-area-details',
  templateUrl: './research-area-details.component.html',
  styleUrls: ['./research-area-details.component.scss']
})
export class ResearchAreaDetailsComponent implements OnInit {

  researchArea: ResearchArea;

  constructor(private database: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResearchAreasById();
    AOS.init();
  }

  getResearchAreasById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.database.getResearchAreasById(id).subscribe(researchArea =>
      this.researchArea = researchArea);
  }

}
