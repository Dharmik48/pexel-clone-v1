import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} src={image.src.large} />
  ))

  return <div>{images}</div>
}

export default ImageList
