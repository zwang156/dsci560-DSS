import React, { useState } from 'react';
import { Modal } from 'antd';
import { getIndustryInfo } from '../utils/APIs';

function MoreInfo( { naics } ) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const showModal = () => {
      setIsModalOpen(true);
    };
  
    const handleOk = () => {
      setIsModalOpen(false);
    };
  
    const handleCancel = () => {
      setIsModalOpen(false);
    };
    const info = getIndustryInfo(5414)
    // console.log(info)
  
    return (
      <>
        <p onClick={showModal}>
          &nbsp;🔎
        </p>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p></p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
}
export default MoreInfo;
