import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    let { idPhim} = useParams();
    console.log(params)
  return (
    <div>
      {/* UseParam lấy tham số trên url */}
    </div>
  )
}