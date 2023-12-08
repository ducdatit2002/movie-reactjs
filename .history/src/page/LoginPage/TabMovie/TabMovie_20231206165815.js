import React, {useEffect} from 'react'
import http
export default function TabMovie() {
    useEffect(() => {
        https
            .get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01`)
            .then((res) => {
                console.log(res.data.content);
                setListMovie(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
  return (
    <div>
      TabMovie
    </div>
  )
}
