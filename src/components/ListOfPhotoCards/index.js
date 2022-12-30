import React from 'react'
import ReactPlaceholder from 'react-placeholder'
import 'react-placeholder/lib/reactPlaceholder.css'
import { getPhotos } from '../../hoc/getPhotos'
import { photoCardSkeleton } from '../../styles/loading'
import { PhotoCard } from '../PhotoCard'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, error, data } = getPhotos(categoryId)

  if (error) {
    return <h2>Internal Server Error</h2>
  }
  if (loading) {
    return (
      <ReactPlaceholder
        ready={!loading}
        showLoadingAnimation
        customPlaceholder={photoCardSkeleton}
      />
    )
  }

  return (
    <ul>
      {data.photos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  )
}
