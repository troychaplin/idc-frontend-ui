export interface ModalHeaderProps {
  title: string;
}

export const ModalHeader = ({ title }: ModalHeaderProps) => {
  return (
    <header className="idc-modal-header">
      <h2 className="text-base font-semibold md:text-lg">{title}</h2>
    </header>
  );
};

ModalHeader.displayName = 'Modal.Header';
