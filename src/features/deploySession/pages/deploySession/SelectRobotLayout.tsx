import { useState } from "react";
import ConnectWallet from "../../../../components/layout/ConnectWallet";
import SelectRobotBody from "./selectRobot/SelectRobotBody";
import SelectRobotHeader from "./selectRobot/SelectRobotHeader";
import SelectRobotSidebar from "./SelectRobotSidebar";
import SelectSceneHeader from "./selectScene/SelectSceneHeader";
import SelectSceneBody from "./selectScene/SelectSceneBody";
import ConfigureSensorsHeader from "./configureSensors/ConfigureSensorsHeader";
import ConfigureSensorsBody from "./configureSensors/ConfigureSensorsBody";
import ConfigureAIHeader from "./configureAI/ConfigureAIHeader";
import ConfigureAIBody from "./configureAI/ConfigureAIBody";
import DeploySummaryHeader from "./deploySummary/DeploySummaryHeader";
import DeploySummaryBody from "./deploySummary/DeploySummaryBody";
import LaunchingSimulationHeader from "./launchingSimulation/LaunchingSimulationHeader";
import LaunchingSimulationBody from "./launchingSimulation/LaunchingSimulationBody";
import LastPremiumHeader from "./lastPremium/LastPremiumHeader";
import LastPremiumBody from "./lastPremium/LastPremiumBody";

const SelectRobotLayout = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const steps = [
    {
      Header: <SelectRobotHeader />,
      Body: <SelectRobotBody onNext={handleNext} />,
    },
    {
      Header: <SelectSceneHeader />,
      Body: <SelectSceneBody onBack={handleBack} onNext={handleNext} />,
    },
    {
      Header: <ConfigureSensorsHeader />,
      Body: <ConfigureSensorsBody onBack={handleBack} onNext={handleNext} />,
    },
    {
      Header: <ConfigureAIHeader />,
      Body: <ConfigureAIBody onBack={handleBack} onNext={handleNext} />,
    },
    {
      Header: <DeploySummaryHeader />,
      Body: <DeploySummaryBody onNext={handleNext} />,
    },
    {
      Header: <LaunchingSimulationHeader />,
      Body: <LaunchingSimulationBody onNext={handleNext} />,
    },
    {
      Header: <LastPremiumHeader />,
      Body: <LastPremiumBody />,
    },
    // Add more steps if needed
  ];

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="text-base md:text-2xl font-bold font-sansBold uppercase flex items-center">
          Deploy Session
          <span className="ml-3 font-mono font-[500] text-sm px-4 py-0 md:py-1 rounded-full bg-[#28F2A159] text-[#027A48] capitalize">
            Beta
          </span>
        </div>
        <div>
          <ConnectWallet type="logo" noText={true} />
        </div>
      </div>

      <div className="flex gap-4 w-full flex-col md:flex-row">
        <SelectRobotSidebar currentStep={currentStep} />
        <div className="w-full">
          <div className={`flex flex-col gap-2 w-full ${currentStep >= 5 ? "px-0" : "px-0 md:px-4"}`}>
            {steps[currentStep].Header}
            {steps[currentStep].Body}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectRobotLayout;
