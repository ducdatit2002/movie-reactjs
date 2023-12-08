import React, { useEffect, useState } from "react";
import { https } from "../../../service/config";
import { Tabs } from "antd";
export default function TabMovie() {
  const [heThongRap, setHeThongRap] = useState([]);
  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => {
        console.log(res.data.content);
        setHeThongRap(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const onChange = (key) => {
    console.log(key);
  };
  const items = heThongRap.map((heThong, index) => {
    return {
        key: index,
        label: <img className="w-16" src={heThong.logo} />,
        children: <Tabs
        tabPosition="left"
        items={heThong.lstCumRap.map((cumRap) => {
            return {
                key: cumRap.mapCumRap,
                label: <p>{cumRap.tenCumRap</p>
                
            }
        })}
        />,
    }
  });
  return (
    <div className="container pb-96">
      <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </div>
  );
}

//   key: '1',
//   label: 'Tab 1',
//   children: 'Content of Tab Pane 1',
