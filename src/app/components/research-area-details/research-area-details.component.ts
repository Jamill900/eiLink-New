import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';
import { ResearchArea } from 'src/app/interfaces/research-areas';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-research-area-details',
  templateUrl: './research-area-details.component.html',
  styleUrls: ['./research-area-details.component.scss']
})
export class ResearchAreaDetailsComponent implements OnInit {

  researchArea: ResearchArea;
  projects: Project[] = [];
  loading = false;

  constructor(private database: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getResearchAreasById();
    this.getProjects();
    AOS.init();
  }

  getResearchAreasById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.database.getResearchAreasById(id).subscribe(researchArea =>
      this.researchArea = researchArea);
  }

  getProjects(): void {
    this.database.getProjects().subscribe(projects =>
      this.projects = projects);
  }

}
