import React from 'react';

import { toggleAccordion } from './script';

export interface DefinitionAccordionProps {
  children: React.ReactNode;
  title: string;
  divider?: 'light' | 'white' | 'dark';
}

export const DefinitionAccordion = ({
  title,
  children,
  divider = 'light',
}: DefinitionAccordionProps) => {
  const titleLabel =
    title && typeof title === 'string'
      ? 'idc-accordion-' + title.toLowerCase().replace(/ +/g, '-')
      : '';

  const borderColor = (() => {
    switch (divider) {
      case 'dark':
        return 'border-idc-black-200';
      case 'white':
        return 'border-white';
      case 'light':
      default:
        return 'border-idc-black-100';
    }
  })();

  return (
    <div className={`grid px-2 py-4 border-b idc-accordion ${borderColor} first:border-t`}>
      <dt className="mt-0 mb-0 font-semibold md:mt-0">
        <div
          className="flex items-center w-full idc-accordion-button"
          aria-expanded="false"
          aria-controls={titleLabel}
          role="button"
          onClick={toggleAccordion}
        >
          {title}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            className="w-4 h-4 ml-auto transition-transform rotate-0 fill-idc-black-300 idc-accordion-icon"
          >
            <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
          </svg>
        </div>
      </dt>

      <dd
        className="p-0 mt-2 idc-accordion-content md:p-0 md:mt-4 md:mb-1.5 ui-prose-first-last"
        hidden={true}
        id={titleLabel}
      >
        {children}
      </dd>
    </div>
  );
};

DefinitionAccordion.displayName = 'Description.Accordion';
