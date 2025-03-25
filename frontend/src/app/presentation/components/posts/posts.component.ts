import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-posts',
  imports: [
    CardModule
  ],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss'
})
export class PostsComponent implements OnInit{
  //input variables for Title, authos and content
  @Input() post: any = {};
  title : string = "";
  content : string = "";

  ngOnInit(): void {
    this.title = `${this.post.title} - ${this.post.user.username}`;
    this.content = this.post.content
  }

  constructor() { }
}
