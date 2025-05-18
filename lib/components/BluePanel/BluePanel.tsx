import React from 'react';
import { uiMaxWidth, uiGridColumns } from '../../utils/propClasses';
import { BluePanelContent } from './BluePanelContent';

type MaxWidthKeys = keyof typeof uiMaxWidth;
type ColumnKeys = keyof typeof uiGridColumns;

export interface BluePanelProps {
  children?: React.ReactNode;
  maxWidth?: MaxWidthKeys;
  cols?: ColumnKeys;
}

export const BluePanelContainer = ({
  children,
  maxWidth = '7xl',
  cols = '60/40',
}: BluePanelProps) => {
  return (
    <div
      className={`idc-bluecolumns ${uiMaxWidth[maxWidth]} mx-auto grid ${uiGridColumns[cols]} rounded-xl overflow-hidden bg-idc-blue-50`}
    >
      {children}
    </div>
  );
};

export const BluePanel = Object.assign(BluePanelContainer, {
  Content: BluePanelContent,
});
