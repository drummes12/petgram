import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import { PhotoCard } from '../components/PhotoCard'
import { getSinglePhoto } from '../hoc/getSinglePhoto'
import { photoCardSkeleton } from '../styles/loading'

export const PhotoCardWithQuery = ({ id }) => {
  const { loading, error, data } = getSinglePhoto(id)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return (
      <ReactPlaceholder
        ready={!loading}
        showLoadingAnimation={true}
        customPlaceholder={photoCardSkeleton}
      />
    )
  }

  return <PhotoCard {...data.photo} />
}
