import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-careers-footer',
  templateUrl: './careers-footer.component.html',
  styleUrls: ['./careers-footer.component.scss']
})
export class CareersFooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
