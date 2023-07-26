import { Component, OnInit } from '@angular/core';
import { Career } from 'src/app/interfaces/career';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-opportunities',
  templateUrl: './opportunities.component.html',
  styleUrls: ['./opportunities.component.scss']
})
export class OpportunitiesComponent implements OnInit {

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
