"use client";
import useModal from "../../Hooks/useModal";
import MyForm from "../Form/Form";

import ModalContent from '../Modals/Modal'

const KontaktModal = () => {
    const Modal = useModal();

  const bodyContent = (
    <div className="flex flex-col justify-end items-end">
        <MyForm/>
    </div>
  );
  return (
    <ModalContent
      isOpen={Modal.isOpen}
      title="Kontakt os, eller log in "
      onClose={Modal.onClose}
      body={bodyContent}
    />
  );
};

export default KontaktModal;
