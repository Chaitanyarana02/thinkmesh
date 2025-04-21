import { useEffect, useState } from 'react';
import DoubleIcon from '../../../../../assets/Images/doubleClick.svg';
import CircuitIcon from '../../../../../assets/Images/circuit.svg';
import InProgressIcon from '../../../../../assets/Images/inProgress.svg';

interface Step {
  title: string;
  description: string;
  image: string;
}

const steps: Step[] = [
  { title: 'Finding resources', description: 'Allocating compute and storage resources', image: CircuitIcon },
  { title: 'Initialing session', description: 'Setting up the simulation environment', image: CircuitIcon },
  { title: 'Downloading content', description: 'Retrieving assets and models', image: CircuitIcon },
  { title: 'Connecting to server', description: 'Establishing secure connection', image: CircuitIcon },
  { title: 'Loading simulations', description: 'Preparing the virtual environment', image: CircuitIcon },
  { title: 'Initializing sensors', description: 'Calibrating and configuring sensors', image: CircuitIcon },
  { title: 'Loading AI models', description: 'Preparing neural networks and perception models', image: CircuitIcon },
];

const LaunchingSimulationBody = ({ onNext }: { onNext: () => void }) => {
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [stepStatus, setStepStatus] = useState<('idle' | 'inProgress' | 'completed')[]>(
    Array(steps.length).fill('idle')
  );

  useEffect(() => {
    if (currentStep < steps.length) {
      // 1. Mark current as "inProgress"
      const updateToInProgress = setTimeout(() => {
        setStepStatus((prev) => {
          const updated = [...prev];
          updated[currentStep] = 'inProgress';
          return updated;
        });
      }, 100); // small delay

      // 2. After 1s, mark it as "completed" and move to next
      const updateToCompleted = setTimeout(() => {
        setStepStatus((prev) => {
          const updated = [...prev];
          updated[currentStep] = 'completed';
          return updated;
        });
        setCurrentStep((prev) => prev + 1);
      }, 1700);

      return () => {
        clearTimeout(updateToInProgress);
        clearTimeout(updateToCompleted);
      };
    } else {
      // All steps complete
      setTimeout(() => {
        onNext?.();
      }, 500);
    }
  }, [currentStep]);

  return (
    <div className="w-full max-w-[500px] md:h-[calc(100vh-108px)] flex m-auto">
      <div className="w-full h-fit m-auto">
        <div className="text-[#000F09] text-lg md:text-2xl font-bold mb-6 uppercase text-center mb-8">
          Launching Simulation
        </div>
        {steps.map((step, index) => {
          const status = stepStatus[index];
          let icon = step.image;

          if (status === 'inProgress') {
            icon = InProgressIcon;
          } else if (status === 'completed') {
            icon = DoubleIcon;
          }

          return (
            <div
              key={index}
              className="flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]"
            >
              <div>
                <img
                  src={icon}
                  alt={step.title}
                  className={status === 'inProgress' ? 'animate-spin' : ''}
                />
              </div>
              <div>
                <div className="text-[#000F09] text-base font-bold mb-1">
                  {step.title}
                </div>
                <div className="text-[#475467] text-sm">{step.description}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LaunchingSimulationBody;
