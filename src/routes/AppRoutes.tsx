// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import SelectRobotLayout from "../features/deploySession/pages/deploySession/SelectRobotLayout";
import SessionHstory from "../features/deploySession/pages/sessionHistory/SessionHstory";
import Storage from "../features/deploySession/pages/storage/Storage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<SelectRobotLayout />} />
        <Route path="/session-history" element={<SessionHstory />} />
        <Route path="/storage" element={<Storage />} />
      </Route>
    </Routes>
  );
}
