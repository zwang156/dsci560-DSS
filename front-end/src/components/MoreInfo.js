import React, { useState } from 'react';
// import './index.css';
import { Modal } from 'antd';

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
  
    return (
      <>
        <p onClick={showModal}>
          🔎
        </p>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </>
    );
}
export default MoreInfo;
