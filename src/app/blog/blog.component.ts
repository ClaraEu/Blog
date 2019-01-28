import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../models/post';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  posts: Post[]

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postService.getAllPosts().then((posts) => {
      this.posts = posts
    })
  }

  onChange($event) {
    this.posts = this.postService.getPostsFilteredByCategoria($event.target.value)
  }

}
