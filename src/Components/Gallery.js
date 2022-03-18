import React from 'react'
import MorePhotos from './MorePhotos'
import { group } from './data/group'
import { checkup } from './data/checkup'
import { pamplate } from './data/pamplate'
import { more } from './data/more'


const Gallery = () => {
  return (
    <>
    
    <MorePhotos category={group} heading="आपला ग्रुप "/>
    <MorePhotos category={checkup} heading="फ्री डोळे तपासणी  "/>
    <MorePhotos category={more} heading="अजून फोटोज "/>
    <MorePhotos category={pamplate} heading="पॅम्प्लेट"/>

    </>
  )
}

export default Gallery