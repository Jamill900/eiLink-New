import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  posts: Blog[] = [];
  loading = false;

  constructor(private database: DatabaseService) { }

  ngOnInit(): void {
    this.getBlog();
  }

  getBlog() {
    this.loading = true;
    this.database.getBlog().subscribe(posts =>
      this.posts = posts.reverse());
  }

}
