import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Modal, ModalProps } from './Modal';

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
    <div style={{ padding: '2rem' }}>
      <button
        type="button"
        onClick={() => setModalOpen(true)}
        style={{
          padding: '8px 16px',
          cursor: 'pointer',
          marginBottom: '1rem',
        }}
      >
        Open Modal
      </button>
      <Modal {...args} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export const Primary: Story = {
  args: {
    title: 'Modal',
    children: (
      <p>
        We take the anxiety and uncertainty out of the document apostille process in these three
        simple steps! We take the anxiety and uncertainty out of the document apostille process in
        these three simple steps!
      </p>
    ),
  },
  render: args => <ModalWithState {...args} />,
};
