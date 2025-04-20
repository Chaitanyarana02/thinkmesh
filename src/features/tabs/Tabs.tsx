import React, { useState } from "react";

type Tab = {
    label: React.ReactNode;
    content: React.ReactNode;
};

interface TabsProps {
    tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
    const [selectedTab, setSelectedTab] = useState(0);

    return (
        <div className="w-full">
            {/* Tab Header */}
            <div className="flex border-b bg-[#E7E7E7] w-full md:w-fit rounded-lg overflow-hidden p-1">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`w-full md:w-fit py-1 px-4 text-sm font-medium rounded-lg transition-colors duration-200 ${selectedTab === index
                            ? "bg-[#28F2A1] text-[#000F09]"
                            : "bg-transparent text-[#475467] hover:text-gray-700 hover:border-gray-300"
                            }`}
                        onClick={() => setSelectedTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="mt-4">
                <div className="md:border border-[#00000014] bg-white rounded-xl md:px-4 md:py-4 sm:pr-2 pl-0 bg-white z-10">
                    {tabs[selectedTab]?.content}
                </div>
            </div>
        </div>
    );
};

export default Tabs;
