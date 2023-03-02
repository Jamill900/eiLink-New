import { Component, OnInit } from '@angular/core';
import { Team } from 'src/app/interfaces/team';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-people-page',
  templateUrl: './people-page.component.html',
  styleUrls: ['./people-page.component.scss']
})
export class PeoplePageComponent implements OnInit {

  team: Team[] = [];
  loading = false;

  constructor(private database: DatabaseService) {}

  ngOnInit(): void {
    this.getTeam();
  }

  getTeam() {
    this.loading = true;
    this.database.getTeam().subscribe(team => {
      this.team = team;
    })
  }

  navigateTo(url: string) {
    window.open(`${url}`, '_blank');
  }


}
