import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button'; 
import { DialogModule } from 'primeng/dialog';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostsService } from '../../core/services/posts.service';
import { ToggleSwitchModule } from 'primeng/toggleswitch';
import { MessageService } from 'primeng/api';
import { PostsComponent } from '../components/posts/posts.component';


@Component({
  selector: 'app-crud-posts',
  imports: [
    CardModule,
    PostsComponent,
    ButtonModule,
    DialogModule,
    FloatLabelModule,
    InputTextModule,
    ToggleSwitchModule,
    CommonModule,
    
    FormsModule
  ],
  templateUrl: './crud-posts.component.html',
  styleUrl: './crud-posts.component.scss'
})
export class CrudPostsComponent implements OnInit{
  constructor(
    private postsService : PostsService,
    private messageService : MessageService
  ){}

  @Output() redirectLogin : any = new EventEmitter();
  visible : boolean = false;
  checked : boolean = false;
  title : string = "";
  body : string = "";

  authToken : string = "";
  posts : any = [];

  ngOnInit(): void {
    if (!localStorage.getItem('token')) {
      this.redirectLogin.emit();
    }else {
      this.authToken = localStorage.getItem('token') || "";
    }

    this.loadPosts();
  }

  loadPosts() : void {
    this.postsService.getMyPosts(this.authToken).subscribe( (res) => {
      console.log(res);
      this.posts = res.data;
      this.posts = this.posts.getMyPosts;
      
    }
    );
  }

  savePost() : void {
    console.log(this.title, this.body, this.checked, this.authToken);
    this.postsService.createPost(this.title, this.body, this.checked, this.authToken).subscribe( (res) => {
      console.log(res);
      this.messageService.add({severity:'success', summary:'Success', detail:'Post created successfully'});
      this.loadPosts();
    }, (error) => {
      console.log(error);
      this.messageService.add({severity:'error', summary:'Error', detail:'Post could not be created'});
    });

    this.visible = false;
  }


  showDialogToAdd() : void {
    this.visible = true;
  }
}
