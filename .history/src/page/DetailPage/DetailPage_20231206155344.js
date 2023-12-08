import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    /* UseParam lấy tham số trên url */
    let { idPhim} = useParams();
    useEffect(() => {
        //gọi API lấy chi tiết phim
        
    }, []);
  return (
    <div>Detail Page</div>
  )
}
