import ConnectWallet from "../../../../components/layout/ConnectWallet";
import SelectRobotBody from "./SelectRobotBody";
import SelectRobotHeader from "./SelectRobotHeader";
import SelectRobotSidebar from "./SelectRobotSidebar";

const SelectRobotLayout = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-base md:text-2xl font-bold font-sansBold uppercase flex items-center">Deploy Session <span className="ml-3 font-mono font-[500] text-sm px-4 py-0 md:py-1 rounded-full bg-[#28F2A159] text-[#027A48] capitalize">Beta</span></div>
        <div><ConnectWallet type="logo" noText={true} /> </div>
      </div>
      <div className="flex gap-4 w-full flex-col md:flex-row">
        <SelectRobotSidebar />
        <div className="flex flex-col gap-2 w-full px-0 md:px-4 z-0">
          <SelectRobotHeader />
          <SelectRobotBody />
        </div>
      </div>
    </div>

  );
};

export default SelectRobotLayout;
