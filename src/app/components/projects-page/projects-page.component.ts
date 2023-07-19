import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';
import { Product } from 'src/app/interfaces/product';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPageComponent implements OnInit {

  projects: Project[] = [];
  products: Product[] = [];
  loading = false;
  showProjects = true;
  showProducts = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getProjects();
    this.getProducts();
    AOS.init();
  }

  filterButtons(type: string) {
    if (type == 'products') {
      this.showProjects = false;
      this.showProducts = true;
    }
    else if (type == 'projects') {
      this.showProjects = true;
      this.showProducts = false;
    }
  }

  getProjects() {
    this.loading = true;
    this.database.getProjects().subscribe(projects => {
      this.projects = projects.reverse();
    })
  }

  getProducts() {
    this.loading = true;
    this.database.getProducts().subscribe(products => {
      this.products = products.reverse();
    })
  }



}
