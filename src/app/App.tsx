import "./styles/index.scss";
import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect } from "react"

export const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", { hovered: true, selected: true }, [theme])} >
      <Suspense fallback="">
      <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  );
};

export default App;
