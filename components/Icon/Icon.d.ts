export interface IconProps {
    name: string;
    color?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    align?: 'none' | 'left' | 'center' | 'right';
}
export declare const Icon: ({ name, color, size, align }: IconProps) => import("react/jsx-runtime").JSX.Element;
