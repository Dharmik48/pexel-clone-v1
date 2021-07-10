import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {
  const images = props.images.map((image) => (
    <ImageCard key={image.id} src={image.src.large} />
  ))

  return <div id="image-list">{images}</div>
}

export default ImageList
