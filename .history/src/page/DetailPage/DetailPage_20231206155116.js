import React from 'react'
import use
export default function DetailPage() {
  return (
    <div>
      {/* UseParam lấy tham số trên url */}
      let params = useParams();
      console.log(params)
    </div>
  )
}