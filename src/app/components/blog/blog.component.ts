import { Component, OnInit } from '@angular/core';
import { Blog } from 'src/app/interfaces/blog';
import { DatabaseService } from 'src/app/services/database.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

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
