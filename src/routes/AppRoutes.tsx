// src/routes/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import LayoutWrapper from "../components/layout/LayoutWrapper";
import SelectRobotLayout from "../features/deploySession/pages/deploySession/SelectRobotLayout";
import SessionHistory from "../features/deploySession/pages/sessionHistory/SessionHistory";
import Storage from "../features/deploySession/pages/storage/Storage";
import ProfileLayout from "../features/deploySession/pages/profile/ProfileLayout";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<SelectRobotLayout />} />
        <Route path="/session-history" element={<SessionHistory />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/profile" element={<ProfileLayout />} />
      </Route>
    </Routes>
  );
}
