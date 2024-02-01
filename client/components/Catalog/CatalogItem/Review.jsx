"use client"

import { Rating } from '@mui/material'
import React from 'react'

const Review = ({senderName, rating, title, createdAt, description}) => {
  return (
    <div className='w-full flex flex-col items-start justify-start gap-y-2 px-1 py-5'>
        <Rating name="read-only" value={rating} precision={0.1} readOnly size="small"  />
        <h4 className='text-black font-medium text-md'>{title}</h4>
        <p className='text-xs text-[#b7b7b7]'>{senderName} on {createdAt}</p>
        <p>{description}</p>
    </div>
  )
}

export default Review