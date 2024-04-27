import "./styles/index.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import MainPage from "pages/MainPage/ui/MainPage";
import AboutPage from "pages/AboutPage/ui/AboutPage";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme } = useTheme();
  return (
    <div
      className={classNames("app", { hovered: true, selected: true }, [theme])}
    >
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
