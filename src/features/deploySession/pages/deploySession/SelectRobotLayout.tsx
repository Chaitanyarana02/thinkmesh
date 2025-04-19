import ConnectWallet from "../../../../components/layout/ConnectWallet";
import SelectRobotBody from "./SelectRobotBody";
import SelectRobotHeader from "./SelectRobotHeader";
import SelectRobotSidebar from "./SelectRobotSidebar";

const SelectRobotLayout = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-bold font-sansBold uppercase">Deploy Session <span className="ml-2 font-mono font-[500] text-sm px-4 py-1 rounded-full bg-[#28F2A159]">Beta</span></div>
        <div><ConnectWallet  type="logo" noText={true} /> </div>
      </div>
      <div className="flex gap-4 w-full">
        <SelectRobotSidebar />
        <div className="flex flex-col gap-2 w-full px-4 z-0">
          <SelectRobotHeader />
          <SelectRobotBody />
        </div>
      </div>
    </div>

  );
};

export default SelectRobotLayout;
