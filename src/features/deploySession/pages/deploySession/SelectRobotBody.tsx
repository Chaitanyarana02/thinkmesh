const selectRobotBodyData = [
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
    premium: "Premium",
    lockIcon: "/assets/selectRobot/lockIcon.svg",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
  {
    img: "/assets/selectRobot/image.png",
    title: "AgileX Hunter",
    desc: "Locomotion",
  },
];

const SelectRobotBody = () => {
  return (
    <div>
      <div className="border border-gray-400/50 rounded-xl px-4 py-6 sm:pr-2 sm:pl-6 bg-white z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 h-[calc(100vh-365px)] overflow-y-scroll pr-3 custom-green-scrollbar">
          {selectRobotBodyData.map((item, index) => (
            <div
              key={index}
              className="border border-[#C8C9C866] rounded-xl overflow-hidden hover:shadow-md transition-shadow duration-200 bg-white h-[233px]"
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
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="sessionName" className="text-sm font-medium text-black mb-2 mt-3 block">
          Session Name
        </label>

        <div className="flex rounded-md shadow-sm gap-2 overflow-hidden w-full ">
          <input
            id="sessionName"
            type="text"
            placeholder="Enter session name"
            className="flex-1 px-4 py-2 border border-gray-300 text-sm placeholder-gray-400 outline-none rounded-md"
          />
          <button
            type="button"
            className="bg-[#28F2A1] text-black px-6 text-sm font-semibold rounded-md"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  );
};

export default SelectRobotBody;
