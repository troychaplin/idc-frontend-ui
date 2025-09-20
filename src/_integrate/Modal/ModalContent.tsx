import React from 'react';

export interface ModalContentProps {
  children?: React.ReactNode;
}

export const ModalContent = ({ children }: ModalContentProps) => {
  return <div className="idc-modal-content">{children}</div>;
};

ModalContent.displayName = 'Modal.Content';
