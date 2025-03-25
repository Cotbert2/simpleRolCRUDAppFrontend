import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_PUBLIC_POSTS } from '../graphql/querys/posts.query';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private apollo: Apollo
  ) { }


  getAllPublicPosts() {
    return this.apollo.query({
      query: GET_ALL_PUBLIC_POSTS
    });
  }
}
