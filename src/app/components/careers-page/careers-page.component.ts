import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/interfaces/career';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-careers-page',
  templateUrl: './careers-page.component.html',
  styleUrls: ['./careers-page.component.scss']
})
export class CareersPageComponent implements OnInit {

  careers: Career[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getCareers();
  }

  getCareers() {
    this.database.getCareers().subscribe(careers => {
      this.careers = careers;
    })
  }

  navigateTo(url: string) {
    window.open(`${url}`, "_blank");
  }
}
