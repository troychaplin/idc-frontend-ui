import React from 'react';

import { DefinitionAccordion } from './DefinitionAccordion';

export interface DefinitionProps {
  children: React.ReactNode;
}

export const DefinitionWrapper = ({ children }: DefinitionProps) => {
  return <dl className="idc-definition idc-component">{children}</dl>;
};

export const Definition = Object.assign(DefinitionWrapper, {
  Accordion: DefinitionAccordion,
});

DefinitionWrapper.displayName = 'Definition';
