import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Modal } from "shared/ui/Modal/Modal";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { useCallback, useState } from "react";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal(prev => !prev)
  }, [])

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
          {t("Главная")}
        </AppLink>
        <AppLink to={"/about"}>{t("О нас")}</AppLink>
        <Button onClick={onToggleModal} theme={ThemeButton.CLEAR_INVERNED}>{t("Войти")}</Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae
          eius obcaecati voluptate. Quo, ullam autem laudantium rem impedit ad
          consectetur cum sit nesciunt quam pariatur repellat sunt labore esse
          aperiam.
        </Modal>
      </div>
    </div>
  );
};
