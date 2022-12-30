import { useQuery, gql } from '@apollo/client'

const GET_SINGLE_QUERY = gql`
  query getSinglePhoto($id: ID!) {
    photo(id: $id) {
      id
      categoryId
      src
      likes
      userId
      liked
    }
  }
`

export const getSinglePhoto = (id) => {
  return useQuery(GET_SINGLE_QUERY, {
    variables: { id },
  })
}
