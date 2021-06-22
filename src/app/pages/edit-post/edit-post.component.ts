import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/data/entities/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  post: Post = new Post;
  title: string = '';
  text: string = ''; 

  constructor(private route: ActivatedRoute, private router: Router, private postsService: PostsService) {}

  ngOnInit(): void {
    const id: number | any = this.route.snapshot.paramMap.get("postId");
    this.postsService
      .getPostById(id)
      .subscribe((editPost) => (this.post = editPost));
    this.title = this.post.title; 
  }

  onSubmit() {

  }

}
