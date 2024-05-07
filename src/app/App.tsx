import { classNames } from "shared/lib/classNames/classNames";
import { useTheme } from "app/providers/ThemeProvider/lib/useTheme";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { Suspense, useEffect, useState } from "react"
import { Modal } from "shared/ui/Modal/Modal";

export const App = () => {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={classNames("app", { hovered: true, selected: true }, [theme])} >
      <Suspense fallback="">
      <Navbar />
      {/* <button onClick={() => setIsOpen(true)}>toggle</button> */}
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>

    </div>
  );
};

export default App;
