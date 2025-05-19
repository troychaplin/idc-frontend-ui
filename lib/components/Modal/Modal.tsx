import React, { useEffect, useRef } from 'react';
import { ModalHeader } from './ModalHeader';
import { ModalContent } from './ModalContent';
import { ModalFooter } from './ModalFooter';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export const ModalContainer = ({
  children,
  isOpen = false,
  onClose,
  showCloseButton = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      previousFocusRef.current = document.activeElement as HTMLElement; // Store the element that had focus before the modal opened
      modalRef.current?.focus(); // Focus the modal when it opens
      document.body.style.overflow = 'hidden'; // Prevent scrolling on the body
    } else {
      previousFocusRef.current?.focus(); // Restore focus when modal closes
      document.body.style.overflow = ''; // Restore scrolling
    }

    // Cleanup function
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose?.();
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      handleClose();
    }
  };

  return (
    <dialog
      ref={modalRef}
      className={`idc-modal ${isOpen ? 'opened' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="idc-modal-container">
        {showCloseButton && (
          <button
            type="button"
            className="p-1.5 rounded idc-modal-close bg-idc-orange-700"
            onClick={handleClose}
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 fill-white"
              viewBox="0 0 384 512"
            >
              <path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z" />
            </svg>
          </button>
        )}

        {children}
      </div>
    </dialog>
  );
};

export const Modal = Object.assign(ModalContainer, {
  Header: ModalHeader,
  Content: ModalContent,
  Footer: ModalFooter,
});
