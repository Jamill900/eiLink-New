import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

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
