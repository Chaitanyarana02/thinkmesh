import { useState } from "react";
import { Search } from "lucide-react";

const filterOptions = [
  { label: "All" },
  { label: "Location", count: 3 },
  { label: "Aerial", count: 2 },
  { label: "Humanoid", count: 1 },
  { label: "Wheeled", count: 2 },
];

const SelectRobotHeader = () => {
  const [selected, setSelected] = useState("All");

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6">
      <div className="flex flex-col gap-2 w-[90%] sm:w-[75%] md:w-[65%] lg:w-[45%]">
        <span className="text-2xl font-semibold text-gray-800">
          Select Robot
        </span>
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            placeholder="Search sessions..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500/50 placeholder:text-gray-500/70 placeholder:font-medium"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-3 mt-2">
        {filterOptions.map((item, idx) => (
          <label
            key={idx}
            className={`flex items-center gap-2 border rounded-full px-4 py-1 cursor-pointer transition ${
              selected === item.label
                ? "border-gray-700 bg-gray-100"
                : "border-gray-300 hover:bg-gray-100"
            }`}
          >
            <input
              type="checkbox"
              className="accent-white border border-gray-500/50 checked:border checked:border-green-400"
              checked={selected === item.label}
              onChange={() =>
                setSelected((prev) => (prev === item.label ? "" : item.label))
              }
            />
            <span className="font-medium text-sm text-gray-700">
              {item.label}
            </span>
            {item.count !== undefined && (
              <span className="text-sm bg-gray-300 text-gray-700 px-2 py-0.5 rounded-full">
                {item.count}
              </span>
            )}
          </label>
        ))}
      </div>
    </div>
  );
};

export default SelectRobotHeader;
