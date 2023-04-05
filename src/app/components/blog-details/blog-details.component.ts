import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Blog } from 'src/app/interfaces/blog';
import { DatabaseService } from 'src/app/services/database.service';
import * as AOS from 'aos';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.scss']
})
export class BlogDetailsComponent implements OnInit{

  post: Blog;

  constructor(private database: DatabaseService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.getProductById();
    AOS.init();
  }

  getProductById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.database.getBlogById(id).subscribe(post =>
      this.post = post);
  }

  navigateTo(url: string) {
    window.open(`${url}`, "_blank");
  }
}
