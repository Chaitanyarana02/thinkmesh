// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import SelectRobot from "../features/deploySession/pages/SelectRobot";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<SelectRobot />} />
      </Route>
    </Routes>
  );
}
