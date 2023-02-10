import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getProjects();
    AOS.init();
  }

  getProjects() {
    this.loading = true;
    this.database.getProjects().subscribe(projects => {
      this.projects = projects.reverse();
    })
  }

}
