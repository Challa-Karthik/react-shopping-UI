


import React from 'react'

const Collections = (props) => {
  const {title, image1, image2, image3, image4, image5, image6} = props.gentsFashion
  return (
    <div className="collectionSection">
      <h2>{title}</h2>
      <div className="menImages" >
      
      <img src="shopping images\men and women\images (30).jpeg" />
      <img src="shopping images\men and women\images (33).jpeg" />
      <img src="shopping images\men and women\images (19).jpeg"  />
      <img src="shopping images\men and women\images (31).jpeg"  />
      <img src="shopping images\men and women\images (32).jpeg"  />
      <img src="shopping images\men and women\images (34).jpeg"  />
      
      </div>
    </div>
  )
}

export default Collections
