// src/components/layout/LayoutWrapper.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function LayoutWrapper() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 overflow-y-auto p-6 bg-white">
        <Outlet />
      </main>
    </div>
  );
}
