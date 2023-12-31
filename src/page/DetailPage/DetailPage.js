import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../service/config';
import { Rate } from 'antd';
export default function DetailPage() {
    const [detail, setDetail] = useState({});
    /* UseParam lấy tham số trên url */
    let { idPhim} = useParams();
    useEffect(() => {
        //gọi API lấy chi tiết phim
        https
            .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
            .then((res) => {
                console.log(res.data.content);
                setDetail(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
    <div className='container flex items-center'>
        <img src={detail.hinhAnh} className='w-96' alt="" />
        <div className='text-center space-y-10 flex-grow'>
            <h2 className="text-5xl text-blue-600 font-bold animate-pulse">{detail.tenPhim}</h2>
            <Rate style={{ fontSize: 40, color: "red"}} allowHalf count={10} value={detail.danhGia} />
        </div>
    </div>
  )
}
