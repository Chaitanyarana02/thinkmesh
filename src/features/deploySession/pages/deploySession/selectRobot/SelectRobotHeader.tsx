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
    <div className="flex flex-col gap-2">
      <div className="flex flex-col gap-2 w-full md:w-[90%] sm:w-[75%] md:w-[65%] lg:w-[45%]">
        <span className="text-lg md:text-2xl font-semibold text-gray-800 uppercase">
          Select Robot
        </span>
        <div className="relative w-full md:max-w-xs">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#999F9D] w-4 h-4" />
          <input
            type="text"
            placeholder="Search sessions..."
            className="w-full pl-10 pr-3 py-1.5 text-sm border border-[#C8C9C866] rounded-md 
               focus:outline-none focus:ring-1 focus:ring-gray-400 
               placeholder:text-[#000F0966]"
          />
        </div>

      </div>
      <div className="flex flex-nowrap gap-3 mb-1 overflow-x-auto pb-3 px-2">
        {filterOptions.map((item, idx) => (
          <label
            key={idx}
            className={`flex items-center gap-2 cursor-pointer transition mr-3 ${selected === item.label
              ? "text-[#000F09]"
              : "text-[#475467]"
              }`}
          >
            <input
              type="checkbox"
              className="accent-white border border-gray-500/50 checked:ring-1 checked:rounded-full checked:ring-[#28F2A1] "
              checked={selected === item.label}
              onChange={() =>
                setSelected((prev) => (prev === item.label ? "" : item.label))
              }
            />

            <span className={`font-medium text-sm ${selected === item.label ? 'text-[#000F09]' : 'text-gray-400'} `}>
              {item.label}
            </span>
            {item.count !== undefined && (
              <span className="text-xs bg-[#2525250F]  px-3 rounded-full">
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
