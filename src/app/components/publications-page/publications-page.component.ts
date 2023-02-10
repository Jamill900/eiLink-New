import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/interfaces/publication';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-publications-page',
  templateUrl: './publications-page.component.html',
  styleUrls: ['./publications-page.component.scss']
})
export class PublicationsPageComponent implements OnInit {

  publications: Publication[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getPublications();
    AOS.init();
  }

  getPublications() {
    this.loading = true;
    this.database.getPublications().subscribe(publications => {
      this.publications = publications.reverse();
    })
  }

  navigateTo(url: string) {
    window.open(`${url}`, "_blank");
  }

}
