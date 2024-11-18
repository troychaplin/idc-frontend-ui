import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { Column, ColumnProps } from '.'

const meta = {
  title: 'Layouts/Column',
  component: Column,
  tags: ['autodocs'],
} satisfies Meta<typeof Column>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    maxWidth: '5xl',
    cols: 2,
    gap: 20,
  } as ColumnProps,
  render: (args) => (
    <Column {...args}>
      <Column.Content>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus
          iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus. Aliquam
          erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut eleifend sem
          dui ut quam.
        </p>
        {args.cols === '2/3' && (
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        )}
      </Column.Content>
      <Column.Content>
        <p>
          Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
          fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam finibus
          sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
        </p>
        {args.cols === '1/3' && (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus gravida orci elit, at consectetur lectus
            iaculis vel. Cras non fringilla velit, a posuere felis. Mauris faucibus dui ultricies ultrices luctus.
            Aliquam erat volutpat. Vestibulum imperdiet, enim non elementum pulvinar, lacus quam vestibulum eros, ut
            eleifend sem dui ut quam.
          </p>
        )}
      </Column.Content>
      {(args.cols === 3 || args.cols === 4 || args.cols === 6) && (
        <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>
      )}
      {(args.cols === 4 || args.cols === 6) && (
        <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>
      )}
      {args.cols === 6 && (
        <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>
      )}
      {args.cols === 6 && (
        <Column.Content>
          <p>
            Nam facilisis pulvinar ligula nec cursus. Mauris ut tempor enim. Nullam sodales eros ut velit ullamcorper
            fringilla. Fusce a sem est. Vivamus eleifend accumsan pellentesque. Pellentesque in ante urna. Nullam
            finibus sed nunc ac volutpat. Maecenas lacinia justo a arcu tempor, ac tempor magna faucibus.
          </p>
        </Column.Content>
      )}
    </Column>
  ),
}
