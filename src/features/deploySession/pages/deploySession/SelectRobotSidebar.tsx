const sidebarItems = [
  { count: "1" },
  { count: "2" },
  { count: "3" },
  { count: "4" },
];

const SelectRobotSidebar = () => {
  return (
    <>
      <div className="flex flex-col gap-8">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-200/50 px-2 py-1 rounded-full cursor-pointer"
          >
            <span>{item.count}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SelectRobotSidebar;
