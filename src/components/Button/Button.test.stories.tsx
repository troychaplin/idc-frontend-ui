import type { Meta, StoryObj } from '@storybook/react-vite';

const TestComponent = () => {
  return <div>Hello World</div>;
};

const meta = {
  title: 'Test/Simple',
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
