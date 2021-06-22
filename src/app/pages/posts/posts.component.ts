import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../services/posts.service'; 
import { Post } from '../../data/entities/Post';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  posts: Post[] = []; 

  constructor(private postService: PostsService, private router: Router) { }

  ngOnInit(): void {
    this.postService
      .getPosts()
      .subscribe((posts) => (this.posts = posts));
  }

  likes(userIds: any): number {
    return userIds.length; 
  }

  editPost(id: number) {
     this.router.navigate(['editPost', {postId: id}])
  }

}
