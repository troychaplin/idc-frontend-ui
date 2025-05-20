import { Icon } from '../Icon/Icon';

export interface CardIconProps {
  iconName: string;
  iconColor?: 'blue' | 'orange';
  basePath?: string;
}

export const CardIcon = ({ iconName, iconColor = 'blue', basePath = '' }: CardIconProps) => {
  const rgbColor = iconColor === 'blue' ? '40 98 161' : '221 91 2';

  return (
    <figure className="mb-4 md:mb-6">
      <Icon name={iconName} size="xl" color={`rgb(${rgbColor})`} align="left" basePath={basePath} />
    </figure>
  );
};

CardIcon.displayName = 'Card.Icon';
