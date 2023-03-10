import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/interfaces/project';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.scss']
})
export class ProjectsDetailsComponent implements OnInit {

  project: Project;


  constructor(private database: DatabaseService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjectById();
    AOS.init();
  }

  getProjectById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.database.getProjectsById(id).subscribe(project =>
      this.project = project);
  }
}
