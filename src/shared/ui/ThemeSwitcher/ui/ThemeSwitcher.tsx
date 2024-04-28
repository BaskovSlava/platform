import { classNames } from "shared/lib/classNames/classNames";
import cls from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-sunny.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? (
          <div className={cls.theme}>
            <DarkIcon /> <p>Тёмная</p>
          </div>
        ) : (
          <div className={cls.theme}>
            <LightIcon /> <p>Светлая</p>
          </div>
        )}
      </Button>
    </div>
  );
};
