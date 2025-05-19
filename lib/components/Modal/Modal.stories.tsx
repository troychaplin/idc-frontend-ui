import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';
import { Button } from '../Button';
import { ButtonGroup } from '../ButtonGroup';

const meta = {
  title: 'Components/Modal',
  component: Modal,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

const ModalWithState = (args: ModalProps) => {
  const [modalOpen, setModalOpen] = React.useState(false);

  return (
    <>
      <ButtonGroup isCenter>
        <Button label="Click Me" onClick={() => setModalOpen(true)} type="button" />
      </ButtonGroup>

      <Modal {...args} isOpen={modalOpen} onClose={() => setModalOpen(false)}>
        <Modal.Header title="Modal Title" />
        <Modal.Content>
          <p>
            We take the anxiety and uncertainty out of the document apostille process in these three
            simple steps!
          </p>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const Primary: Story = {
  args: {},
  render: args => <ModalWithState {...args} />,
};
