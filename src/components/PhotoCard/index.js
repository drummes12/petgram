import React from 'react'
import { Link } from 'react-router-dom'
import { useToggleLikeMutation } from '../../container/useToggleLikeMutation'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { Article, Img, ImgWrapper } from './styles'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE =
  'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen()
  const [toggleLike] = useToggleLikeMutation()

  const handleFavClick = () => {
    toggleLike({
      variables: {
        input: { id },
      },
    })
  }

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>

          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: (props, propName, componentName) => {
    const propValue = props[propName]
    if (propValue === undefined)
      return new Error(`${propName} value must be defined`)
    if (propValue < 0)
      return new Error(`${propName} value must be greater than zero`)
  },
}
