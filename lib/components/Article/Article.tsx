import React from 'react';

export interface ArticleProps {
  children?: React.ReactNode;
  content?: string;
}

export const Article = ({ children, content }: ArticleProps) => {
  return (
    <article>{content ? <div dangerouslySetInnerHTML={{ __html: content }} /> : children}</article>
  );
};
