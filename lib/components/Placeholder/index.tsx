import { uiMaxWidth } from "../../utils/propClasses";
type maxWidthKeys = keyof typeof uiMaxWidth;

export interface PlaceholderProps {
  name?: string;
  maxWidth?: maxWidthKeys;
}

export const Placeholder = ({
  name = "TBD",
  maxWidth = "5xl",
}: PlaceholderProps) => {
  return (
    <div
      className={`ui-layout ${uiMaxWidth[maxWidth]} m-auto h-28 md:h-48 lg:h-60 grid border-dashed border-2 border-idc-blue-200 rounded-lg items-center justify-center`}
    >
      <p>{name}</p>
    </div>
  );
};
