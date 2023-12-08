import React, {useEffect} from 'react'
import { https } from '../../../service/config';
import { Tabs } from 'antd';
export default function TabMovie() {
    useEffect(() => {
        https
            .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
            .then((res) => {
                console.log(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: 'Tab 1',
          children: 'Content of Tab Pane 1',
        },
        {
          key: '2',
          label: 'Tab 2',
          children: 'Content of Tab Pane 2',
        },
        {
          key: '3',
          label: 'Tab 3',
          children: 'Content of Tab Pane 3',
        },
      ];
  return (
    <div>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
    </div>
  )
}
