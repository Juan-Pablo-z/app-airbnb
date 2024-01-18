import React, { useEffect, useState } from 'react'
import { getImages } from '../helpers/getImages'
import { Rental } from './Rental'





export const Rentals = () => {

  const [Img, setImg] = useState([])

  const getImg = async () => {
    const newImg = await getImages();
    setImg(newImg)
  }


  useEffect(() => {
    getImg()
  }, [])


  return (
    <div className='pt-3 sm:pt-5'>
      <div className=' grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Img.map((image,index) => <Rental
          key={index}
          id={image.id}
          title={image.title}
          images={image.url}
          price={image.price}
          description={image.description}
        />)}
      </div>
    </div>
  )
}

