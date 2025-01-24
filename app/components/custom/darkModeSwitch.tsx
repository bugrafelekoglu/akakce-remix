import { ComponentProps, FC, useState } from "react";

import { cn } from "@/lib/utils";
import { Label, Switch } from "../ui";

type DarkModeSwitchProps = ComponentProps<typeof Switch> & {
  containerClassName?: string;
};

export const DarkModeSwitch: FC<DarkModeSwitchProps> = ({
  containerClassName,
  className,
  ...props
}) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={cn(
        "flex items-center space-x-2 bg-background p-2 rounded-lg",
        containerClassName
      )}
    >
      <Switch
        id="dark-mode-switch"
        checked={isDarkMode}
        onCheckedChange={handleDarkModeToggle}
        className={cn(className)}
        {...props}
      />
      <Label htmlFor="dark-mode-switch">Dark Mode</Label>
    </div>
  );
};
DarkModeSwitch.displayName = "DarkModeSwitch";
