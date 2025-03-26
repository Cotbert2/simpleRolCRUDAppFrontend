import { gql } from "apollo-angular";

export const GET_ALL_PUBLIC_POSTS = gql`
query GetPublicPosts {
    getPublicPosts {
        id
        title
        content
        user {
            username
        }
    }
}
`

/** query GetMyPosts2 {
    getMyPosts {
        id
        title
        content
    }
}*/

export const GET_MY_POSTS = gql`
query GetMyPosts {
    getMyPosts {
        id
        title
        content
        user {
            id
            username
            role
        }
    }
}
`