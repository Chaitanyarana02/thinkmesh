// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Deploy Session", path: "/" },
  { label: "Session History", path: "/session-history" },
  { label: "Storage", path: "/storage" },
  { label: "Validators", path: "/validators" },
  { label: "My Profile", path: "/profile" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-gray-100 p-6">
      <div className="text-2xl font-bold mb-8">ThinkMesh</div>
      <ul className="space-y-4">
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `block px-2 py-1 rounded hover:bg-gray-200 ${
                  isActive ? "bg-gray-300 font-semibold" : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
}
