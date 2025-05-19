import { Icon } from '../Icon/Icon';

export interface CardIconProps {
  iconName: string;
  basePath?: string;
}

export const CardIcon = ({ iconName, basePath = '' }: CardIconProps) => {
  return (
    <figure className="mb-4 md:mb-6">
      <Icon name={iconName} size="xl" color="rgb(40 98 161)" align="left" basePath={basePath} />
    </figure>
  );
};

CardIcon.displayName = 'Card.Icon';
