import React from 'react';

export interface ModalFooterProps {
  children: React.ReactNode;
}

export const ModalFooter = ({ children }: ModalFooterProps) => {
  return <footer className="idc-modal-footer">{children}</footer>;
};

ModalFooter.displayName = 'Modal.Footer';
