import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Navigation } from './Navigation';
import { Modal } from '../Modal/Modal';
import { navItems } from '../../data/navigation';

const meta: Meta<typeof Navigation> = {
  title: 'Components/Navigation',
  component: Navigation,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Navigation>;

const NavigationWithModal = () => {
  const [modalOpen, setModalOpen] = React.useState(false);

  const handleSearchClick = () => {
    setModalOpen(true);
  };

  return (
    <>
      <Navigation>
        <Navigation.Desktop>
          <Navigation.Logo siteUrl="/" />
          <Navigation.Menu items={navItems} />
          <Navigation.Aside onSearchClick={handleSearchClick} />
        </Navigation.Desktop>
        <Navigation.Mobile items={navItems} />
      </Navigation>

      <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Search">
        <p>
          We take the anxiety and uncertainty out of the document apostille process in these three
          simple steps! We take the anxiety and uncertainty out of the document apostille process in
          these three simple steps!
        </p>
      </Modal>
    </>
  );
};

export const Primary: Story = {
  args: {},
  render: () => <NavigationWithModal />,
};
