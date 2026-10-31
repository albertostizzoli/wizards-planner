import type { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">

      <Sidebar />

      <main className="main-content">
        {children}
      </main>

    </div>
  );
}

export default MainLayout;