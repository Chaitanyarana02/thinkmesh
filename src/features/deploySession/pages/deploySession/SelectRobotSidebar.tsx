import CheckedIcon from '../../../../assets/images/checked.svg';

const sidebarItems = [
  { count: "1" },
  { count: "2" },
  { count: "3" },
  { count: "4" },
];

export default function SelectRobotSidebar({ currentStep = 0 }) {
  return (
    <div className="flex flex-row justify-between md:justify-start md:flex-col items-center relative">
      {sidebarItems.map((item, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const isLast = index === sidebarItems.length - 1;

        return (
          <div
            key={index}
            className={`flex flex-row md:flex-col items-center z-10 relative ${isLast ? "" : "w-full"}`}
          >
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full
                ${isActive || isCompleted
                  ? "bg-[#28F2A1] text-black font-bold"
                  : "bg-[#F5F5F5] text-gray-500 font-semibold"
                }`}
            >
              {isCompleted ? (
                <img src={CheckedIcon} alt="Completed" className="w-5 h-5" />
              ) : (
                item.count
              )}
            </div>
            {!isLast && (
              <div className="absolute md:relative w-full h-px md:w-px md:h-24 bg-[#C8C9C866] -z-10" />
            )}
          </div>
        );
      })}
    </div>
  );
}
