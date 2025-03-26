import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_ALL_PUBLIC_POSTS, GET_MY_POSTS } from '../graphql/querys/posts.query';
import { CREATE_POST } from '../graphql/mutatinos/post.mutation';

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

  getMyPosts(authToken : string) {
    return this.apollo.query({
      query: GET_MY_POSTS,
      context : {
        headers: {
          Authorization: `Bearer ${authToken}`
      }
    }
  }
    );
  }

  createPost( title : string, content : string, isPublic : boolean, authToken : string) {
    return this.apollo.mutate({
      mutation: CREATE_POST,
      variables: {
        title,
        content,
        isPublic
      },
      context: {
        headers: {
          Authorization: `Bearer ${authToken}`
        }
      }
    });
  }
}
