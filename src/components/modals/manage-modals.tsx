"use client"
import React from 'react'
import Modal from './modal'
import { useUI } from '@/contexts/ui.context'
// import CareersModal from '../modal/careers-modal';

const ManagedModal: React.FC = () => {
  const { displayModal, closeModal, modalView }: any = useUI;
  const isCloseOnOutsideClickEnabled = modalView !== "CAREER_VIEW";
  const modalVarant = "center"
  return (
    <Modal open={displayModal} onClose={closeModal} closeOnOutsideClick={isCloseOnOutsideClickEnabled} variant={modalVarant}>
      {/* {modalView === "CAREER_VIEW" && <CareersModal />} */}
    </Modal>
  )
}

export default ManagedModal
