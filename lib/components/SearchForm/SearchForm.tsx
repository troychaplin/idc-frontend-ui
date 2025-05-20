import React from 'react';

export interface SearchFormProps {
  placeholder?: string;
  label?: string;
  id?: string;
  action?: string;
  hasBorder?: boolean;
  onSubmit?: (searchTerm: string) => void;
}

export const SearchForm = ({
  placeholder = 'Search the site',
  label = 'Search',
  id = 'idc-search-form',
  action = 'https://www.idocscanada.ca/',
  hasBorder = false,
  onSubmit,
}: SearchFormProps) => {
  const inputId = `${id}-input`;

  const borderClass = hasBorder ? 'border border-solid border-idc-black-100' : '';

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    const searchTerm = formData.get('search') as string;
    onSubmit?.(searchTerm);
  };

  return (
    <form
      method="get"
      action={action}
      className={`p-1 overflow-hidden rounded idc-search-form ${borderClass}`}
      role="search"
      aria-label={label}
      id={id}
      onSubmit={handleSubmit}
    >
      <div className="flex w-full gap-1">
        <label htmlFor={inputId} className="sr-only">
          {label}
        </label>

        <input
          type="search"
          id={inputId}
          name="search"
          className="flex-auto px-3 py-1.5"
          placeholder={placeholder}
          defaultValue=""
          aria-label={label}
        />

        <button type="submit" className="sr-only">
          Submit search
        </button>
      </div>
    </form>
  );
};
