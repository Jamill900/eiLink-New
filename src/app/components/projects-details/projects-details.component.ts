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


  constructor(private database: DatabaseService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProjectBySlug();
    AOS.init();
  }

  getProjectBySlug(): void {
    const id = Number(this.router.snapshot.paramMap.get('id'));
    this.database.getProjectsById(id).subscribe(project => this.project = project);
  }
}
