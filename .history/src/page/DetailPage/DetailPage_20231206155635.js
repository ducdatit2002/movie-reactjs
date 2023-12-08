import React from 'react'
import { useParams } from 'react-router-dom'

export default function DetailPage() {
    /* UseParam lấy tham số trên url */
    let { idPhim} = useParams();
    useEffect(() => {
        //gọi API lấy chi tiết phim
        https.get(`api/QuanLyPhim/LayThongTinPhim?MaPhim=0`)
    }, []);
  return (
    <div>Detail Page</div>
  )
}
