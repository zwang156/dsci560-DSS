import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Modal } from 'antd';
import { base } from '../utils/APIs';

function MoreInfo( { naics } ) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [info, setInfo] = useState({
      "code": 12212323
    })
    
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };

    useEffect(() => {
      const url = base+'description?code=' + naics
      axios.get(url).then(res => {
        // console.log(res)
        setInfo(res.data);
      })
      
    }, [naics])
  
    return (
      <>
        <p onClick={showModal}>
          &nbsp;🔎
        </p>
        <Modal title={info.name} footer={null} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <img src={info.pic} className="App-logo" alt="logo" style={{ height: "100%", width: "100%" }}/>
          <p>{info.info}</p>
        </Modal>
      </>
    );
}
export default MoreInfo;
