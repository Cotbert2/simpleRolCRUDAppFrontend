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