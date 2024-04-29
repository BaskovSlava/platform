import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const {t} = useTranslation();
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <p>
          <LangSwitcher />
        </p>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={cls.mainLink}
        >
           {t('Главная')}
        </AppLink>
        <AppLink to={"/about"}>{t('О нас')}</AppLink>
      </div>
    </div>
  );
};



      