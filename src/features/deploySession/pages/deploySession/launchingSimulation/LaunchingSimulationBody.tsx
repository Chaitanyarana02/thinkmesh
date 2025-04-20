import DoubleIcon from '../../../../../assets/Images/doubleClick.svg';
import CircuitIcon from '../../../../../assets/Images/circuit.svg';
import InProgressIcon from '../../../../../assets/Images/inProgress.svg';
import { useEffect } from 'react';

const LaunchingSimulationBody = ({ onNext }: { onNext: () => void }) => {

  useEffect(() => {
    setTimeout(() => {
      onNext();
    }, 3000);
  }, []);

  return (
    <div className="w-full max-w-[500px] md:h-[calc(100vh-108px)] flex m-auto">
      <div className="w-full h-fit m-auto">
        <div className="text-[#000F09] text-lg md:text-2xl font-bold mb-6 uppercase text-center mb-8">
          Launching Simulation
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={DoubleIcon} alt="DoubleIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Finding resources</div>
            <div className='text-[#475467] text-sm'>Allocating compute and storage resources</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={DoubleIcon} alt="DoubleIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Initialing session</div>
            <div className='text-[#475467] text-sm'>Setting up the simulation environment</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={DoubleIcon} alt="DoubleIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Downloading content</div>
            <div className='text-[#475467] text-sm'>Retrieving assets and models</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={DoubleIcon} alt="DoubleIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Connecting to server</div>
            <div className='text-[#475467] text-sm'>Establishing secure connection</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={InProgressIcon} alt="InProgressIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Loading simulations</div>
            <div className='text-[#475467] text-sm'>Preparing the virtual environment</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={InProgressIcon} alt="InProgressIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Initializing sensors</div>
            <div className='text-[#475467] text-sm'>Calibrating and configuring sensors</div>
          </div>
        </div>
        <div className='flex items-center gap-4 mb-3 p-4 rounded-lg border border-[#C8C9C866]'>
          <div>
            <img src={CircuitIcon} alt="CircuitIcon" />
          </div>
          <div>
            <div className='text-[#000F09] text-base font-bold mb-1'>Loading AI models</div>
            <div className='text-[#475467] text-sm'>Preparing neural networks and perception models</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchingSimulationBody;
