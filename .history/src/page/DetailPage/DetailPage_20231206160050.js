import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { https } from '../../service/config';
export default function DetailPage() {
    const [detail, setDetail] = useState();
    /* UseParam lấy tham số trên url */
    let { idPhim} = useParams();
    useEffect(() => {
        //gọi API lấy chi tiết phim
        https
            .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${idPhim}`)
            .then((res) => {
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
    <div>Detail Page</div>
  )
}
