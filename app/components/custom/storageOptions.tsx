import { FC } from "react";

import { ToggleGroup, ToggleGroupItem } from "../ui";

type TStorageOptions = {
  options: string[];
  selected: string;
  onSelect: (option: string) => void;
};

export const StorageOptions: FC<TStorageOptions> = ({
  options,
  selected,
  onSelect,
}) => {
  const handleSelect = (option: string) => {
    if (option) onSelect(option);
  };

  return (
    <ToggleGroup
      type="single"
      className="gap-4"
      defaultValue={selected}
      onValueChange={handleSelect}
    >
      {options.map((option) => (
        <ToggleGroupItem
          key={option}
          value={option}
          aria-label={option}
          className="bg-gray-100 border border-gray-300 rounded-md data-[state=on]:pointer-events-none data-[state=on]:bg-primary data-[state=on]:text-secondary"
        >
          {option}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
};
StorageOptions.displayName = "StorageOptions";
