import { useState } from "react";

const selectRobotBodyData = [
  {
    id: 1,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 2,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 3,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 4,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 5,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 6,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 7,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 8,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 9,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 10,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    id: 11,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 12,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 13,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 14,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 15,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 16,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    id: 17,
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
];

const SelectRobotBody = ({ onNext }: { onNext: () => void }) => {
  const [selectedRobots, setSelectedRobots] = useState<any[]>([]); // array to hold selected objects

  const handleCardClick = (robot: any) => {
    setSelectedRobots((prev) => {
      const alreadySelected = prev.find((r) => r.id === robot.id);
      if (alreadySelected) {
        return prev.filter((r) => r.id !== robot.id); // deselect
      }
      return [...prev, robot]; // select
    });
  };

  const isSelected = (robot: any) => {
    return selectedRobots.some((r) => r.id === robot.id);
  };

  return (
    <div>
      <div className="md:border border-gray-400/50 rounded-xl md:px-4 md:py-6 sm:pr-2 pl-0 sm:pl-6 bg-white z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 h-[calc(100vh-390px)] md:h-[calc(100vh-365px)] overflow-y-scroll pr-3 custom-green-scrollbar">
          {selectRobotBodyData.map((item, index) => {
            const selected = isSelected(item);

            return (
              <div
                key={index}
                className={`border ${selected ? "border-[3px] border-[#28F2A1] shadow-md" : "border-[#C8C9C866]"} 
                  rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 
                  bg-white h-[233px] cursor-pointer relative`}
                onClick={() => handleCardClick(item)}
              >
                <div className="relative">
                  {item.premium && (
                    <>
                      <div className="absolute top-2 left-2 z-10">
                        <button className="bg-[#28F2A1] text-[#000F09] text-xs px-3 py-1 rounded-full font-medium">
                          {item.premium}
                        </button>
                      </div>
                      <div className="absolute top-2 right-2 z-10">
                        <img
                          src={item.lockIcon}
                          alt="lock icon"
                          className="w-8 h-8"
                        />
                      </div>
                    </>
                  )}
                  <div className="relative">
                    <img
                      src={item.img}
                      alt="Robot"
                      className="w-full h-36 object-cover rounded-t-xl"
                    />
                    {item.premium && item.lockIcon && (
                      <div className="absolute inset-0 bg-black bg-opacity-40 rounded-t-xl" />
                    )}
                  </div>
                </div>

                <div className="px-4 py-4">
                  <span className="block text-md font-semibold text-gray-800 mb-2">
                    {item.title}
                  </span>
                  <span className="block text-sm text-gray-500">{item.desc}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div>
        <label htmlFor="sessionName" className="text-sm font-medium text-black mb-2 mt-3 block">
          Session Name
        </label>

        <div className="flex rounded-md shadow-sm gap-2 overflow-hidden w-full">
          <input
            id="sessionName"
            type="text"
            placeholder="Enter session name"
            className="flex-1 px-4 py-2 border border-gray-300 text-sm placeholder-gray-400 outline-none rounded-md"
          />
          <button
            type="button"
            className="bg-[#28F2A1] text-black px-3 md:px-6 text-sm font-semibold rounded-md"
            onClick={onNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectRobotBody;
