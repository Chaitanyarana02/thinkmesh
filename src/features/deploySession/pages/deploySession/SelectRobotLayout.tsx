import SelectRobotBody from "./SelectRobotBody";
import SelectRobotHeader from "./SelectRobotHeader";
import SelectRobotSidebar from "./SelectRobotSidebar";

const SelectRobotLayout = () => {
  return (
    <div className="flex gap-4 w-full">
      <SelectRobotSidebar />
      <div className="flex flex-col gap-4 w-full">
        <SelectRobotHeader />
        <SelectRobotBody />
      </div>
    </div>
  );
};

export default SelectRobotLayout;
