import React, { useEffect, useRef } from 'react';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  title?: string;
  showCloseButton?: boolean;
}

export const Modal = ({
  children,
  isOpen = false,
  onClose,
  title = 'Modal',
  showCloseButton = true,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Store the element that had focus before the modal opened
      previousFocusRef.current = document.activeElement as HTMLElement;

      // Focus the modal when it opens
      modalRef.current?.focus();

      // Prevent scrolling on the body
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus when modal closes
      previousFocusRef.current?.focus();

      // Restore scrolling
      document.body.style.overflow = '';
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
    <div
      ref={modalRef}
      className={`idc-modal ${isOpen ? 'opened' : ''}`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div className="modal-dialog">
        <div className="modal-header">
          <h2 id="modal-title">{title}</h2>
          {showCloseButton && (
            <button
              type="button"
              className="btn-close"
              onClick={handleClose}
              aria-label="Close modal"
            >
              &times;
            </button>
          )}
        </div>

        <div className="modal-body">{children}</div>

        <div className="modal-footer">
          <button type="button" className="btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
