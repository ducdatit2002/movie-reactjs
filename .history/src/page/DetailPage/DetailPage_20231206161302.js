import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../service/config';
export default function DetailPage() {
    const [detail, setDetail] = useState({});
    /* UseParam lấy tham số trên url */
    let { idPhim} = useParams();
    useEffect(() => {
        //gọi API lấy chi tiết phim
        https
            .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
            .then((res) => {
                setDetail(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
    <div className='container flex items-center'>
        <img src={detail.hinhAnh} className='w-96' alt="" />
        <div>
            <h2 className="text-5xl">[]}</h2>
        </div>
    </div>
  )
}
