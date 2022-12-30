import React from 'react'
import { useQuery, gql } from '@apollo/client'
import { ListOfFavs } from '../components/ListOfFavs'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

const Query = () =>
  useQuery(GET_FAVS, {
    fetchPolicy: 'network-only',
  })

export const FavsWithQuery = () => {
  const { loading, error, data = [] } = Query()
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  const { favs } = data

  return <ListOfFavs favs={favs} />
}
