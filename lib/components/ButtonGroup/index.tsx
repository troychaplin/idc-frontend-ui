export interface ButtonGroupProps {
  children?: React.ReactNode;
  isCenter?: boolean;
  gap?: number;
}

export const ButtonGroup = ({
  children,
  isCenter = false,
  gap = 20,
}: ButtonGroupProps) => {
  const centerButtons = isCenter ? "justify-center" : "justify-start";

  // Inline style object to handle grid gap
  const style = {
    gridGap: gap ? gap : "",
  };

  return (
    <div className={`ui-buttongroup flex ${centerButtons}`} style={style}>
      {children}
    </div>
  );
};
