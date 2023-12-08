import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    let { idPhim} = useParams();
    useEffect(() => {

    }, []);
  return (
    <div>
      {/* UseParam lấy  số trên url */}
    </div>
  )
}
